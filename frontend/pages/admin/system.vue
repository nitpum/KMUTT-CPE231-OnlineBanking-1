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
        title: 'Notification Send / Read',
        value: '30K/27K',
        color: '#00BCD4'
      },
      {
        title: 'Login User Per Hours',
        value: '2,983',
        color: '#EC008C'
      },
      {
        title: 'OTP Reqeust Per Hours',
        value: '3,243',
        color: '#FF9800'
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
