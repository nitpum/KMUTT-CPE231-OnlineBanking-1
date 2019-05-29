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
        />
        <v-text-field
          ref="password"
          v-model="password"
          prepend-icon="lock"
          name="password"
          label="Password"
          type="password"
          @keyup.enter="signIn()"
        />
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
  props: {
    strategy: {
      type: String,
      default: 'customer'
    }
  },
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    signIn() {
      this.$auth
        .loginWith(this.strategy, {
          data: {
            username: this.username,
            password: this.password
          }
        })
        .then(data => {
          const redirect = '/'.concat(
            this.strategy === 'customer' ? 'app' : this.strategy
          )
          this.$router.push(redirect)
        })
        .catch(({ response, message }) => {
          if (response.status === 401) {
            this.password = ''
            this.$refs.password.focus()
            this.$store.dispatch('snackbars/show', 'Incorrect password')
          } else {
            this.$store.dispatch('snackbars/error', message)
          }
        })
    }
  }
}
</script>
