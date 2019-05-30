<template>
  <v-layout row justify-center align-center fill-height>
    <v-flex xs12 sm6 md4 lg3 xl2>
      <h3 class="headline text-xs-center">
        Staff
      </h3>
      <login strategy="staff" />
    </v-flex>
  </v-layout>
</template>

<script>
import theme from '@/layouts/themes/staff'
import Login from '@/components/Login'

export default {
  layout: 'centered',
  components: {
    Login
  },
  created() {
    this.$vuetify.theme = theme
  }
}
</script>
