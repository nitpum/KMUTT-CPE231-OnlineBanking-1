<template>
  <div>
    <v-btn color="primary" @click="payDialog = true">
      Pay
    </v-btn>

    <pay-dialog v-model="payDialog" />
  </div>
</template>

<script>
import PayDialog from './PayDialog'

export default {
  components: {
    PayDialog
  },
  data: () => ({
    payDialog: false
  })
}
</script>
