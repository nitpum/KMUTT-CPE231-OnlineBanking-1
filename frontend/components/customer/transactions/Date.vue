<template>
  <v-card class="mb-3">
    <v-card-text primary-title>
      <div class="headline">{{ date }}</div>
    </v-card-text>
    <v-divider />
    <v-list two-line subheader>
      <v-list-tile v-for="(item, i) in items" :key="'item-' + i">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.type }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ item.desc }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-content>
          <v-list-tile-title class="text-xs-right">
            {{ format(item.amount) }}
          </v-list-tile-title>
          <v-list-tile-sub-title class="text-xs-right">
            {{ item.desc }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    date: 'Dec 12, 2019',
    items: [
      {
        type: 'Purchase',
        desc: 'Google Play Store',
        time: '07:36:25 PM',
        amount: -62.17
      },
      {
        type: 'Deposit',
        desc: 'via ADM',
        time: '10:10:39 AM',
        amount: +500.0
      }
    ]
  }),
  methods: {
    format(value) {
      return [
        value < 0 ? '' : '+',
        typeof value === 'number'
          ? Number(value)
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
          : value
      ].join('')
    }
  }
}
</script>
