<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-flex>
          <v-card>
            <v-card-title primary-title></v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <pay-dialog></pay-dialog>
  </div>
</template>

<script>
import PayDialog from '@/components/staff/cheque/PayDialog'

export default {
  layout: 'staff',
  components: {
    PayDialog
  },
  data: () => ({
    account: null,
    dialog: false
  })
}
</script>
