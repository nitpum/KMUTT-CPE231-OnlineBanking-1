<template>
  <div>
    <v-container grid-list-md>
      <v-layout justify-end>
        <v-btn color="green white--text" @click="activateDialog = true">
          ACTIVATE
          <activate-dialog :dialog.sync="activateDialog" />
        </v-btn>
      </v-layout>
      <v-layout align-center justify-center>
        <v-flex xs4>
          <credit-card
            v-for="(card, i) in cards"
            :key="i"
            class="mb-2"
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
import ActivateDialog from '@/components/creditcard/Activate'
import { mapState } from 'vuex'

export default {
  layout: 'customer',
  components: {
    CreditCard,
    ActivateDialog
  },
  data: () => ({
    activateDialog: false
  }),
  computed: {
    ...mapState({
      cards: state => state.card.cards
    })
  }
}
</script>
