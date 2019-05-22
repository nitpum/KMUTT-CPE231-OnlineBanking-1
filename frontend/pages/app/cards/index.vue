<template>
  <div>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs4>
          <v-btn color="green white--text">ACTIVATE</v-btn>
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
/* eslint-disable */
import { mapState } from 'vuex'
import CreditCard from '@/components/CreditCard'

export default {
  layout: 'customer',
  components: {
    CreditCard
  },
  computed: {
    ...mapState({
      cards: state => state.card.cards
    })
  }
}
</script>
