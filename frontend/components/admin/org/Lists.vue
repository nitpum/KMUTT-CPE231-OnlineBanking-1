<template>
  <v-data-table :headers="headers" :items="items">
    <template v-slot:items="{ item, index }">
      <td v-for="header in headers" :key="[index, header.value].join('-')">
        {{ format(item[header.value], header.format) }}
      </td>
    </template>
  </v-data-table>
</template>

<script>
import numeral from 'numeral'
const comma = val => numeral(val).format('0,0')

export default {
  props: {
    requestFetch: {
      type: Function,
      default: null
    }
  },
  data: () => ({
    headers: [
      {
        text: 'ID',
        value: 'id'
      },
      {
        text: 'Name',
        value: 'name'
      },
      {
        text: 'Service Count',
        value: 'services',
        format: comma
      },
      {
        text: 'Average Usage Service Count (Day)',
        value: 'avgUsageServicePD',
        format: comma
      },
      {
        text: 'Max Usage Service Count (Day)',
        value: 'maxUsageServicePD',
        format: comma
      },
      {
        text: 'Average Usage Service Count (Month)',
        value: 'avgUsageServicePM',
        format: comma
      },
      {
        text: 'Max Usage Service Count (Month)',
        value: 'maxUsageServicePM',
        format: comma
      }
    ],
    items: []
  }),
  mounted() {
    this.fetch()
    this.requestFetch(this.fetch)
  },
  methods: {
    format(value, format) {
      return format ? format(value) : value
    },
    fetch() {
      this.$axios.get('/organization/query').then(({ data }) => {
        this.items = data.map(item => ({
          id: item.id,
          name: item.name,
          services: 20,
          avgUsageServicePD: 300,
          maxUsageServicePD: 500,
          avgUsageServicePM: 80000,
          maxUsageServicePM: 100000
        }))
      })
    }
  }
}
</script>
