<template>
  <v-dialog v-model="model" lazy max-width="500">
    <v-card>
      <v-card-title class="headline">
        Account
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
            v-for="(account, i) in items"
            :key="i"
            @click="select(account)"
          >
            <v-list-tile-content>
              <v-list-tile-title>
                {{
                  `${account.customerId.name.firstName} ${
                    account.customerId.name.lastName
                  }`
                }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                Account No.: {{ account.accountId }}
              </v-list-tile-sub-title>
              <v-list-tile-sub-title>
                Account Type: {{ account.accountType.name }}
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
    }
  },
  data: () => ({
    items: [],
    search: ''
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
    select: function(account) {
      this.$emit('select', account)
      this.model = false
    },
    fetch(search) {
      let url = '/account/query'
      if (search) url = `${url}?search=${search}`
      this.$axios.get(url).then(res => {
        this.items = res.data
      })
    }
  }
}
</script>
