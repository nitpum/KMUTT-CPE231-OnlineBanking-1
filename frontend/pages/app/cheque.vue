<template>
  <v-container grid-list-lg>
    <Dialog v-model="dialog"></Dialog>
    <v-layout row wrap>
      <v-flex
        v-for="(cheque, i) in cheques"
        :key="'cheque-' + i"
        xs12
        sm6
        md4
        xl3
      >
        <card
          :cheque-id="cheques.chequeId"
          :account-id="cheque.accountId"
          :amount="cheque.amount"
          :show-more-info="true"
          :show-revoke-btn="true"
          @onMoreInfo="dialog = true"
        ></card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Card from '@/components/core/cheque/Card'
import Dialog from '@/components/core/cheque/Dialog'

export default {
  layout: 'customer',
  components: {
    Card,
    Dialog
  },
  data: () => ({
    dialog: false,
    cheques: []
  }),
  mounted() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.$axios.get('/cheque/query').then(({ data }) => {
        this.cheques = data
      })
    }
  }
}
</script>
