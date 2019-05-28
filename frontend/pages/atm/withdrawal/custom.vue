<template>
  <v-container fluid style="height: 100%">
    <v-layout align-center justify-center fill-height>
      <v-flex md6 sm12>
        <v-card>
          <v-card-title>
            <h2 class="primary-title">Withdrawal</h2>
          </v-card-title>
          <v-card-text>
            <v-text-field
              type="number"
              label="Amount"
              placeholder="0"
            ></v-text-field>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-btn to="/atm/withdrawal" flat>
              <v-icon>arrow_back_ios</v-icon>
              Back
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="green" flat>
              <v-icon>done</v-icon>
              NEXT
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
