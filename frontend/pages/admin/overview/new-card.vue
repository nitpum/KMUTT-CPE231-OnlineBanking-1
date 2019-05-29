<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">
          New Card
        </h3>
      </v-card-title>
      <v-divider />
      <v-data-table :headers="headers" :items="items" class="elevation-1">
        <template v-slot:items="{ item }">
          <td>{{ item.cardNo }}</td>
          <td>{{ item.type }}</td>
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
        text: 'Card No',
        align: 'left',
        value: 'cardNo'
      },
      {
        text: 'Type',
        align: 'left',
        value: 'type'
      }
    ],
    items: [
      {
        cardNo: '0000-1111-2222-3333',
        type: 'Credit'
      },
      {
        cardNo: '0000-1111-2222-3333',
        type: 'Debit'
      }
    ],
    setValue: null
  })
}
</script>
