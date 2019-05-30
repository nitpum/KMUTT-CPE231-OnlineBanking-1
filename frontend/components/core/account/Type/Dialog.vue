<template>
  <v-dialog v-model="model" lazy max-width="500" persistent>
    <v-card>
      <v-card-title primary-title>
        <h2>{{ title }}</h2>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="data.name" label="Name"></v-text-field>
        <v-text-field v-model="data.fee" label="Fee" type="number" />
        <v-text-field v-model="data.interestMRound" label="Month/Interest" />
        <v-text-field
          v-model="data.interest"
          label="Interest"
          type="number"
          suffix="%"
        />
        <v-text-field v-model="data.DepositRound" label="Deposit Round" />
        <v-text-field
          v-model="data.minDeposit"
          label="Min Deposit"
          type="number"
        />
        <v-text-field
          v-model="data.interestMin"
          label="Min Interest"
          type="number"
          suffix="%"
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
    title: {
      type: String,
      default: 'Create Services Type'
    },
    data: {
      type: Object,
      default() {
        return {
          _id: '',
          name: '',
          fee: '',
          interestMRound: '',
          interest: '',
          DepositRound: '',
          minDeposit: '',
          interestMin: ''
        }
      }
    },
    mode: {
      type: String,
      default: 'create'
    }
  },
  data: () => ({
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
      return (
        !this.data.name ||
        !this.data.fee ||
        !this.data.interestMRound ||
        !this.data.interest ||
        !this.data.DepositRound ||
        !this.data.minDeposit ||
        !this.data.interestMin
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
        .post('/account/type/create', {
          name: this.data.name,
          fee: this.data.fee,
          interestMRound: this.data.interestMRound,
          interest: this.data.interest,
          DepositRound: this.data.DepositRound,
          minDeposit: this.data.minDeposit,
          interestMin: this.data.interestMin
        })
        .then(res => {
          this.model = false
          this.$emit('onSubmit').$store.dispatch('snackbars/success', 'Success')
        })
        .catch(e => {
          this.$store.dispatch('snackbars/show', e.message)
        })
        .finally(() => {
          this.loading = false
        })
    },
    update() {
      this.loading = true
      this.$axios
        .post('/account/type/edit', {
          id: this.data._id,
          data: {
            name: this.data.name,
            fee: this.data.fee,
            interestMRound: this.data.interestMRound,
            interest: this.data.interest,
            DepositRound: this.data.DepositRound,
            minDeposit: this.data.minDeposit,
            interestMin: this.data.interestMin
          }
        })
        .then(res => {
          this.model = false
          this.$emit('onSubmit').$store.dispatch('snackbars/success', 'Success')
        })
        .catch(e => {
          this.$store.dispatch('snackbars/show', e.message)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
