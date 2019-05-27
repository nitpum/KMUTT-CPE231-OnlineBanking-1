<template>
  <v-container style="max-width: 500px">
    <v-card>
      <v-card-text>
        <v-text-field
          v-model="oldPassword"
          :append-icon="show1 ? 'visibility' : 'visibility_off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="oldPassword"
          label="Old Password"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
        >
        </v-text-field>
        <v-text-field
          v-model="newPassword"
          :append-icon="show2 ? 'visibility' : 'visibility_off'"
          :rules="[rules.required, rules.min]"
          :type="show2 ? 'text' : 'password'"
          name="newPassword"
          label="New Password"
          hint="At least 8 characters"
          counter
          @click:append="show2 = !show2"
        >
        </v-text-field>
        <v-text-field
          v-model="confirmPass"
          :append-icon="show3 ? 'visibility' : 'visibility_off'"
          :rules="[rules.required, rules.min]"
          :type="show3 ? 'text' : 'password'"
          name="newPassword2"
          label="Confirm New Password"
          hint="At least 8 characters"
          counter
          @click:append="show3 = !show3"
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
      oldPassword: '',
      newPassword: '',
      confirmPass: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters'
      }
    }
  },
  computed: {
    valid() {
      return this.oldpass && this.newpass && this.newpass === this.confirmPass
    }
  }
}
</script>
