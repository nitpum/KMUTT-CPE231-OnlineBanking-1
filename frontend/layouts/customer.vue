<template>
  <v-app>
    <drawer
      :items="items"
      :drawer.sync="drawerPannel"
      :minivariant="miniVariant"
    >
      <v-list>
        <v-list-tile class="pt-2">
          <v-list-tile-content>
            <v-list-tile-title>{{ accountId }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ accountType }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-actions>
            <v-btn icon>
              <v-icon>arrow_drop_down</v-icon>
            </v-btn>
          </v-list-tile-actions>
        </v-list-tile>
      </v-list>
      <v-divider class="mt-1" />
    </drawer>
    <toolbar
      :dark="true"
      color="primary"
      :drawer.sync="drawerPannel"
      @toggle="setDrawer"
    ></toolbar>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import drawer from '@/components/Drawer.vue'
import toolbar from '@/components/Toolbar'
import theme from './themes/customer'

export default {
  components: {
    drawer,
    toolbar
  },
  props: {
    accountId: {
      type: String,
      default: '000-0-00000-0'
    }
  },
  data() {
    return {
      clipped: false,
      drawerPannel: null,
      fixed: false,
      items: [
        {
          icon: 'account_balance',
          title: 'Transactions',
          to: '/app/transactions'
        },
        {
          icon: 'send',
          title: 'Transfer'
        },
        {
          icon: 'mdi-checkbook',
          title: 'Cheque'
        },
        {
          icon: 'payment',
          title: 'My Card',
          to: '/app/cards'
        },
        {
          icon: 'receipt',
          title: 'Pay Bills',
          to: '/app/bills'
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
      title: 'Vuetify.js',
      accounts: ['000-0-00000-0'],
      accountType: 'Saving account'
    }
  },
  created() {
    this.$vuetify.theme = theme
  },
  methods: {
    setDrawer(value) {
      this.drawerPannel = value
    }
  }
}
</script>
