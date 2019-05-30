<template>
  <v-data-table :headers="headers" :items="items" class="elevation-1">
    <template v-slot:items="{ item }">
      <td>{{ item._id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.fee }}</td>
      <td>{{ item.interestMRound }}</td>
      <td class="text-xs-right">
        <v-btn icon @click="$emit('onItemClick', item)">
          <v-icon>edit</v-icon>
        </v-btn>
        <v-btn icon @click="$emit('onRemoveClick', item)">
          <v-icon>delete</v-icon>
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
        value: '_id'
      },
      {
        text: 'Name',
        value: 'name'
      },
      {
        text: 'Fee',
        value: 'fee'
      },
      {
        text: 'Interest Round',
        value: 'interestMRound'
      },
      {
        text: '',
        width: '160'
      }
    ]
  })
}
</script>
