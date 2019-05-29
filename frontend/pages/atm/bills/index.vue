<template>
  <v-container fluid style="height: 100%">
    <v-layout align-center justify-center fill-height>
      <v-flex md6 sm12>
        <v-card>
          <v-card-title>
            <h2 class="primary-title">Pay Bills</h2>
          </v-card-title>
          <v-card-text>
            <template v-if="state == 0">
              <lists-dialog v-model="listsDialog" @select="select" />
              <v-text-field
                v-model="ref1"
                label="Organization Code"
                hint="Ref 1"
                persistent-hint
                :append-outer-icon="!bill ? 'search' : ''"
                :readonly="!!bill"
                @click:append-outer="listsDialog = true"
              />
              <v-text-field
                v-model="ref2"
                label="Bill Code"
                hint="Ref 2"
                persistent-hint
              />
              <v-text-field v-model="amount" label="Amount" />
            </template>
            <template v-if="state == 1">
              <text-label label="Organization Code" :text="ref1"></text-label>
              <text-label label="Ref 2" :text="ref2"></text-label>
              <text-label label="Amount" :text="amount"></text-label>
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
import ListsDialog from '@/components/customer/bills/ListsDialog'
import TextLabel from '@/components/core/TextLabel'

export default {
  layout: 'atm',
  components: {
    ListsDialog,
    TextLabel
  },
  data: () => ({
    state: 0,
    cancelBtn: 'Cancel',
    nextBtn: 'Next',
    listsDialog: false,
    ref1: '',
    ref2: '',
    amount: ''
  }),
  computed: {
    ref1: {
      get() {
        return this.bill || this.d_ref1
      },
      set(val) {
        this.d_ref1 = val
      }
    }
  },
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
    },
    select(ref1) {
      this.ref1 = ref1
    }
  }
}
</script>
