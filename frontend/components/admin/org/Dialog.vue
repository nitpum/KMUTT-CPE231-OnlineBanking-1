<template>
  <v-dialog v-model="dialog" lazy max-width="400" persistent>
    <v-card>
      <v-card-title primary-title>
        <h2>
          {{ mode === 'create' ? 'Create ' : '' }}
          Organization
        </h2>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="name" label="Organization Name" required />
        <v-select
          v-model="type"
          label="Type"
          :items="types"
          item-text="text"
          item-value="value"
        />
        <v-text-field v-model="bankSwift" label="Bank Swift" required />
        <v-text-field
          v-model="bankAccount"
          label="Bank Account"
          mask="###-#-#####-#"
          required
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="dialog = false">Close</v-btn>
        <v-btn
          color="primary"
          flat
          :loading="loading"
          :disabled="disabled"
          @click="submit"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'create'
    },
    name: {
      type: String,
      default: ''
    },
    bankSwift: {
      type: String,
      default: ''
    },
    bankAccount: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    value: false,
    types: [
      {
        text: 'Bank',
        value: 'BANK'
      },
      {
        text: 'Company',
        value: 'COMPANY'
      },
      {
        text: 'ETC',
        value: 'ETC'
      }
    ],
    loading: false
  }),
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    disabled() {
      return (
        !this.name ||
        !this.type ||
        !this.bankSwift ||
        !this.bankAccount ||
        this.loading
      )
    }
  },
  methods: {
    submit() {
      if (this.mode === 'create') this.create()
      else if (this.mode === 'update') this.update()
    },
    create() {
      this.loading = true
      this.$axios
        .post('/organization/create', {
          name: this.name,
          type: this.type,
          bankSwift: this.bankSwift,
          bankAccount: this.bankAccount
        })
        .then(res => {
          this.dialog = false
          this.name = ''
          this.type = ''
          this.bankSwift = ''
          this.bankAccount = ''
          this.$emit('onSubmitSuccess').$store.dispatch(
            'snackbars/success',
            'Success'
          )
          this.$emit('created')
        })
        .catch(e => {
          this.$store.dispatch('snackbars/show', e.message)
        })
        .finally(() => {
          this.loading = false
        })
    },
    update() {}
  }
}
</script>
