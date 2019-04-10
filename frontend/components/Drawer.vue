<template>
  <v-navigation-drawer
    v-model="model"
    :mini-variant="minivariant"
    :color="color"
    clipped
    fixed
    app
  >
    <v-list>
      <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router>
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
      default: null
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
  },
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
