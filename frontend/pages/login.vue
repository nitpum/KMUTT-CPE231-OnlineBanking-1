<template>
  <v-flex xs12 sm8 md4>
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Login form</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
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
        <v-btn color="primary">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  layout: 'centered'
}
</script>
