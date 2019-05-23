<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">
          Deposit Summary
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
  layout: 'manager',
  data: () => ({
    headers: [
      {
        text: 'No.',
        align: 'left',
        value: 'No.'
      },
      {
        text: 'Account Name',
        align: 'left',
        value: 'name'
      },
      {
        text: 'Month',
        align: 'center',
        value: 'month'
      },
      {
        text: 'Amount',
        align: 'right',
        value: 'amount'
      },
      {
        text: 'Average Deposit',
        align: 'right',
        value: 'avgDep'
      },
      {
        text: 'Max Depossit',
        align: 'right',
        value: 'maxDep'
      },
      {
        text: 'Min Deposit',
        align: 'right',
        value: 'minDep'
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
