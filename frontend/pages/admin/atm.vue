<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">
          ATM Summary
        </h3>
      </v-card-title>
      <v-divider />
      <v-data-table :headers="headers" :items="items" class="elevation-1">
        <template v-slot:items="{ item }">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td class="text-xs-center">{{ item.transactions.today }}</td>
          <td class="text-xs-center">{{ item.transactions.week }}</td>
          <td class="text-xs-center">{{ item.transactions.month }}</td>
          <td class="text-xs-right">
            {{
              Number(item.balance)
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }}
          </td>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
  data: () => ({
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
        text: 'Today transactions',
        align: 'center',
        value: 'transactions.today'
      },
      {
        text: 'This week transactions',
        align: 'center',
        value: 'transactions.week'
      },
      {
        text: 'This month transactions',
        align: 'center',
        value: 'transactions.month'
      },
      {
        text: 'Balance (THB)',
        align: 'right',
        value: 'balance'
      }
    ],
    items: [
      {
        id: '000',
        name: 'Bangmod 1',
        transactions: {
          today: 5,
          week: 20,
          month: 80
        },
        balance: 5000
      },
      {
        id: '000',
        name: 'Bangmod 1',
        transactions: {
          today: 5,
          week: 20,
          month: 80
        },
        balance: 10000
      }
    ]
  })
}
</script>
