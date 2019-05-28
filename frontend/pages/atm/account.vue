<template>
  <v-container fluid style="height: 100%">
    <v-layout align-center justify-center fill-height>
      <v-flex md6 sm12>
        <v-card>
          <v-card-title>
            <h2 class="primary-title">Account</h2>
          </v-card-title>
          <v-card-text>
            <text-label
              label="Account ID"
              placeholder="Account ID"
            ></text-label>
            <text-label
              label="Account Type"
              placeholder="Account Type"
            ></text-label>
            <text-label label="Balance" placeholder="0"></text-label>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn to="/atm/menu" flat>
              <v-icon>arrow_back_ios</v-icon>
              Back
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
  }
}
</script>
