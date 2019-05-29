<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">
          ADM Summary
        </h3>
        <v-spacer />
        <v-btn color="primary" class="my-0" @click="create()">
          Create ADM
        </v-btn>
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
          <td class="text-xs-right">
            <v-btn icon @click="edit(item)">
              <v-icon>edit</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>
    </v-card>

    <machine-dialog
      v-model="dialog"
      type="adm"
      :title="dialogTitle"
      :set-value.sync="setValue"
    />
  </v-container>
</template>

<script>
import MachineDialog from '@/components/admin/machine/Dialog'

export default {
  layout: 'admin',
  components: {
    MachineDialog
  },
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
      },
      {
        text: '',
        value: 'actions'
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
    ],
    setValue: null
  }),
  methods: {
    create() {
      this.dialog = true
      this.dialogTitle = 'Create ATM'
    },
    edit(item) {
      this.dialog = true
      this.dialogTitle = 'Edit ATM'
      this.setValue(item)
    }
  }
}
</script>
