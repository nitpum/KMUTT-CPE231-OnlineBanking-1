<template>
  <v-container fluid style="height: 100%">
    <v-layout align-center justify-center fill-height>
      <v-flex md6 sm12>
        <v-card>
          <v-card-title>
            <h2 class="primary-title">Deposit</h2>
          </v-card-title>
          <v-card-text>
            <template v-if="state == 0">
              <v-text-field
                v-model="accountId"
                label="Account No."
                placeholder="Account No."
                :rules="[() => !!accountId || 'Account No. is required']"
              ></v-text-field>
              <v-text-field
                v-model="amount"
                label="Amount"
                :rules="[
                  () => !!amount || 'Amount is required',
                  val => val > 0 || 'Amount must gether than zero'
                ]"
                type="number"
              />
            </template>
            <template v-if="state == 1">
              <text-label label="Account No." :text="accountId" />
              <text-label label="Amount" :text="amount" />
            </template>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-btn flat @click="cancel">
              <v-icon>arrow_back_ios</v-icon>
              {{ cancelBtn }}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat @click="submit">
              {{ nextBtn }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TextLabel from '@/components/core/TextLabel'

export default {
  layout: 'adm',
  components: {
    TextLabel
  },
  data: () => ({
    state: 0,
    accountId: '',
    amount: 0,
    cancelBtn: 'Cancel',
    nextBtn: 'Next'
  }),
  watch: {
    state(val) {
      if (val === 0) {
        this.cancelBtn = 'Cancel'
        this.nextBtn = 'Next'
      } else {
        this.cancelBtn = 'Back'
        this.nextBtn = 'Confirm'
      }
    }
  },
  methods: {
    cancel() {
      if (this.state === 0) {
        // logout
        this.$router.push('/adm')
      } else if (this.state === 1) {
        this.state = 0
      }
    },
    submit() {
      if (this.state === 0) {
        this.state = 1
      } else {
        // To do submit
        this.$router.push('/adm/another')
      }
    }
  }
}
</script>
