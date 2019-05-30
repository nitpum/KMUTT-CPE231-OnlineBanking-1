<template>
  <v-dialog v-model="model" lazy max-width="500" persistent>
    <v-card>
      <v-card-title primary-title>
        <h2>Branch</h2>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="name" label="Branch Name" required />
        <v-textarea v-model="address" label="Address" required />
        <v-text-field v-model="zipcode" label="Zipcode" mask="#####" required />
        <v-text-field
          v-model="balance"
          label="Balance"
          type="number"
          required
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="model = false">Close</v-btn>
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
    submitMode: {
      type: String,
      default: 'create'
    }
  },
  data: () => ({
    name: '',
    address: '',
    zipcode: '',
    balance: 0,
    loading: false
  }),
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    disabled() {
      return !this.name || !this.address || !this.zipcode || this.loading
    }
  },
  methods: {
    submit() {
      if (this.submitMode === 'create') this.create()
      else if (this.submitMode === 'update') this.update()
    },
    create() {
      this.loading = true
      this.$axios
        .post('/branch/create', {
          name: this.name,
          address: this.address,
          zipcode: this.zipcode,
          balance: this.balance
        })
        .then(res => {
          this.$emit('onSubmit')
          this.name = ''
          this.address = ''
          this.zipcode = ''
          this.balance = 0
          this.$emit('onSubmit').$store.dispatch('snackbars/success', 'Success')
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
