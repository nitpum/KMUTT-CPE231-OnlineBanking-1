<template>
  <div>
    <month-tab />
    <nuxt-child />
  </div>
</template>

<script>
import MonthTab from '@/components/customer/transactions/MonthTab'

export default {
  layout: 'customer',
  components: {
    MonthTab
  }
}
</script>
