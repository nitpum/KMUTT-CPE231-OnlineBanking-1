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
    <v-card-actions>
      <v-btn flat color="primary" class="mx-auto">
        Export
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    balance: 1902.19,
    minimum: 7.11,
    maximum: 231.0,
    average: 111.2
  }),
  methods: {
    format(value) {
      return typeof value === 'number'
        ? Number(value)
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        : value
    }
  }
}
</script>
