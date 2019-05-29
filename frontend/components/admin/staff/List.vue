<template>
  <v-data-table :headers="headers" :items="items" class="elevation-1">
    <template v-slot:items="{ item }">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td class="text-xs-right">{{ item.balance }}</td>
      <td class="text-xs-right">{{ item.scount }}</td>
      <td class="text-xs-right">{{ item.tPS }}</td>
      <td class="text-xs-right">{{ item.mTPD }}</td>
      <td class="text-xs-right">{{ item.tPD }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'Branch ID',
        value: 'id'
      },
      {
        text: 'Name',
        value: 'name'
      },
      {
        text: 'Balance',
        value: 'balance'
      },
      {
        text: 'Staff Count',
        value: 'scount'
      },
      {
        text: 'Transactions / Staff',
        value: 'tPS'
      },
      {
        text: 'Max Transaction / Day',
        value: 'mTPD'
      },
      {
        text: 'Transaction / Day',
        value: 'tD'
      }
    ],
    items: [
      {
        id: '000',
        name: 'BangMod',
        balance: '100,000',
        scount: '20',
        tPS: '4',
        mTPD: '500',
        tPD: '300'
      }
    ]
  })
}
</script>
