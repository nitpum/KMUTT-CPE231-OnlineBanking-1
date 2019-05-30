<template>
  <v-dialog v-model="model" scrollable lazy max-width="500">
    <v-card>
      <v-card-title primary-title>
        <h2>Select Service Type</h2>
        <v-spacer />
        <v-btn color="success" @click="dialog = true">
          <v-icon>add</v-icon>
          Create
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="search"
          clearable
          solo
          single-line
        />
        <v-list three-line>
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
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="model = false">Close</v-btn>
        <v-btn color="primary" flat @click="$emit('onSubmit')">Submit</v-btn>
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
    items: [],
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
  watch: {
    search() {
      this.fetch(this.search)
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    select(org) {
      this.$emit('onSelect', org)
    },
    fetch(search) {
      let url = '/service-reference/type/query'
      if (search) url = `${url}?search=${search}`
      this.$axios.get(url).then(res => {
        this.items = res.data
      })
    }
  }
}
</script>
