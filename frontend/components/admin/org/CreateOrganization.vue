<template>
  <v-dialog v-model="dialog" lazy max-width="500" persistent>
    <template v-slot:activator="{ on }">
      <v-btn color="primary" v-on="on">
        Create Organization
      </v-btn>
    </template>
    <v-card>
      <v-card-title primary-title>
        <h2>Create Organization</h2>
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
          @click="create()"
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
    }
  },
  data: () => ({
    dialog: false,
    name: '',
    type: '',
    bankSwift: '',
    bankAccount: '',
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
        })
        .catch(e => {
          /* error handler here */
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
