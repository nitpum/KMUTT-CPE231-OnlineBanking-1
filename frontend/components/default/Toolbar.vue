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
    <bottom-sheet class="hidden-md-and-up" />
  </v-toolbar>
</template>

<script>
import BottomSheet from './BottomSheet'
import { menu } from './menu.json'

export default {
  components: {
    BottomSheet
  },
  data: () => ({
    menu: menu
  })
}
</script>
