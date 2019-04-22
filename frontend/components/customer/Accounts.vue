<template>
  <v-list>
    <v-list-tile class="pt-2" @click="dialog = true">
      <v-list-tile-content>
        <v-list-tile-title>{{ currentAcc.id }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ currentAcc.type }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-actions>
        <v-icon>arrow_drop_down</v-icon>
      </v-list-tile-actions>
      <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>
              Accounts
            </v-toolbar-title>
            <v-spacer />
            <v-btn color="primary">add</v-btn>
          </v-toolbar>
          <v-card-text>
            <v-expansion-panel :value="0">
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div>All accounts</div>
                </template>
                <v-card>
                  <v-list two-line>
                    <v-list-tile
                      v-for="(account, i) in accounts"
                      :key="`account-${i}`"
                      @click="switchTo(i)"
                    >
                      <v-list-tile-content>
                        <v-list-tile-title>{{ account.id }}</v-list-tile-title>
                        <v-list-tile-sub-title>{{
                          account.type
                        }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-list-tile>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    dialog: false
  }),
  computed: {
    ...mapGetters({
      accounts: 'customer/accounts',
      currentAcc: 'customer/currentAcc'
    })
  },
  methods: {
    switchTo(index) {
      this.$store.dispatch('customer/switchTo', index)
      this.dialog = false
    }
  }
}
</script>
