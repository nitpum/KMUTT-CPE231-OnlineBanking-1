<template>
  <v-card>
    <toolbar />
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 lg4 xl3>
          <bill-card />
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import Toolbar from './Toolbar'
import BillCard from './BillCard'

export default {
  components: {
    Toolbar,
    BillCard
  }
}
</script>
