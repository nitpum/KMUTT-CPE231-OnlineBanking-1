<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">
          Active User
        </h3>
      </v-card-title>
      <v-divider />
      <v-data-table :headers="headers" :items="items" class="elevation-1">
        <template v-slot:items="{ item }">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.acessTime }}</td>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
  data: () => ({
    dialog: false,
    dialogTitle: '',
    headers: [
      {
        text: 'ID',
        align: 'left',
        value: 'id'
      },
      {
        text: 'Name',
        align: 'left',
        value: 'name'
      },
      {
        text: 'Acess Time',
        align: 'center',
        value: 'acessTime'
      }
    ],
    items: [
      {
        id: '000',
        name: 'Euei Naja',
        acessTime: ''
      },
      {
        id: '001',
        name: 'Eiei Naja',
        acessTime: ''
      }
    ],
    setValue: null
  })
}
</script>
