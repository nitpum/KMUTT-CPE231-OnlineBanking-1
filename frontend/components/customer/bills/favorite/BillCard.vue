<template>
  <v-card>
    <v-layout>
      <v-flex shrink py-0 pr-0>
        <v-img
          src="https://via.placeholder.com/88x136.png"
          width="88"
          height="136"
        />
      </v-flex>
      <v-flex glow pl-0 py-0>
        <v-layout column fill-height my-0 py-0>
          <v-flex glow pl-4>
            <div class="headline">Card title</div>
            <span class="grey--text">subtitle</span>
          </v-flex>
          <v-flex shrink py-0 my-0>
            <v-divider />
            <v-btn flat color="primary" @click="payDialog = true">
              Pay
            </v-btn>
            <v-btn flat color="primary">History</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <pay-dialog v-model="payDialog" :bill="ref1" />
  </v-card>
</template>

<script>
import PayDialog from './../PayDialog'

export default {
  components: {
    PayDialog
  },
  data: () => ({
    payDialog: false,
    ref1: '123456'
  })
}
</script>
