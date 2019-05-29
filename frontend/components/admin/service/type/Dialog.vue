<template>
  <v-dialog v-model="model" lazy max-width="500" persistent>
    <v-card>
      <v-card-title primary-title>
        <h2>{{ title }}</h2>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="data.name" label="Name"></v-text-field>
        <v-textarea v-model="data.detail" label="Detail"></v-textarea>
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
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Create Services Type'
    },
    data: {
      type: Object,
      default() {
        return {
          _id: '',
          name: '',
          detail: ''
        }
      }
    },
    mode: {
      type: String,
      default: 'create'
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
      return !this.data.name || !this.data.detail
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
        .post('/service-reference/type/create', {
          name: this.data.name,
          detail: this.data.detail
        })
        .then(res => {
          this.model = false
          this.$emit('onSubmit')
          this.$emit('onSubmit').$store.dispatch('snackbars/success', 'Success')
          this.data.name = ''
          this.data.detail = ''
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
        .post('/service-reference/type/edit', {
          id: this.id,
          data: {
            name: this.data.name,
            detail: this.data.detail
          }
        })
        .then(res => {
          this.model = false
          this.$emit('onSubmit').$store.dispatch('snackbars/success', 'Success')
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
