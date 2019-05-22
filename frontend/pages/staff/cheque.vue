<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-flex xs6>
          <v-card>
            <v-card-title primary-title>
              <h2>Pay Cheque</h2>
            </v-card-title>
            <v-card-text>
              <v-text-field
                label="Cheque ID"
                placeholder="0-000-000-000-000-000"
              ></v-text-field>
              <text-label label="Type" placeholder="Type"></text-label>
              <text-label label="Bank" placeholder="Yee Bank"></text-label>
              <text-label
                label="Account ID"
                placeholder="Account ID"
              ></text-label>
              <text-label label="Account Name" placeholder="Name"></text-label>
              <text-label label="Amount" placeholder="0.00 THB"></text-label>
              <v-text-field label="Drawee" placeholder="Drawee"></v-text-field>
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
import TextLabel from '@/components/core/TextLabel'

export default {
  layout: 'staff',
  components: {
    TextLabel
  },
  data: () => ({
    account: null,
    dialog: false
  })
}
</script>
