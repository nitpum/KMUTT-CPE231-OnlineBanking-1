<template>
  <v-dialog v-model="model" scrollable lazy max-width="500">
    <v-card>
      <v-card-title primary-title>
        <h2>Select Organization</h2>
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
          <v-list-tile v-for="(org, i) in orgs" :key="i" @click="select(org)">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ org.name }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ org.type }}
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
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    search: '',
    orgs: []
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
  mounted() {
    this.fetch()
  },
  methods: {
    select(org) {
      this.$emit('onSelect', org)
    },
    fetch() {
      this.$axios.get('/organization/query').then(res => {
        this.orgs = res.data
      })
    }
  }
}
</script>
