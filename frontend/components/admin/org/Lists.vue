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
    items: [
      {
        id: '000',
        name: 'BangMod',
        services: 20,
        avgUsageServicePD: 300,
        maxUsageServicePD: 500,
        avgUsageServicePM: 80000,
        maxUsageServicePM: 100000
      }
    ]
  }),
  methods: {
    format(value, format) {
      return format ? format(value) : value
    }
  }
}
</script>
