<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">
          Notification
        </h3>
      </v-card-title>
      <v-divider />
      <v-data-table :headers="headers" :items="items" class="elevation-1">
        <template v-slot:items="{ item }">
          <td>{{ item.type }}</td>
          <td>{{ item.send }}</td>
          <td>{{ item.read }}</td>
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
        text: 'Type',
        align: 'left',
        value: 'type'
      },
      {
        text: 'Send',
        align: 'left',
        value: 'send'
      },
      {
        text: 'Read',
        align: 'left',
        value: 'read'
      }
    ],
    items: [
      {
        type: 'Alert',
        send: 200,
        read: 100
      },
      {
        type: 'Transaction',
        send: 200,
        read: 100
      }
    ],
    setValue: null
  })
}
</script>
