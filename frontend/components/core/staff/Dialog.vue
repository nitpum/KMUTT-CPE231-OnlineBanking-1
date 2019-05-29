<template>
  <v-dialog v-model="model" lazy max-width="500">
    <v-card>
      <v-card-title primary-title>
        <h2>
          <slot name="title">{{ title }}</slot>
        </h2>
      </v-card-title>
      <v-card-text>
        <text-label
          v-if="!editable"
          label="Name"
          placeholder="Name"
          :text="name"
        ></text-label>
        <v-text-field
          v-else
          v-model="name"
          label="Name"
          placeholder="Name"
        ></v-text-field>
        <text-label
          v-if="!editable"
          label="Gender"
          placeholder="Gender"
          :text="gender"
        ></text-label>
        <v-select
          v-else
          v-model="gender"
          label="Gender"
          placeholder="Gender"
          :items="genders"
        ></v-select>
        <text-label
          v-if="!editable"
          label="Citizen ID"
          placeholder="Citizen ID"
          :text="citizenId"
        ></text-label>
        <v-text-field
          v-else
          v-model="citizenId"
          label="Citizen ID"
          placeholder="Citizen ID"
        ></v-text-field>
        <text-label
          v-if="!editable"
          label="Address"
          placeholder="Address"
          :text="address"
        ></text-label>
        <v-text-field
          v-else
          v-model="address"
          label="Address"
          placeholder="Address"
        ></v-text-field>
        <text-label
          v-if="!editable"
          label="Zipcode"
          placeholder="Zipcode"
          :text="zipcode"
        ></text-label>
        <v-text-field
          v-else
          v-model="zipcode"
          label="Zipcode"
          placeholder="Zipcode"
        ></v-text-field>
        <text-label
          v-if="!editable"
          label="Birth Date"
          placeholder="Birth Date"
          :text="birthDate"
        ></text-label>
        <date-picker-dialog v-else v-model="birthDate" label="Birth Date" />
        <text-label
          v-if="!editable"
          label="Role"
          placeholder="Role"
          :text="role"
        ></text-label>
        <v-select
          v-else
          v-model="role"
          label="Role"
          placeholder="Role"
          :items="roles"
        />
        <v-text-field
          v-if="editable && passwordEditable"
          v-model="password"
          label="Password"
          placeholder="Password"
          type="password"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="model = false">Close</v-btn>
        <v-btn v-if="editable" color="primary" flat @click="$emit('onSubmit')">
          <slot name="sumbit-btn">Submit</slot>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import TextLabel from '@/components/core/TextLabel'
import DatePickerDialog from '@/components/core/DatePickerDialog'

export default {
  components: {
    DatePickerDialog,
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
    },
    title: {
      type: String,
      default: 'Staff'
    },
    data: {
      type: Object,
      default: null
    },
    passwordEditable: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    genders: ['Male', 'Female', 'Undefined'],
    roles: ['Staff', 'Manager']
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
    name: {
      get() {
        return this.data.name
      },
      set(val) {
        const data = this.data
        data.name = val
        this.$emit('update:data', data)
      }
    },
    gender: {
      get() {
        return this.data.gender
      },
      set(val) {
        const data = this.data
        data.gender = val
        this.$emit('update:data', data)
      }
    },
    citizenId: {
      get() {
        return this.data.citizenId
      },
      set(val) {
        const data = this.data
        data.citizenId = val
        this.$emit('update:data', data)
      }
    },
    address: {
      get() {
        return this.data.address
      },
      set(val) {
        const data = this.data
        data.address = val
        this.$emit('update:data', data)
      }
    },
    birthDate: {
      get() {
        return this.data.birthDate
      },
      set(val) {
        const data = this.data
        data.birthDate = val
        this.$emit('update:data', data)
      }
    },
    role: {
      get() {
        return this.data.role
      },
      set(val) {
        const data = this.data
        data.role = val
        this.$emit('update:data', data)
      }
    },
    password: {
      get() {
        return this.data.password
      },
      set(val) {
        const data = this.data
        data.password = val
        this.$emit('update:data', data)
      }
    }
  }
}
</script>
