<template>
  <div>
    <month-tab />
    <v-container>
      <v-layout justify-center mb-5>
        <v-flex xs12 sm7 md5 lg5 xl4>
          <Balance />
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm7 md5 lg5 xl4>
          <Date />
          <Date />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Balance from '@/components/customer/transactions/Balance'
import MonthTab from '@/components/customer/transactions/MonthTab'
import Date from '@/components/customer/transactions/Date'

export default {
  layout: 'customer',
  components: {
    Balance,
    MonthTab,
    Date
  }
}
</script>
