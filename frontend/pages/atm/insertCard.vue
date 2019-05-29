<template>
  <v-card height="100%">
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="cardNo"
          prepend-icon="mdi-credit-card"
          name="cardNo"
          label="CardNo"
          type="text"
        />
        <v-text-field
          v-model="pin"
          prepend-icon="lock"
          name="pin"
          label="PIN"
          type="password"
          @keyup.enter="signIn()"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary">Insert</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    cardNo: '',
    pin: ''
  })
}
</script>
