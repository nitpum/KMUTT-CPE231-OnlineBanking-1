<template>
  <div>
    <v-container>
      <v-btn color="accent" fixed bottom fab right @click="createDialog = true">
        <v-icon>add</v-icon>
      </v-btn>
      <v-text-field
        label="Search"
        placeholder="Search"
        prepend-inner-icon="search"
        solo
      ></v-text-field>
      <v-layout row wrap>
        <v-flex v-for="(cheque, i) in cheques" :key="i" md4 sm12 xs12 mb-3 pr-3>
          <card :show-pay-btn="true" @onPay="pay(cheque)"></card>
        </v-flex>
      </v-layout>
    </v-container>
    <pay-dialog v-model="payDialog"></pay-dialog>
    <create-dialog v-model="createDialog"></create-dialog>
  </div>
</template>

<script>
import Card from '@/components/core/cheque/Card'
import PayDialog from '@/components/staff/cheque/PayDialog'
import CreateDialog from '@/components/staff/cheque/CreateDialog'

export default {
  layout: 'staff',
  components: {
    Card,
    PayDialog,
    CreateDialog
  },
  data: () => ({
    account: null,
    payDialog: false,
    createDialog: false,
    cheques: [{}]
  }),
  methods: {
    pay: function(cheque) {
      this.payDialog = true
    }
  }
}
</script>
