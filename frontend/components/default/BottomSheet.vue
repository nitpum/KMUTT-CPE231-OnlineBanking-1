<template>
  <v-bottom-sheet v-model="sheet">
    <template v-slot:activator>
      <v-toolbar-side-icon />
    </template>
    <v-list>
      <v-subheader>เมนู</v-subheader>
      <v-list-tile
        v-for="(item, i) in menu"
        :key="'mobile-menu-' + i"
        :to="item.to"
        @click="sheet = false"
      >
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-bottom-sheet>
</template>

<script>
import { menu } from './menu.json'

export default {
  data: () => ({
    sheet: false,
    menu
  })
}
</script>
