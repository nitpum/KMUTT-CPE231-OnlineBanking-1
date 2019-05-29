<template>
  <v-dialog v-model="model" lazy max-width="500" persistent>
    <v-card>
      <v-card-title class="headline">
        {{ title }}
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="search"
          solo
        />
        <v-divider />
        <v-list three-line>
          <v-list-tile
            v-for="(item, i) in items"
            :key="i"
            @click="select(item)"
          >
            <v-list-tile-content>
              <v-list-tile-title>
                <template v-if="item.name">
                  {{ item.name }}
                </template>
              </v-list-tile-title>
              <v-list-tile-sub-title>
                <template v-if="item.address">
                  {{ item.address }}
                </template>
              </v-list-tile-sub-title>
              <v-list-tile-sub-title>
                {{ item.zipcode }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn flat @click="model = false">
          close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Select Branch'
    }
  },
  data: () => ({
    search: '',
    items: [],
    loading: false
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
  watch: {
    search: {
      immediate: true,
      handler(newval) {
        this.fetch(newval)
      }
    }
  },
  methods: {
    select: function(item) {
      this.$emit('onSelect', item)
      this.model = false
    },
    fetch: function(search) {
      let url = '/branch/query'
      if (search) url = `${url}/?search=${search}`
      this.$axios.get(url).then(res => {
        this.items = res.data
      })
    }
  }
}
</script>
