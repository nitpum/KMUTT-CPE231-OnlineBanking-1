<template>
  <v-layout justify-center>
    <v-flex xs12 sm6 md5 lg4 xl3>
      <Balance />
    </v-flex>
  </v-layout>
</template>

<script>
import Balance from '@/components/customer/transactions/Balance'

export default {
  layout: 'customer',
  components: {
    Balance
  }
}
</script>
