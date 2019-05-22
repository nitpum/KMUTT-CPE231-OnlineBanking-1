<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex v-for="(card, i) in cards" :key="'ov-card-' + i" xs12 sm6>
        <v-card>
          <v-sheet :color="card.color" dark class="pa-3">
            <div class="display-3 text-xs-center pt-4">{{ card.value }}</div>
            <div class="headline text-truncate pt-3">{{ card.title }}</div>
          </v-sheet>
          <v-card-actions>
            <v-spacer />
            <v-btn flat color="primary">
              more info
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
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
