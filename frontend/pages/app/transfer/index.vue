<template>
  <v-container style="max-width: 500px">
    <v-card>
      <v-card-text>
        <dest-acc />
        <v-text-field label="Amount" type="number" />
      </v-card-text>
      <v-btn color="primary" :disabled="disabled" flat @click="submit()">
        submit
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
import DestAcc from '@/components/customer/transfer/DestAcc'

export default {
  layout: 'customer',
  components: {
    DestAcc
  }
}
</script>
