<template>
  <v-data-table :headers="headers" :items="items" class="elevation-1">
    <template v-slot:items="{ item }">
      <td>{{ item._id }}</td>
      <td>{{ item.name.firstName }} {{ item.name.lastName }}</td>
      <td>{{ position(item.position) }}</td>
      <td>
        <template v-if="item.branch">
          {{ item.branch.name }}
        </template>
        <template v-else>
          -
        </template>
      </td>
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
      },
      {
        text: '',
        width: '50'
      }
    ]
  }),
  methods: {
    position(pos) {
      if (pos === 'general') return 'Staff'
      else if (pos === 'manager') return 'Manager'
      return pos
    }
  }
}
</script>
