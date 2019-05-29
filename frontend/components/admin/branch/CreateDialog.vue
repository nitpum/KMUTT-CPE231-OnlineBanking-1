<template>
  <v-dialog v-model="model" lazy max-width="500" persistent>
    <v-card>
      <v-card-title primary-title>
        <h2>Create Branch</h2>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
            v-model="name"
            label="Branch Name"
            :rules="rules"
            required
          />
          <v-textarea
            v-model="address"
            label="Address"
            :rules="rules"
            required
          />
          <v-text-field
            v-model="zipcode"
            label="Zipcode"
            mask="#####"
            :rules="rules"
            required
          />
          <v-text-field
            v-model="balance"
            label="Balance"
            type="number"
            :rules="rules"
            required
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="model = false">Close</v-btn>
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
    name: '',
    address: '',
    zipcode: '',
    balance: 0,
    loading: false,
    valid: false,
    rules: [v => !!v || 'Required']
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
      return !this.valid || this.loading
    }
  },
  methods: {
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
