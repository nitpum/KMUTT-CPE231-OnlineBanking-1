<template>
  <v-container fluid style="height: 100%">
    <v-layout align-center justify-center fill-height>
      <v-flex md6 sm12>
        <v-card>
          <v-card-title>
            <h2 class="primary-title">Confirm Withdrawal</h2>
          </v-card-title>
          <v-card-text>
            <text-label
              label="Amount"
              placeholder="Amount"
              :text="$route.params.amount"
            ></text-label>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-btn to="/atm/withdrawal" flat>
              <v-icon>arrow_back_ios</v-icon>
              Cancel
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat @click="confirm">
              <v-icon>done</v-icon>
              Confirm
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TextLabel from '@/components/core/TextLabel'

export default {
  layout: 'atm',
  components: {
    TextLabel
  },
  methods: {
    confirm() {
      this.$router.push('/atm/another')
    }
  }
}
</script>
