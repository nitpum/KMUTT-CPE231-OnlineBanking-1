<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex v-for="(card, i) in cards" :key="'ov-card-' + i" xs12 sm6>
        <overview-card :title="card.title" :color="card.color" :to="card.to">
          <span class="display-3">
            {{ card.value.split('/')[0] }}
          </span>
          <span
            v-if="card.value.split('/').length > 1"
            class="display-3 font-weight-thin"
          >
            / {{ card.value.split('/')[1] }}
          </span>
        </overview-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import OverviewCard from '@/components/core/overview/Card'

export default {
  layout: 'admin',
  components: {
    OverviewCard
  },
  data: () => ({
    cards: [
      {
        title: 'Login User Per Hours',
        value: '2',
        color: '#EC008C',
        to: '/admin/system/userHours'
      },
      {
        title: 'Transaction Per Hours',
        value: '2',
        color: '#9C27B0',
        to: '/admin/system/transaction'
      }
    ]
  })
}
</script>
