<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex v-for="(card, i) in cards" :key="'ov-card-' + i" xs12 sm6>
        <overview-card :title="card.title" :color="card.color">
          <span class="display-3">
            {{ card.value }}
          </span>
        </overview-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import OverviewCard from '@/components/core/OverviewCard'

export default {
  layout: 'admin',
  components: {
    OverviewCard
  },
  data: () => ({
    cards: [
      {
        title: 'Daily Active User',
        value: '300,342',
        color: '#00BCD4'
      },
      {
        title: 'Daily New User',
        value: '92',
        color: '#EC008C'
      },
      {
        title: 'Today Total Transaction',
        value: '1,152,504',
        color: '#FF9800'
      },
      {
        title: 'Daily New Card',
        value: '31',
        color: '#9C27B0'
      }
    ]
  })
}
</script>
