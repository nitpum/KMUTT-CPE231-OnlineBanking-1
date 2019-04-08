<template>
  <v-toolbar clipped-left="true" fixed app>
    <v-toolbar-side-icon @click="drawer = !drawer" />
    <v-toolbar-title v-text="title" />
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    drawer: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: 'Yee Netbank'
    }
  }
}
</script>
