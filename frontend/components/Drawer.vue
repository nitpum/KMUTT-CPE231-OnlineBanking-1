<template>
  <v-navigation-drawer
    v-model="model"
    :mini-variant="minivariant"
    :color="color"
    clipped
    fixed
    app
  >
    <slot name="top" />
    <v-list>
      <slot name="before-list" />
      <template v-for="(item, i) in items">
        <template v-if="item.children">
          <v-list-group :key="i" v-model="item.model" :prepend-icon="item.icon">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.title }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, j) in item.children"
              :key="j"
              :to="child.to"
            >
              <v-list-tile-action>
                <v-icon v-if="child.icon">{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </template>
        <template v-else>
          <v-list-tile :key="i" :to="item.to">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title" />
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </template>
      <slot name="after-list" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  props: {
    value: {
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
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
