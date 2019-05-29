<template>
  <v-data-table :headers="headers" :items="items" class="elevation-1">
    <template v-slot:items="{ item }">
      <td>{{ item._id }}</td>
      <td>{{ item.detail }}</td>
      <td>{{ item.type.name }}</td>
      <td>{{ item.organization.name }}</td>
      <td class="text-xs-right">
        <v-btn icon @click="$emit('onItemClick', item)">
          <v-icon>edit</v-icon>
        </v-btn>
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
        text: 'Orgnization',
        value: 'orgnization'
      },
      {
        text: '',
        width: '50'
      }
    ]
  })
}
</script>
