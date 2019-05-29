<template>
  <v-container fluid style="height: 100%">
    <v-layout align-center justify-center fill-height>
      <v-flex md6 sm12>
        <v-card>
          <v-card-title>
            <h2 class="primary-title">Transfer</h2>
          </v-card-title>
          <v-card-text>
            <template v-if="state == 0">
              <dest-acc />
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
              <text-label label="Bank" />
              <text-label label="Account No." />
              <text-label label="Amount" />
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
import DestAcc from '@/components/customer/transfer/DestAcc'
import TextLabel from '@/components/core/TextLabel'

export default {
  layout: 'atm',
  components: {
    DestAcc,
    TextLabel
  },
  data: () => ({
    state: 0,
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
        this.$router.push('/atm/menu')
      } else if (this.state === 1) {
        this.state = 0
      }
    },
    submit() {
      if (this.state === 0) {
        this.state = 1
      } else {
        // To do submit
        this.$router.push('/atm/another')
      }
    }
  }
}
</script>
