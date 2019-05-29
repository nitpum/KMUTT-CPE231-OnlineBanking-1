<template>
  <v-container style="max-width: 500px">
    <v-card>
      <v-card-text>
        <text-label
          label="Current username: "
          :text="$store.state.user.username"
        />
        <v-text-field
          v-model="Password"
          :append-icon="show1 ? 'visibility' : 'visibility_off'"
          :rules="[rules.required]"
          :type="show1 ? 'text' : 'password'"
          name="Password"
          label="Password"
          counter
          @click:append="show1 = !show1"
        />
        <v-text-field
          v-model="newUsername"
          :rules="[rules.required, rules.min]"
          name="newUsername"
          label="New Username"
          hint="At least 8 characters"
          counter
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="success" :disabled="!valid">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import TextLabel from '@/components/core/TextLabel'

export default {
  layout: 'customer',
  components: {
    TextLabel
  },
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
