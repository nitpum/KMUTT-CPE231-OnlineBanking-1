<template>
  <v-container fluid style="height: 100%">
    <v-layout align-center justify-center fill-height>
      <v-flex md6 sm12>
        <v-card>
          <v-card-title>
            <h2 class="primary-title">Do you want another transaction?</h2>
          </v-card-title>
          <v-divider />
          <v-card-actions>
            <v-btn to="/atm/menu" flat>
              <v-icon>arrow_back_ios</v-icon>
              Yes
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat @click="logout">
              No
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'atm',
  methods: {
    logout() {
      this.$router.push('/atm')
    }
  }
}
</script>
