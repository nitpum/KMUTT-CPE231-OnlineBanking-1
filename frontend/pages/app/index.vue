<template>
  <div>
    <month-tab />
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 sm6 md5 lg4 xl3>
          <Balance />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Balance from '@/components/customer/transactions/Balance'
import MonthTab from '@/components/customer/transactions/MonthTab'

export default {
  layout: 'customer',
  components: {
    Balance,
    MonthTab
  }
}
</script>
