<template>
  <v-container style="max-width: 500px">
    <v-card>
      <v-card-text>
        <v-text-field
          v-model="oldPassword"
          :append-icon="show1 ? 'visibility' : 'visibility_off'"
          :type="show1 ? 'text' : 'password'"
          name="oldPassword"
          label="Old Password"
          @click:append="show1 = !show1"
        />
        <v-text-field
          v-model="newPassword"
          :append-icon="show2 ? 'visibility' : 'visibility_off'"
          :type="show2 ? 'text' : 'password'"
          name="newPassword"
          label="New Password"
          counter
          @click:append="show2 = !show2"
        />
        <v-text-field
          v-model="confirmPass"
          :append-icon="show3 ? 'visibility' : 'visibility_off'"
          :type="show3 ? 'text' : 'password'"
          name="newPassword2"
          label="Confirm New Password"
          counter
          @click:append="show3 = !show3"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="success" :disabled="!valid" @click="commit()">Save</v-btn>
      </v-card-actions>
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
      return (
        this.oldPassword &&
        this.newPassword &&
        this.newPassword === this.confirmPass
      )
    },
    match() {
      return this.newPassword && this.newPassword === this.confirmPass
        ? true
        : "Password doesn't match"
    }
  },
  methods: {
    commit() {
      this.$axios
        .patch('/customer/me', {
          password: this.oldPassword,
          newPassword: this.newPassword
        })
        .then(() => {
          this.$store.dispatch('snackbars/success', 'Success')
          this.oldPassword = ''
          this.newPassword = ''
          this.confirmPassword = ''
        })
        .catch(e => {
          this.$store.dispatch('snackbars/error', e.message)
        })
    }
  }
}
</script>
