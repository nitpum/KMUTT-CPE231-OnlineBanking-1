<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-flex xs6>
          <v-card>
            <v-card-title primary-title>
              <h2>Withdrawal</h2>
            </v-card-title>
            <v-card-text>
              <v-text-field
                label="Account ID"
                :value="account && account.id ? account.id : ''"
                placeholder="Account ID"
                readonly
                @click="dialog = true"
              ></v-text-field>
              <v-text-field
                v-if="account"
                :value="account.name"
                label="Name"
                placeholder="Name"
                readonly
              ></v-text-field>
              <v-text-field
                v-if="account"
                label="Account Type"
                :value="account.type"
                placeholder="Account Type"
                readonly
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
    <select-dialog
      :dialog.sync="dialog"
      :account.sync="account"
    ></select-dialog>
  </div>
</template>

<script>
import SelectDialog from '@/components/core/account/SelectDialog'

export default {
  layout: 'staff',
  components: { SelectDialog },
  data: () => ({
    account: null,
    dialog: false
  })
}
</script>
