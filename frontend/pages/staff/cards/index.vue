<template>
  <div>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs4>
          <v-btn color="accent" block @click="createDialog = true">
            <v-icon>add</v-icon>
            Create
            <create-dialog v-model="createDialog" />
          </v-btn>
          <v-text-field
            placeholder="Search"
            prepend-inner-icon="search"
            solo
          ></v-text-field>
          <credit-card
            v-for="(card, i) in cards"
            :key="i"
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
  </div>
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
    cards: [] // @todo #3 API search card
  })
}
</script>
