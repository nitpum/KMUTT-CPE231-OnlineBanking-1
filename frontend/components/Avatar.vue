<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    offset-y
    :nudge-width="250"
  >
    <template v-slot:activator="{ on }">
      <v-avatar style="cursor: pointer" v-on="on">
        <v-img :src="avatar" />
      </v-avatar>
    </template>

    <v-card>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-img :src="avatar" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ username }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-switch v-model="darkMode" color="primary" />
          </v-list-tile-action>
          <v-list-tile-title
            style="cursor: pointer"
            @click="darkMode = !darkMode"
          >
            Dark Mode
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="logout()">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Sign out</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    menu: false,
    avatar: 'https://pbs.twimg.com/media/DsGJSBuVsAANIUN.jpg'
  }),
  computed: {
    darkMode: {
      get() {
        return this.$store.state.darkMode
      },
      set(val) {
        this.$store.commit('SET_DARKMODE', val)
      }
    },
    name() {
      const { firstName, lastName } = this.$store.state.user.name
      return [firstName, lastName].join(' ')
    },
    username() {
      return this.$store.state.user.username
    }
  },
  methods: {
    logout() {
      const strategy = this.$store.state.auth.strategy
      this.$auth.logout().then(() => {
        if (strategy === 'customer') this.$router.push('/')
        else this.$router.push(`/${strategy}/login`)
      })
    }
  }
}
</script>
