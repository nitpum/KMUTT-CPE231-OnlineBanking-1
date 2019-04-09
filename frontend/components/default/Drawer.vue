<template>
  <v-navigation-drawer v-model="model" overflow right app>
    <v-list>
      <v-list-tile v-for="(item, i) in menu" :key="'menu-' + i" :to="item.to">
        <v-list-tile-content>
          <v-list-tile-title>
            {{ item.name }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { menu } from './menu.json'

export default {
  props: {
    drawer: Boolean
  },
  data: () => ({
    menu
  }),
  computed: {
    model: {
      get() {
        return this.drawer
      },
      set(val) {
        this.$emit('update:drawer', val)
      }
    }
  }
}
</script>
