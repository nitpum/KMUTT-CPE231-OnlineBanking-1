<template>
  <v-card height="100%">
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="username"
          prepend-icon="person"
          name="username"
          label="Username"
          type="text"
        ></v-text-field>
        <v-text-field
          ref="password"
          v-model="password"
          prepend-icon="lock"
          name="password"
          label="Password"
          type="password"
          @keyup.enter="signIn()"
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
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    signIn() {
      this.$axios
        .post(
          '/customer/login',
          {
            username: this.username,
            password: this.password
          },
          {
            maxRedirects: 0
          }
        )
        .then(data => {
          this.$router.push('/app')
        })
        .catch(({ response }) => {
          if (response.status === 401) {
            this.password = ''
            this.$refs.password.focus()
          }
        })
    }
  }
}
</script>
