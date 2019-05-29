<template>
  <v-dialog v-model="model" lazy max-width="500" persistent>
    <v-card>
      <v-card-title primary-title>
        <h2>{{ title }}</h2>
      </v-card-title>
      <v-card-text>
        <org-select v-model="data.organization" />
        <type-select v-model="data.type" />
        <v-text-field v-model="data.fee" type="number" label="Fee" required />
        <v-textarea v-model="data.detail" label="Detail" />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="model = false">Close</v-btn>
        <v-btn
          color="primary"
          flat
          :loading="loading"
          :disabled="disabled"
          @click="submit"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import OrgSelect from '@/components/admin/org/Select'
import TypeSelect from '@/components/admin/service/type/Select'

export default {
  components: {
    OrgSelect,
    TypeSelect
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'create'
    },
    title: {
      type: String,
      default: 'Create Services'
    },
    data: {
      type: Object,
      default() {
        return {
          _id: '',
          organization: {
            _id: '',
            bankAccount: '',
            bankSwift: '',
            name: '',
            type: ''
          },
          detail: '',
          fee: 0,
          type: {
            _id: '',
            name: '',
            type: ''
          }
        }
      }
    }
  },
  data: () => ({
    loading: false
  }),
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    disabled() {
      return (
        !this.data.organization._id ||
        this.data.organization._id === '' ||
        !this.data.type._id ||
        this.data.type._id === '' ||
        !this.data.fee ||
        this.data.fee === '' ||
        this.data.detail === '' ||
        this.loading
      )
    }
  },
  methods: {
    submit() {
      if (this.mode === 'create') this.create()
      else if (this.mode === 'update') this.update()
    },
    create() {
      this.loading = true
      this.$axios
        .post('/service-reference/create', {
          organizationId: this.data.organization._id,
          detail: this.data.detail,
          fee: this.data.fee,
          typeId: this.data.type._id
        })
        .then(res => {
          this.$emit('onSubmit')
          this.$emit('onSubmit').$store.dispatch('snackbars/success', 'Success')
          this.model = false
          // Clear
          this.data.organization = {
            _id: '',
            bankAccount: '',
            bankSwift: '',
            name: '',
            type: ''
          }
          this.data.detail = ''
          this.data.fee = 0
          this.data.type = {
            _id: '',
            name: '',
            type: ''
          }
        })
        .catch(e => {
          this.$store.dispatch('snackbars/show', e.message)
        })
        .finally(() => {
          this.loading = false
        })
    },
    update() {
      this.loading = true
      this.$axios
        .post('/service-reference/edit', {
          id: this.data._id,
          data: {
            organizationId: this.data.organization._id,
            detail: this.data.detail,
            fee: this.data.fee,
            typeId: this.data.type._id
          }
        })
        .then(res => {
          this.$emit('onSubmit')
          this.$emit('onSubmit').$store.dispatch('snackbars/success', 'Success')
          this.model = false
        })
        .catch(e => {
          this.$store.dispatch('snackbars/show', e.message)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
