<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">
          Daily New User
        </h3>
      </v-card-title>
      <v-divider />
      <v-data-table :headers="headers" :items="items" class="elevation-1">
        <template v-slot:items="{ item }">
          <td
            v-for="header in headers"
            :key="[header.value, item.id].join('-')"
          >
            {{ item[header.value] }}
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
        text: 'Age',
        align: 'left',
        value: 'age'
      },
      {
        text: 'Date Created',
        align: 'left',
        value: 'dateCreate'
      }
    ],
    items: [
      {
        id: '000',
        name: 'Euei Naja'
      },
      {
        id: '001',
        name: 'Eiei Naja'
      }
    ],
    setValue: null
  }),
  mounted() {
    this.$axios.get('/admin/query/new-user').then(({ data }) => {
      this.items = data
    })
  }
}
</script>
