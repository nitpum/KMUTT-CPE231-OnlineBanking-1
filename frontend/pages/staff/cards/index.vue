<template>
  <v-container>
    <v-btn color="accent" fixed bottom fab right @click="createDialog = true">
      <v-icon>add</v-icon>
      <create-dialog v-model="createDialog" @onSubmit="fetch" />
    </v-btn>
    <search-box :filter="fn => (filter = fn)" />
    <v-layout align-center row wrap>
      <v-flex
        v-for="(card, i) in filter(cards, ['number', 'holder'])"
        :key="i"
        md4
        sm12
        xs12
        mb-3
        pr-3
      >
        <credit-card
          :censor="true"
          :number="card.number"
          :holder="card.holder ? card.holder : ''"
          :card-type="card.type ? card.type : ''"
          :provider="card.provider ? card.provider : ''"
          :account-id="card.accountId ? card.accountId : ''"
          :show-reset-pin="true"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SearchBox from '@/components/core/SearchBox'
import CreditCard from '@/components/creditcard/Card'
import CreateDialog from '@/components/creditcard/Create'

export default {
  layout: 'staff',
  components: {
    SearchBox,
    CreditCard,
    CreateDialog
  },
  data: () => ({
    createDialog: false,
    cards: [],
    filter: () => {}
  }),
  mounted() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.$axios.get('/card/query').then(res => {
        this.cards = res.data
      })
    }
  }
}
</script>
