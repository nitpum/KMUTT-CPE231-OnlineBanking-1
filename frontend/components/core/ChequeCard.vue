<template>
  <v-card>
    <v-card-text>
      <div class="subheading">{{ id }}</div>
      <div class="grey--text">Account ID: {{ accountId }}</div>
      <div class="grey--text">Drawee: {{ drawee }}</div>
      <div class="grey--text">Amount: {{ format(amount) }}</div>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary">
        more info
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import numeral from 'numeral'

export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    accountId: {
      type: String,
      default: ''
    },
    drawee: {
      type: String,
      default: ''
    },
    amount: {
      type: Number,
      default: 0
    }
  },
  methods: {
    format(value) {
      return numeral(value).format('0,0.00')
    }
  }
}
</script>
