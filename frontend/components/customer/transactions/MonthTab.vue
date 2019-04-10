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
    <v-tab v-for="(month, i) in months" :key="'tab-' + i" ripple>
      {{ month }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  data: () => ({
    active: null,
    months: ['OCT 2019', 'NOV 2019', 'DEC 2019']
  })
}
</script>
