<template>
  <v-toolbar color="primary" fixed app dark>
    <v-toolbar-title>
      Yee NetBank
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="(item, i) in menu" :key="'menu-' + i" :to="item.to" flat>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="$emit('drawer')" />
  </v-toolbar>
</template>

<script>
import { menu } from './menu.json'

export default {
  data: () => ({
    menu: menu
  })
}
</script>
