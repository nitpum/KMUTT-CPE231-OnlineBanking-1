<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-flex xs6>
          <v-card>
            <v-card-title primary-title>
              <h2>Bills</h2>
            </v-card-title>
            <v-card-text>
              <select-account v-model="account" />
              <v-text-field
                label="Amount"
                placeholder="0.00"
                type="number"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat>Close</v-btn>
              <v-btn color="primary" flat>Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import SelectAccount from '@/components/core/account/Select'

export default {
  layout: 'staff',
  components: { SelectAccount },
  data: () => ({
    account: null,
    dialog: false
  })
}
</script>
