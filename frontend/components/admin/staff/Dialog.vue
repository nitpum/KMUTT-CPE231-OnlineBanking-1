<template>
  <v-dialog v-model="model" lazy max-width="500">
    <v-card>
      <v-card-title primary-title>
        <h2>{{ title }}</h2>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="name" label="Name" />
        <v-text-field v-model="citizenId" label="Citizen ID" />
        <v-select v-model="gender" :items="genders" />
        <date-picker-dialog v-model="birthDate" label="From" />
        <v-text-field v-model="address" label="Adress" />
        <v-text-field v-model="zipcode" label="Zipcode" />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="model = false">Close</v-btn>
        <v-btn color="primary" flat @click="$emit('onSubmit')">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import DatePickerDialog from '@/components/core/DatePickerDialog'

export default {
  components: {
    DatePickerDialog
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Staff'
    }
  },
  data: () => ({
    name: '',
    citizenId: '',
    address: '',
    zipcode: null,
    gender: 'Male',
    genders: ['Male', 'Female', 'Undefined'],
    birthDate: null
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
