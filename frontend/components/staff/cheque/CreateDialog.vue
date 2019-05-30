<template>
  <v-dialog v-model="model" lazy max-width="500">
    <v-card>
      <v-card-title primary-title>
        <h2>Create Cheque</h2>
      </v-card-title>
      <v-card-text>
        <v-select
          v-model="type"
          label="Type"
          placeholder="Type"
          :items="types"
        ></v-select>
        <v-select
          v-model="ourBank"
          :items="[
            {
              text: 'Our',
              value: true
            },
            { text: 'Other', value: false }
          ]"
          label="Bank"
        />
        <org-select v-model="org" />
        <acc-select v-if="ourBank" v-model="account" />
        <v-text-field v-else v-model="accountNo" label="Account No." />
        <v-text-field
          v-model="amount"
          label="Amount"
          placeholder="0.00 THB"
          type="number"
        ></v-text-field>
        <!-- <v-text-field
          v-if="type === 'ORDER'"
          v-model="paywee"
          label="Paywee Name"
          placeholder="Paywee Name"
        ></v-text-field> -->
        <v-text-field
          v-model="drawee"
          label="Drawee Name"
          placeholder="Drawee Name"
        ></v-text-field>
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
          >Submit</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AccSelect from '@/components/core/account/Select'
import OrgSelect from '@/components/admin/org/Select'

export default {
  components: { AccSelect, OrgSelect },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    loading: false,
    type: '',
    types: [
      {
        text: 'Cash',
        value: 'CASH'
      },
      {
        text: 'Order',
        value: 'ORDER'
      }
    ],
    ourBank: true,
    banks: ['Yee bank'],
    bank: '',
    account: {},
    accountNo: '',
    org: {},
    amount: '',
    payee: '',
    drawee: ''
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
      if (this.type === 'ORDER') {
        return (
          !this.type || !this.org || !this.account || !this.amount
          // !this.paywee
        )
      }
      return !this.type || !this.org || !this.account || !this.amount
    }
  },
  methods: {
    submit() {
      const data = {
        amount: this.amount,
        // payee: this.payee,
        type: this.type,
        status: 'ACTIVE',
        drawee: this.drawee
      }
      // if (this.ourBank) {
      //   data.byOrganizationId = this.org._id
      //   data.accountId = this.account._id
      // } else {
      data.byOrganizationId = this.org._id
      data.accountNo = this.accountNo
      // }
      /* eslint-disable no-console */
      console.log(data)
      this.loading = true
      this.$axios
        .post('/cheque/create', data, {
          params: {
            ourBank: this.ourBank
          }
        })
        .then(res => {
          this.$emit('onSubmit').$store.dispatch('snackbars/success', 'Success')
          this.model = false
        })
        .catch(e => {
          if (e.response && e.response.status === 400) {
            this.$store.dispatch('snackbars/show', e.response.data)
          } else {
            this.$store.dispatch('snackbars/show', e.message)
          }
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
