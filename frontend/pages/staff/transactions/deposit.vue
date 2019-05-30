<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-flex md6 sm8 xs12>
          <v-card>
            <v-card-title primary-title>
              <h2>Deposit</h2>
            </v-card-title>
            <v-card-text>
              <select-account v-model="account" />
              <v-text-field
                v-model="amount"
                label="Amount"
                placeholder="0.00"
                type="number"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat>Close</v-btn>
              <v-btn color="primary" flat :disabled="disabled" @click="submit"
                >Submit</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <confirm-dialog
        v-model="confirmDialog"
        title="Deposit Confirm"
        @onYes="create"
      />
    </v-container>
  </div>
</template>

<script>
import SelectAccount from '@/components/core/account/Select'
import ConfirmDialog from '@/components/core/ConfirmDialog'

export default {
  layout: 'staff',
  components: { SelectAccount, ConfirmDialog },
  data: () => ({
    confirmDialog: false,
    account: null,
    dialog: false,
    amount: null,
    message: ''
  }),
  computed: {
    disabled() {
      return !this.amount || !this.account
    }
  },
  methods: {
    submit() {
      this.confirmDialog = true
    },
    create() {
      this.message = `${this.amount} to ${this.account.accountId}`
      this.$axios
        .post('/transaction/staff/deposit', {
          staffId: this.$store.state.user._id,
          accountId: this.account._id,
          amount: this.amount
        })
        .then(res => {
          this.model = false
          this.$emit('onSubmit').$store.dispatch('snackbars/success', 'Success')
          this.account = {}
          this.amount = null
        })
        .catch(e => {
          this.$store.dispatch('snackbars/show', e.message)
        })
    }
  }
}
</script>
