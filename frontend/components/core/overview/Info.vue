<template>
  <v-card>
    <v-card-title>
      <h3 class="headline mb-0">
        {{ title }}
      </h3>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <slot name="header" />

      <v-layout row wrap>
        <v-flex v-for="(col, i) in overviews" :key="'col-' + i" xs12 sm6>
          <p
            v-for="overview in col"
            :key="overview.key"
            style="text-align:left;"
          >
            {{ overview.label }}
            <span style="float:right;">
              {{ format(data[overview.key], overview.place, overview.suffix) }}
            </span>
          </p>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import numeral from 'numeral'

export default {
  props: {
    title: {
      type: String,
      default: 'Overview'
    },
    overviews: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    format(value, place, suffix) {
      return [
        typeof value === 'number'
          ? numeral(value).format(['0,0', '0'.repeat(place)].join('.'))
          : value,
        suffix
      ].join(' ')
    }
  }
}
</script>
