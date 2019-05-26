<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex
        v-for="(cheque, i) in cheques"
        :key="'cheque-' + i"
        xs12
        sm6
        md4
        xl3
      >
        <cheque-card
          :id="cheque.id"
          :account-id="cheque.accountId"
          :drawee="cheque.drawee"
          :amount="cheque.amount"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ChequeCard from '@/components/core/ChequeCard'

export default {
  layout: 'customer',
  components: {
    ChequeCard
  },
  data: () => ({
    cheques: [
      {
        id: '0-000-000-000-000-000',
        accountId: '000-0-00000-0',
        drawee: 'Euei Naja',
        amount: 25000
      },
      {
        id: '0-000-000-000-000-000',
        accountId: '000-0-00000-0',
        drawee: 'Euei Naja',
        amount: 25000
      }
    ]
  })
}
</script>
