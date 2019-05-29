<template>
  <v-layout row justify-center align-center fill-height>
    <v-flex xs12 sm6 md4 lg3 xl2>
      <login strategy="staff" />
    </v-flex>
  </v-layout>
</template>

<script>
import Login from '@/components/Login'

export default {
  layout: 'atm',
  components: {
    Login
  }
}
</script>
