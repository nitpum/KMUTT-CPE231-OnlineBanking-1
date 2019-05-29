<template>
  <v-dialog v-model="model" lazy max-width="500" persistent>
    <v-card>
      <v-card-title primary-title>
        <h2>{{ title }}</h2>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="name" label="Name"></v-text-field>
        <v-textarea v-model="detail" label="Detail"></v-textarea>
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
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    detail: {
      type: String,
      default: ''
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
      return !this.name || !this.detail
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
          name: this.name,
          detail: this.detail
        })
        .then(res => {
          this.$emit('onSubmit')
          this.name = ''
          this.detail = ''
          this.$emit('onSubmit').$store.dispatch('snackbars/success', 'Success')
          this.model = false
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
            name: this.name,
            detail: this.detail
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
