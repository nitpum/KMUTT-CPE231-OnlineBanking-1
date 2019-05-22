<template>
  <div>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs4>
          <v-btn color="green white--text" @click="createDialog = true">
            ACTIVATE
            <create-dialog :dialog.sync="createDialog" />
          </v-btn>
          <credit-card />
          <credit-card
            v-for="(card, i) in cards"
            :key="i"
            :censor="true"
            :number="card.number"
            :holder="card.holder ? card.holder : ''"
            :card-type="card.type ? card.type : ''"
            :provider="card.provider ? card.provider : ''"
            :account-id="card.accountId ? card.accountId : ''"
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
  layout: 'customer',
  components: {
    CreditCard,
    CreateDialog
  },
  data: () => ({
    createDialog: false
  })
}
</script>
