<template>
  <v-card height="100%">
    <v-card-text>
      <v-form>
        <v-text-field
          id="username"
          prepend-icon="person"
          name="username"
          label="Username"
          type="text"
        ></v-text-field>
        <v-text-field
          id="password"
          prepend-icon="lock"
          name="password"
          label="Password"
          type="password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" @click="signIn()">Sign In</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
    signIn() {
      this.$router.push('/app')
    }
  }
}
</script>
