<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">
          Today Transaction
        </h3>
      </v-card-title>
      <v-divider />
      <v-data-table :headers="headers" :items="items" class="elevation-1">
        <template v-slot:items="{ item }">
          <td>{{ item.accId }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.totalTrans }}</td>
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
        text: 'Account Id',
        align: 'left',
        value: 'accId'
      },
      {
        text: 'Name',
        align: 'left',
        value: 'name'
      },
      {
        text: 'Total Transaction(THB)',
        align: 'left',
        value: 'totalTrans'
      }
    ],
    items: [
      {
        accId: '000',
        name: 'Euei Naja',
        totalTrans: 1515151515151
      },
      {
        accId: '001',
        name: 'Eiei Naja',
        totalTrans: 1515151515151
      }
    ],
    setValue: null
  })
}
</script>
