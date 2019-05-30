<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex v-for="(card, i) in cards" :key="'ov-card-' + i" xs12 sm6>
        <overview-card :title="card.title" :color="card.color" :to="card.to">
          <span class="display-3">
            {{ data[card.key] || 0 }}
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
        title: 'Daily Active User',
        key: 'activeUser',
        color: '#00BCD4',
        to: '/admin/overview/active-user'
      },
      {
        title: 'Daily New User',
        key: 'newUser',
        color: '#EC008C',
        to: '/admin/overview/new-user'
      },
      {
        title: 'Today Total Transaction',
        key: 'totalTrans',
        color: '#FF9800',
        to: '/admin/overview/today-trans'
      },
      {
        title: 'Daily New Card',
        key: 'newCard',
        color: '#9C27B0',
        to: '/admin/overview/new-card'
      }
    ],
    data: {}
  }),
  mounted() {
    this.$axios.get('/admin/query/overview').then(({ data }) => {
      this.data = data
    })
  }
}
</script>
