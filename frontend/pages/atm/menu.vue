<template>
  <v-container fluid style="height: 100%">
    <v-layout align-center justify-center fill-height>
      <v-flex md6 sm12>
        <v-card>
          <v-card-title>
            <h2 class="primary-title">Menu</h2>
          </v-card-title>
          <v-card-text>
            <v-layout row wrap>
              <v-flex sm6 pr-2>
                <v-btn to="/atm/withdrawal" depressed block>
                  <v-icon left>remove</v-icon>
                  Withdrawal
                </v-btn>
              </v-flex>
              <v-flex sm6 pr-2>
                <v-btn to="/atm/transfer" depressed block>
                  <v-icon left>swap_horiz</v-icon>
                  Transfer
                </v-btn>
              </v-flex>
              <v-flex sm6 pr-2>
                <v-btn to="/atm/bills" depressed block>
                  <v-icon left>receipt</v-icon>
                  Pay Bills
                </v-btn>
              </v-flex>
              <v-flex sm6 pr-2>
                <v-btn to="/atm/account" depressed block>
                  <v-icon left>account_balance_wallet</v-icon>
                  Account
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-btn to="/atm" flat>
              <v-icon>arrow_back_ios</v-icon>
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'atm'
}
</script>
