<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">
          Customer Overview
        </h3>
      </v-card-title>
      <v-divider />
      <v-data-table :headers="headers" :items="items" class="elevation-1">
        <template v-slot:items="{ item }">
          <td>{{ item.AccountId }}</td>
          <td>{{ item.name }}</td>
          <td class="text-xs-center">{{ item.transactions.amount }}</td>
          <td class="text-xs-right">
            {{
              Number(item.transactions.min)
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }}
          </td>
          <td class="text-xs-right">
            {{
              Number(item.transactions.max)
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }}
          </td>
          <td class="text-xs-right">
            {{
              Number(item.transactions.avg)
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
        text: 'AccountId',
        align: 'left',
        value: 'AccountId'
      },
      {
        text: 'Account Name',
        align: 'left',
        value: 'name'
      },
      {
        text: 'Amount Of Transaction(THB)',
        align: 'center',
        value: 'transactions.amount'
      },
      {
        text: 'Minimum Of Transaction(THB)',
        align: 'right',
        value: 'transactions.min'
      },
      {
        text: 'Maximum Of Transaction(THB)',
        align: 'right',
        value: 'transactions.max'
      },
      {
        text: 'Average Of Transaction(THB)',
        align: 'right',
        value: 'transactions.avg'
      }
    ],
    items: [
      {
        AccountId: '000',
        name: 'Bangmod 1',
        transactions: {
          amount: 500000,
          min: 1000,
          max: 80000,
          avg: 4000
        }
      },
      {
        AccountId: '001',
        name: 'Bangmod 2',
        transactions: {
          amount: 500000,
          min: 1000,
          max: 80000,
          avg: 4000
        }
      }
    ]
  })
}
</script>
