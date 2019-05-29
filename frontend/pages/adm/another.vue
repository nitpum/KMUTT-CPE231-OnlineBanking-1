<template>
  <v-container fluid style="height: 100%">
    <v-layout align-center justify-center fill-height>
      <v-flex md6 sm12>
        <v-card>
          <v-card-title>
            <h2 class="primary-title">
              Would you like to do another transactions?
            </h2>
          </v-card-title>
          <v-divider />
          <v-card-actions>
            <v-btn to="/adm/deposit" flat>
              Yes
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat @click="logout">
              No
              <v-icon right>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'adm',
  methods: {
    logout() {
      this.$router.push('/adm/deposit')
    }
  }
}
</script>
