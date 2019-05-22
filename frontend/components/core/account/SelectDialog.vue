<template>
  <v-dialog v-model="model" lazy max-width="500">
    <v-card>
      <v-card-title class="headline">
        Account
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field label="Search" prepend-inner-icon="search" solo />
          <v-divider />
          <v-list three-line>
            <v-list-tile
              v-for="(account, i) in accounts"
              :key="i"
              @click="select(account)"
            >
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ account.name }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ account.id }}
                </v-list-tile-sub-title>
                <v-list-tile-sub-title>
                  {{ account.type.toUpperCase() }}
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
    accounts: [
      { name: 'Bill Gate', id: '000-0-000000-0', type: 'Saving deposit' }
    ]
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
    select: function(account) {
      this.$emit('select', account)
      this.model = false
    }
  }
}
</script>
