<template>
  <v-app>
    <drawer :items="items" :drawer="drawer" :miniVariant="miniVariant"></drawer>
    <toolbar></toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import drawer from '@/components/Drawer.vue'
import toolbar from '@/components/Toolbar'

export default {
  components: {
    drawer,
    toolbar
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'account_balance',
          title: 'Transactions',
          to: '/customer/'
        },
        {
          icon: 'send',
          title: 'Transfer'
        },
        {
          icon: 'input',
          title: 'Cheque'
        },
        {
          icon: 'payment',
          title: 'My Card'
        },
        {
          icon: 'receipt',
          title: 'Pay Bills'
        },
        {
          icon: 'account_balance_wallet',
          title: 'Account'
        },
        {
          icon: 'build',
          title: 'Settings'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  theme: {
    primary: 'red'
  }
}
</script>
