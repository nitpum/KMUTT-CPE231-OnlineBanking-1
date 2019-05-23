<template>
  <v-tabs
    v-model="active"
    color="primary"
    dark
    slider-color="accent"
    class="elevation-3"
    centered
    show-arrows
    fixed-tabs
  >
    <v-tab
      v-for="(tab, i) in tabs"
      :key="'tab-' + i"
      ripple
      :to="'/app/transactions/' + tab"
    >
      {{ monthYearString(tab) }}
    </v-tab>
  </v-tabs>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    active: null
  }),
  computed: {
    ...mapGetters({
      tabs: 'transactions/tabs'
    })
  },
  methods: {
    monthYearString(str) {
      const params = RegExp(`(\\d{4})/(\\d{2})`, 'g').exec(str)
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      return `${months[params[2] - 1]}  ${params[1]}`
    }
  }
}
</script>
