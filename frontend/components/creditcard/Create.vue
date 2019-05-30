<template>
  <v-dialog v-model="model" lazy max-width="500">
    <v-card>
      <v-card-title class="headline">
        Create Card
      </v-card-title>
      <v-card-text>
        <v-container>
          <acc-select v-model="account" />
          <v-text-field v-model="holder" label="Holder" />
          <date-picker-dialog v-model="paymentDate" label="Payment Date" />
          <date-picker-dialog v-model="expiredDate" label="Expired Date" />
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn flat @click="model = false">
          close
        </v-btn>
        <v-btn flat color="primary" @click="submit">
          create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import DatePickerDialog from '@/components/core/DatePickerDialog'
import AccSelect from '@/components/core/account/Select'

export default {
  components: {
    AccSelect,
    DatePickerDialog
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    account: {},
    holder: '',
    paymentDate: '',
    expiredDate: ''
  }),
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  watch: {
    account() {
      this.holder = `${this.account.customerId.name.firstName} ${
        this.account.customerId.name.lastName
      }`
    }
  },
  methods: {
    submit() {
      const data = {
        accountId: this.account._id,
        holder: this.holder,
        paymentDate: this.paymentDate,
        expire: this.expiredDate
      }
      this.$axios
        .post('/card/create', data)
        .then(res => {
          this.model = false
          this.$emit('onSubmit').$store.dispatch('snackbars/success', 'Success')
        })
        .catch(e => {
          this.$store.dispatch('snackbars/show', e.message)
        })
    }
  }
}
</script>
