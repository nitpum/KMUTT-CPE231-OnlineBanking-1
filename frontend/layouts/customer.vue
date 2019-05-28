<template>
  <v-app :dark="$store.state.darkMode">
    <drawer v-model="drawerPannel" :items="items" :minivariant="miniVariant">
      <template v-slot:top>
        <accounts />
        <v-divider class="mt-1" />
      </template>
      <template v-slot:after-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-switch v-model="darkMode" color="primary"></v-switch>
          </v-list-tile-action>
          <v-list-tile-content>
            Dark Mode
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </drawer>
    <toolbar
      :dark="true"
      :color="$vuetify.theme.primary"
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
import Accounts from '@/components/customer/accounts/Switch'

export default {
  middleware: 'customer',
  components: {
    drawer,
    toolbar,
    Accounts
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
          title: 'Transfer',
          to: '/app/transfer'
        },
        {
          icon: 'mdi-checkbook',
          title: 'Cheque',
          to: '/app/cheque'
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
          icon: 'build',
          title: 'Settings',
          children: [
            {
              text: 'Change Username',
              to: '/app/settings/username'
            },
            {
              text: 'Change Password',
              to: '/app/settings/password'
            }
          ]
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  computed: {
    darkMode: {
      get() {
        return this.$store.state.darkMode
      },
      set(val) {
        this.$store.commit('SET_DARKMODE', val)
      }
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
