<template>
  <v-container fluid style="height: 100%">
    <v-layout align-center justify-center fill-height>
      <v-flex md6 sm12>
        <v-card ref="form">
          <v-card-title>
            <h2 class="primary-title">Withdrawal</h2>
          </v-card-title>
          <v-card-text>
            <v-text-field
              ref="amount"
              v-model="amount"
              type="number"
              label="Amount"
              placeholder="0"
              :rules="[
                () => !!amount || 'Amount is required',
                val => val > 0 || 'Amount must gether than zero'
              ]"
            ></v-text-field>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-btn to="/atm/withdrawal" flat>
              <v-icon>arrow_back_ios</v-icon>
              Back
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat @click="submit">
              NEXT
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'atm',
  data: () => ({
    amount: 0,
    formHasErrors: false
  }),
  computed: {
    form() {
      return {
        amount: this.amount
      }
    }
  },
  methods: {
    async submit() {
      this.formHasErrors = false
      await Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true

        this.$refs[f].validate(true)
      })

      if (!this.formHasErrors && this.amount > 0)
        this.$router.push(`/atm/withdrawal/confirm/${this.amount}`)
    }
  }
}
</script>
