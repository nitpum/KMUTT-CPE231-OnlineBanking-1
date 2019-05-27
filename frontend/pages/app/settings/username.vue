<template>
  <v-container style="max-width: 500px">
    <v-card>
      <v-card-text>
        <v-text-field
          v-model="Password"
          :append-icon="show1 ? 'visibility' : 'visibility_off'"
          :rules="[rules.required]"
          :type="show1 ? 'text' : 'password'"
          name="Password"
          label="Password"
          counter
          @click:append="show1 = !show1"
        >
        </v-text-field>
        <v-text-field
          v-model="newUsername"
          :rules="[rules.required, rules.min]"
          name="newUsername"
          label="New Username"
          hint="At least 8 characters"
          counter
        >
        </v-text-field>
        <v-btn color="success" :disabled="!valid">Save</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'customer',
  data: () => {
    return {
      show1: false,
      show2: false,
      show3: false,
      Password: '',
      newUsername: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters'
      }
    }
  },
  computed: {
    valid() {
      return this.Password && this.newUsername && this.newUsername.length >= 6
    }
  }
}
</script>
