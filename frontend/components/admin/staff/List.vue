<template>
  <v-data-table :headers="headers" :items="items" class="elevation-1">
    <template v-slot:items="{ item }">
      <td>{{ item._id }}</td>
      <td>{{ item.name.firstName }} {{ item.name.lastName }}</td>
      <td class="text-xs-right">{{ item.position }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
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
        text: 'Position',
        value: 'position'
      },
      {
        text: 'Branch',
        value: 'branch'
      }
    ]
  })
}
</script>
