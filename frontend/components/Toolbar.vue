<template>
  <v-toolbar :dark="dark" :color="color" clipped-left fixed app>
    <v-toolbar-side-icon @click="$emit('toggle', !drawer)" />
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <!-- @todo #1 Make prop avatar -->
    <v-avatar color="white"></v-avatar>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    drawer: {
      type: Boolean,
      default: null
    },
    dark: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Yee Netbank'
    },
    color: {
      type: String,
      default: 'white'
    }
  }
}
</script>
