<template>
  <v-container fluid style="height: 100%">
    <v-layout align-center justify-center fill-height>
      <v-flex md6 sm12>
        <v-card>
          <v-card-title>
            <h2 class="primary-title">Withdrawal</h2>
          </v-card-title>
          <v-card-text>
            <v-layout row wrap>
              <v-flex sm6 pr-2>
                <v-btn to="/atm/withdrawal/confirm/100" block depressed
                  >100</v-btn
                >
              </v-flex>
              <v-flex sm6 pr-2>
                <v-btn to="/atm/withdrawal/confirm/300" block depressed
                  >300</v-btn
                >
              </v-flex>
              <v-flex sm6 pr-2>
                <v-btn to="/atm/withdrawal/confirm/500" block depressed
                  >500</v-btn
                >
              </v-flex>
              <v-flex sm6 pr-2>
                <v-btn to="/atm/withdrawal/confirm/1000" block depressed
                  >1000</v-btn
                >
              </v-flex>
              <v-flex sm6 pr-2>
                <v-btn to="/atm/withdrawal/custom" block depressed
                  >Custom</v-btn
                >
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-btn to="/atm/menu" flat>
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
