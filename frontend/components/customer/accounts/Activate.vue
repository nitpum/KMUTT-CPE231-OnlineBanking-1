<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <v-card-title class="headline justify-space-between">
        Activate online account
        <v-avatar color="primary" class="subheading white--text" size="24">
          {{ step }}
        </v-avatar>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-text-field label="Account number" mask="###-#-#####-#" />
            </v-window-item>
            <v-window-item :value="2">
              <!-- @todo: account info -->
              account info here
            </v-window-item>
          </v-window>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <div v-if="step === 1">
          <v-btn flat color="primary" @click="dialog = false">
            close
          </v-btn>
          <v-btn flat color="primary" @click="next()">
            next
          </v-btn>
        </div>
        <div v-else>
          <v-btn flat color="primary" @click="step -= 1">
            back
          </v-btn>
          <v-btn flat color="primary">
            save
          </v-btn>
        </div>
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
    }
  },
  data: () => ({
    step: 1
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
  methods: {
    next() {
      /* validate and fetch data before next step */
      this.step = 2
    }
  }
}
</script>
