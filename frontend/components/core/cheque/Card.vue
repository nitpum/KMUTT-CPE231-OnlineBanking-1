<template>
  <v-card>
    <v-card-title primary-title class="mb-0 pb-0">
      <h3 class="headline mb-0">{{ chequeId }}</h3>
    </v-card-title>
    <v-card-text v-if="accountId" class="pt-0 pb-1 grey--text">
      Account ID: {{ accountId }}
    </v-card-text>
    <v-card-text v-if="bank" class="pt-0 pb-1 grey--text">
      {{ bank }}
    </v-card-text>
    <v-card-text v-if="amount" class="pt-0 pb-1 grey--text">
      Amount: {{ format(amount) }}
    </v-card-text>
    <v-divider class="mt-4" />
    <v-card-actions>
      <v-spacer />
      <v-btn v-if="showRevokeBtn" flat color="red" @click="$emit('onRevoke')">
        Revoke
      </v-btn>
      <v-btn v-if="showPayBtn" flat @click="$emit('onPay')">
        Pay
      </v-btn>
      <v-btn
        v-if="showMoreInfo"
        color="primary"
        flat
        @click="$emit('onMoreInfo')"
      >
        More Info
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import numeral from 'numeral'

export default {
  props: {
    chequeId: {
      type: String,
      default: '000-0-000000-0'
    },
    accountId: {
      type: String,
      default: '000-0-000000-0'
    },
    holder: {
      type: String,
      default: 'Firstname Lastname'
    },
    bank: {
      type: String,
      default: ''
    },
    amount: {
      type: Number,
      default: 0
    },
    showRevokeBtn: {
      type: Boolean,
      default: false
    },
    showPayBtn: {
      type: Boolean,
      default: false
    },
    showMoreInfo: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    format(value) {
      return numeral(value).format('0,0.00')
    }
  }
}
</script>
