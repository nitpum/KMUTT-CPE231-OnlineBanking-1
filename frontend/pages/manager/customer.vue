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
          <td>{{ item.accountId }}</td>
          <td>{{ item.name }}</td>
          <td class="text-xs-center">{{ item.amount }}</td>
          <td class="text-xs-right">
            {{
              Number(item.min)
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }}
          </td>
          <td class="text-xs-right">
            {{
              Number(item.max)
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }}
          </td>
          <td class="text-xs-right">
            {{
              Number(item.avg)
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
        value: 'accountId'
      },
      {
        text: 'Account Name',
        align: 'left',
        value: 'name'
      },
      {
        text: 'Amount Of Transaction(THB)',
        align: 'center',
        value: 'amount'
      },
      {
        text: 'Minimum Of Transaction(THB)',
        align: 'right',
        value: 'min'
      },
      {
        text: 'Maximum Of Transaction(THB)',
        align: 'right',
        value: 'max'
      },
      {
        text: 'Average Of Transaction(THB)',
        align: 'right',
        value: 'avg'
      }
    ],
    items: []
  }),
  mounted() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.$axios.get('/account/query/overview').then(({ data }) => {
        this.items = data
      })
    }
  }
}
</script>
