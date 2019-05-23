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
          <td>{{ item.No }}</td>
          <td>{{ item.name }}</td>
          <td class="text-xs-center">{{ item.transactions.month }}</td>
          <td class="text-xs-right">
            {{
              Number(item.amount)
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }}
          </td>
          <td class="text-xs-right">
            {{
              Number(item.avgDep)
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }}
          </td>
          <td class="text-xs-right">
            {{
              Number(item.maxDep)
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }}
          </td>
          <td class="text-xs-right">
            {{
              Number(item.minDep)
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
        value: 'No'
      },
      {
        text: 'Account Name',
        align: 'left',
        value: 'name'
      },
      {
        text: 'Month',
        align: 'center',
        value: 'transactions.month'
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
        No: '000',
        name: 'Bangmod 1',
        transactions: {
          today: 5,
          week: 1,
          month: 8
        },
        amount: '5000',
        avgDep: '3000',
        maxDep: '7000',
        minDep: '500'
      },
      {
        No: '001',
        name: 'Bangmod 1',
        transactions: {
          today: 5,
          week: 1,
          month: 8
        },
        amount: '5000',
        avgDep: '3000',
        maxDep: '7000',
        minDep: '500'
      }
    ]
  })
}
</script>
