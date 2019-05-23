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
    avatar: 'https://pbs.twimg.com/media/DsGJSBuVsAANIUN.jpg',
    name: 'Name',
    username: 'username'
  })
}
</script>
