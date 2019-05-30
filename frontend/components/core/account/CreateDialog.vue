<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title>
        <h3 class="headline">
          Create Account
        </h3>
      </v-card-title>
      <v-card-text>
        <f-customer v-model="customerId" />
        <v-text-field
          v-model="accId"
          label="Account ID"
          mask="###-#-######-#"
        />
        <v-text-field v-model="balance" label="Balance" type="number" min="0" />
        <type-select v-model="accType" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn flat @click="dialog = false">
          cancel
        </v-btn>
        <v-btn color="primary" :disabled="disabled" flat @click="create()">
          submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import FCustomer from '@/components/core/customer/FCustomer'
import TypeSelect from '@/components/core/account/type/Select'

export default {
  components: {
    FCustomer,
    TypeSelect
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    customerId: '',
    accType: {},
    accId: '',
    accTypes: [],
    balance: 0,
    branch: {}
  }),
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    disabled() {
      return !this.accType || !this.accId || !this.balance
    }
  },
  mounted() {
    this.$axios.get('/account/create/data').then(({ data }) => {
      this.branch = data.branch
      this.accTypes = data.types.map(el => ({
        id: el._id,
        text: el.name
      }))
    })
  },
  methods: {
    create() {
      this.$axios
        .post('/account/create', {
          customerId: this.customerId,
          accountId: this.accId,
          balance: this.balance,
          branchId: this.branch._id,
          status: 'ACTIVE',
          accountType: this.accType._id
        })
        .then(() => {
          this.$emit('onSubmit').$store.dispatch('snackbars/success', 'Success')
          this.dialog = false
        })
        .catch(e => {
          if (e.response.status === 400) {
            this.$store.dispatch('snackbars/error', e.response.data)
          } else {
            this.$store.dispatch('snackbars/error', e.message)
          }
        })
    }
  }
}
</script>
