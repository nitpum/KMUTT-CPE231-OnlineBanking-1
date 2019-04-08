<template>
  <v-toolbar clipped-left fixed app>
    <v-toolbar-side-icon @click="$emit('toggle', !drawer)" />
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
