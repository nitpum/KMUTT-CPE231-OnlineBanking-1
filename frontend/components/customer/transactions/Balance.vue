<template>
  <v-card>
    <v-card-title primary-title>
      <span class="headline mb-0">Balance</span>
      <v-spacer />
      <span class="headline mb-0">{{ format(balance) }}</span>
    </v-card-title>
    <v-card-title>
      <v-layout column>
        <v-layout row>
          <v-flex shrink>
            <p class="grey--text text-xs-right my-0">Minimum expense</p>
          </v-flex>
          <v-flex glow>
            <p class="grey--text text-xs-right my-0">{{ format(minimum) }}</p>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex shrink>
            <p class="grey--text text-xs-right my-0">Maximum expense</p>
          </v-flex>
          <v-flex glow>
            <p class="grey--text text-xs-right my-0">{{ format(maximum) }}</p>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex shrink>
            <p class="grey--text text-xs-right my-0">Average expense</p>
          </v-flex>
          <v-flex glow>
            <p class="grey--text text-xs-right my-0">{{ format(average) }}</p>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-card-title>
  </v-card>
</template>

<script>
import numeral from 'numeral'

export default {
  data: () => ({
    balance: 1902.19,
    minimum: 7.11,
    maximum: 231.0,
    average: 111.2
  }),
  methods: {
    format(value) {
      return numeral(value).format('0,0.00')
    }
  }
}
</script>
