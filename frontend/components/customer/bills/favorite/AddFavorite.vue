<template>
  <div>
    <v-btn color="primary" @click="listsDialog = true">
      Add
    </v-btn>

    <lists-dialog v-model="listsDialog" @select="select" />
  </div>
</template>

<script>
import ListsDialog from './../ListsDialog'

export default {
  components: {
    ListsDialog
  },
  data: () => ({
    listsDialog: false
  }),
  methods: {
    select(ref1) {
      /* add bill to favorite here */
    }
  }
}
</script>
