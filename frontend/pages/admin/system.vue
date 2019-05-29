<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex v-for="(card, i) in cards" :key="'ov-card-' + i" xs12 sm6>
        <overview-card :title="card.title" :color="card.color">
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
        title: 'Notification Send / Read',
        value: '30K/27K',
        color: '#00BCD4',
        to: '/admin/system/notification'
      },
      {
        title: 'Login User Per Hours',
        value: '2,983',
        color: '#EC008C'
      },
      {
        title: 'Transaction Per Hours',
        value: '48,021',
        color: '#9C27B0'
      }
    ]
  })
}
</script>
