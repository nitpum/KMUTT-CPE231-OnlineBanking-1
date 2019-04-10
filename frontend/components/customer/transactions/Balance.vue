<template>
  <v-card>
    <v-card-title primary-title>
      <span class="headline mb-0">Balance</span>
      <v-spacer />
      <span class="headline mb-0">{{ balance }}</span>
    </v-card-title>
    <v-card-title>
      <v-layout column>
        <v-layout row>
          <v-flex shrink>
            <p class="grey--text text-xs-right my-0">Minimum expense</p>
          </v-flex>
          <v-flex glow>
            <p class="grey--text text-xs-right my-0">{{ minimum }}</p>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex shrink>
            <p class="grey--text text-xs-right my-0">Maximum expense</p>
          </v-flex>
          <v-flex glow>
            <p class="grey--text text-xs-right my-0">{{ maximum }}</p>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex shrink>
            <p class="grey--text text-xs-right my-0">Average expense</p>
          </v-flex>
          <v-flex glow>
            <p class="grey--text text-xs-right my-0">{{ average }}</p>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    balance: '1,902.19',
    minimum: '7.11',
    maximum: '231.00',
    average: '111.20'
  })
}
</script>
