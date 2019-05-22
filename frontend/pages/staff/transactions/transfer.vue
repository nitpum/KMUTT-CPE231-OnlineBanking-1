<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-flex xs6>
          <v-card>
            <v-card-title primary-title>
              <h2>Transfer</h2>
            </v-card-title>
            <v-card-text>
              <h3>From</h3>
              <select-account :select.sync="from"></select-account>
              <h3>To</h3>
              <v-select
                label="Reciptient Bank"
                :items="reciptientBank"
              ></v-select>
              <v-text-field
                v-model="to.id"
                label="Account ID"
                placeholder="Account ID"
              ></v-text-field>
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
    from: null,
    to: {
      id: ''
    },
    fromDialog: false,
    reciptientBank: ['SCB']
  })
}
</script>
