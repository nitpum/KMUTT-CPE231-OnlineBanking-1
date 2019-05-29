<template>
  <v-dialog v-model="model" lazy max-width="500">
    <v-card>
      <v-card-title class="headline">
        Account
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field
            v-model="search"
            label="Search"
            prepend-inner-icon="search"
            solo
          />
          <v-divider />
          <v-list tow-line>
            <v-list-tile
              v-for="(item, i) in items"
              :key="i"
              @click="select(item)"
            >
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.name }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ item.detail }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn flat @click="model = false">
          close
        </v-btn>
      </v-card-actions>
    </v-card>
    <Dialog v-model="dialog" @onSubmit="fetch" />
  </v-dialog>
</template>

<script>
import Dialog from './Dialog'

export default {
  components: {
    Dialog
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    search: '',
    dialog: false
  }),
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    select: function(item) {
      this.$emit('onSelect', item)
      this.model = false
    },
    fetch: function() {}
  }
}
</script>
