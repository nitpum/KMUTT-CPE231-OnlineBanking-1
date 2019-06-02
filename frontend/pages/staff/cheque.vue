<template>
  <div>
    <v-container>
      <v-btn color="accent" fixed bottom fab right @click="createDialog = true">
        <v-icon>add</v-icon>
      </v-btn>
      <search-box :filter="fn => (filter = fn)" />
      <v-layout row wrap>
        <v-flex
          v-for="(cheque, i) in filter(cheques, [
            'chequeId',
            'accountId',
            'drawee',
            'byOrganizationId',
            'type',
            'amount'
          ])"
          :key="i"
          md4
          sm12
          xs12
          mb-3
          pr-3
        >
          <card
            :show-pay-btn="true"
            :cheque-id="cheque.chequeId"
            :account-id="cheque.accountId"
            @onPay="pay(cheque)"
          />
        </v-flex>
      </v-layout>
    </v-container>
    <pay-dialog v-model="payDialog" :editable="true"></pay-dialog>
    <create-dialog v-model="createDialog"></create-dialog>
  </div>
</template>

<script>
import SearchBox from '@/components/core/SearchBox'
import Card from '@/components/core/cheque/Card'
import PayDialog from '@/components/core/cheque/Dialog'
import CreateDialog from '@/components/staff/cheque/CreateDialog'

export default {
  layout: 'staff',
  components: {
    SearchBox,
    Card,
    PayDialog,
    CreateDialog
  },
  data: () => ({
    account: null,
    payDialog: false,
    createDialog: false,
    cheques: [],
    filter: () => {}
  }),
  mounted() {
    this.fetch()
  },
  methods: {
    pay: function(cheque) {
      this.payDialog = true
    },
    fetch() {
      this.$axios.get('/cheque/query').then(({ data }) => {
        this.cheques = data
      })
    }
  }
}
</script>
