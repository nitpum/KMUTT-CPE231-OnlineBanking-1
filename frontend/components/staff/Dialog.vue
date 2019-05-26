<template>
  <v-dialog v-model="model" lazy max-width="500">
    <v-card>
      <v-card-title primary-title>
        <h2>Staff</h2>
      </v-card-title>
      <v-card-text>
        <text-label
          v-if="!editable"
          label="Name"
          placeholder="Name"
        ></text-label>
        <v-text-field v-else label="Name" placeholder="Name"></v-text-field>
        <text-label
          v-if="!editable"
          label="Gender"
          placeholder="Gender"
        ></text-label>
        <v-select
          v-else
          label="Gender"
          placeholder="Gender"
          :items="gender"
        ></v-select>
        <text-label
          v-if="!editable"
          label="Citizen ID"
          placeholder="Citizen ID"
        ></text-label>
        <v-text-field
          v-else
          label="Citizen ID"
          placeholder="Citizen ID"
        ></v-text-field>
        <text-label
          v-if="!editable"
          label="Address"
          placeholder="Address"
        ></text-label>
        <v-text-field
          v-else
          label="Address"
          placeholder="Address"
        ></v-text-field>
        <text-label
          v-if="!editable"
          label="Zipcode"
          placeholder="Zipcode"
        ></text-label>
        <v-text-field
          v-else
          label="Zipcode"
          placeholder="Zipcode"
        ></v-text-field>
        <text-label
          v-if="!editable"
          label="Birth Date"
          placeholder="Birth Date"
        ></text-label>
        <v-text-field
          v-else
          label="Birth Date"
          placeholder="Birth Date"
        ></v-text-field>
        <text-label
          v-if="!editable"
          label="Role"
          placeholder="Role"
        ></text-label>
        <v-text-field v-else label="Role" placeholder="Role"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="model = false">Close</v-btn>
        <v-btn v-if="editable" color="primary" flat>Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import TextLabel from '@/components/core/TextLabel'

export default {
  components: {
    TextLabel
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: false
    },
    staff: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    gender: ['Male', 'Female', 'Undefined']
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
  }
}
</script>
