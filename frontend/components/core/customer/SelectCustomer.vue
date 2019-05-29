<template>
  <v-dialog v-model="dialog" width="400">
    <v-card>
      <v-card-title class="headline">
        Customer
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Search"
          prepend-inner-icon="search"
          solo
          clearable
        />
        <v-divider />
        <v-list two-line>
          <v-list-tile
            v-for="(customer, i) in customers"
            :key="i"
            @click="select(customer)"
          >
            <v-list-tile-content>
              <v-list-tile-title>
                {{ customer.name }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ customer.id }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn flat @click="dialog = false">
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
      type: Function,
      default: null
    }
  },
  data: () => ({
    customers: []
  }),
  computed: {
    dialog: {
      get() {
        return !!this.value
      },
      set() {
        this.$emit('input', null)
      }
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    select(customer) {
      this.value(customer.id)
    },
    fetch() {
      this.$axios.get('/customer/query').then(({ data }) => {
        this.customers = data.map(({ name, _id }) => ({
          name: [name.firstName, name.lastName].join(' '),
          id: _id
        }))
      })
    }
  }
}
</script>
