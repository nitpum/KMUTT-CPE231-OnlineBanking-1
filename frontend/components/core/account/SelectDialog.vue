<template>
  <v-dialog v-model="model" max-width="500">
    <v-card>
      <v-card-title class="headline">
        Account
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field label="Search" prepend-inner-icon="search" solo />
          <v-divider />
          <v-list two-line>
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
                  <template v-if="account.type">
                    ({{ account.type.toUpperCase() }})
                  </template>
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
    dialog: {
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
        return this.dialog
      },
      set(val) {
        this.$emit('update:dialog', val)
      }
    }
  },
  methods: {
    select: function(account) {
      this.$emit('update:account', account)
      this.model = false
    }
  }
}
</script>
