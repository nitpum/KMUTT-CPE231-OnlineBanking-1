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
        <v-select
          v-model="accTypeId"
          label="Account Type"
          :items="accTypes"
          item-text="text"
          item-value="id"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn flat @click="dialog = false">
          cancel
        </v-btn>
        <v-btn color="primary" flat @click="create()">
          submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import FCustomer from '@/components/core/customer/FCustomer'

export default {
  components: {
    FCustomer
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    customerId: '',
    accTypeId: '',
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
          accountId: this.accTypeId,
          balance: this.balance,
          branchId: this.branch._id,
          status: 'ACTIVE',
          accountType: this.accTypeId
        })
        .then(() => {
          this.$store.dispatch('snackbars/success', 'Success')
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
