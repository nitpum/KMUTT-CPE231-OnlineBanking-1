<template>
  <div>
    <v-btn color="primary" @click="payDialog = true">
      Pay
    </v-btn>

    <pay-dialog v-model="payDialog" />
  </div>
</template>

<script>
import payDialog from './payDialog'

export default {
  components: {
    payDialog
  },
  data: () => ({
    payDialog: false
  })
}
</script>
