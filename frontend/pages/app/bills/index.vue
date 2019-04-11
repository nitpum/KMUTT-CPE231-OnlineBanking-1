<template>
  <div>
    <v-toolbar flat color="transparent">
      <v-spacer />
      <pay-btn />
    </v-toolbar>
    <v-container>
      <favorite />
    </v-container>
  </div>
</template>

<script>
import PayBtn from '@/components/customer/bills/PayBtn'
import Favorite from '@/components/customer/bills/favorite'

export default {
  components: {
    PayBtn,
    Favorite
  }
}
</script>
