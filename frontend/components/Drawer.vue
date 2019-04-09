<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="minivariant"
    :color="color"
    clipped
    fixed
    app
  >
    <v-list>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title" />
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  props: {
    drawer: {
      type: Boolean,
      default: true
    },
    minivariant: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'white'
    },
    items: {
      type: Array,
      default() {}
    }
  }
}
</script>
