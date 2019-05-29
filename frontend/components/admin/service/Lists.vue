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
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    headers: [
      {
        text: 'ID',
        value: 'id'
      },
      {
        text: 'Detail',
        value: 'detail'
      },
      {
        text: 'Type',
        value: 'type'
      },
      {
        text: 'Organization',
        value: 'organization'
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
