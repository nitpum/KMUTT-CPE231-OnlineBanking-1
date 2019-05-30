<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-flex md6 sm8 xs12>
          <v-card>
            <v-card-title primary-title>
              <h2>Transfer</h2>
            </v-card-title>
            <v-card-text>
              <template v-if="state === 0">
                <h3>From</h3>
                <select-account v-model="from" />
                <h3>To</h3>
                <org-select v-model="org" />
                <v-text-field
                  v-model="toAccId"
                  label="Account ID"
                  placeholder="Account ID"
                ></v-text-field>
                <v-text-field
                  v-model="amount"
                  label="Amount"
                  placeholder="0.00"
                  type="number"
                ></v-text-field>
              </template>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat>Close</v-btn>
              <v-btn color="primary" flat @click="submit">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import SelectAccount from '@/components/core/account/Select'
import OrgSelect from '@/components/admin/org/Select'

export default {
  layout: 'staff',
  components: { SelectAccount, OrgSelect },
  data: () => ({
    from: {},
    org: {},
    toAccId: '',
    amount: 0,
    fromDialog: false,
    reciptientBank: ['SCB'],
    state: 0
  }),
  methods: {
    submit() {
      this.$axios.post()
    }
  }
}
</script>
