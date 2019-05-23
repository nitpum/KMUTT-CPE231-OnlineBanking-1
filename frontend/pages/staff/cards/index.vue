<template>
  <v-container>
    <v-btn color="accent" fixed bottom fab right @click="createDialog = true">
      <v-icon>add</v-icon>
      <create-dialog v-model="createDialog" />
    </v-btn>
    <v-text-field
      label="Search"
      placeholder="Search"
      prepend-inner-icon="search"
      solo
    ></v-text-field>
    <v-layout align-center>
      <v-flex v-for="(card, i) in cards" :key="i" md4 sm12 xs12 mb-3 pr-3>
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
import CreditCard from '@/components/creditcard/Card'
import CreateDialog from '@/components/creditcard/Create'

export default {
  layout: 'staff',
  components: {
    CreditCard,
    CreateDialog
  },
  data: () => ({
    createDialog: false,
    cards: [{}, {}, {}] // @todo #3 API search card
  })
}
</script>
