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
          label="Firstname"
          placeholder="Firstname"
          :text="firstName"
        ></text-label>
        <v-text-field
          v-else
          v-model="firstName"
          label="Firstname"
          placeholder="Firstname"
        ></v-text-field>
        <text-label
          v-if="!editable"
          label="Lastname"
          placeholder="Lastname"
          :text="lastName"
        ></text-label>
        <v-text-field
          v-else
          v-model="lastName"
          label="Lastname"
          placeholder="Lastname"
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
          item-text="text"
          item-value="value"
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
        <v-btn v-if="editable" color="primary" flat @click="submit">
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
    },
    submitMode: {
      type: String,
      default: 'none'
    }
  },
  data: () => ({
    genders: [
      { text: 'Male', value: 'M' },
      { text: 'Female', value: 'F' },
      { text: 'Undefined', value: 'U' }
    ],
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
    firstName: {
      get() {
        return this.data.firstName
      },
      set(val) {
        const data = this.data
        data.firstName = val
        this.$emit('update:data', data)
      }
    },
    lastName: {
      get() {
        return this.data.lastName
      },
      set(val) {
        const data = this.data
        data.lastName = val
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
    zipcode: {
      get() {
        return this.data.zipcode
      },
      set(val) {
        const data = this.data
        data.zipcode = val
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
  },
  methods: {
    submit() {
      if (this.submitMode === 'create') {
        this.create()
      } else if (this.submitMode === 'update') {
        this.update()
      } else {
        this.$emit('onSubmit')
      }
    },
    create() {
      this.$axios
        .post('/staff/general/create', {
          name: `${this.firstName} ${this.lastName}`,
          gender: this.gender,
          citizenId: this.citizenId,
          address: this.address,
          zipcode: this.zipcode,
          birthDate: this.birthDate,
          position: this.role,
          password: this.password,
          email: String(Date.now()) + 'dummy@domain.com',
          username: String(Date.now()),
          phone: '0'
        })
        .then(res => {
          this.firstName = ''
          this.lastName = ''
          this.gender = ''
          this.citizenId = ''
          this.address = ''
          this.zipcode = ''
          this.birthDate = ''
          this.position = ''
          this.password = ''
          this.$emit('onSubmit').$store.dispatch('snackbars/success', 'Success')
        })
        .catch(e => {
          this.$store.dispatch(
            'snackbars/error',
            e.response.status === 400 ? e.response.data.err : e.message
          )
        })
    },
    update() {
      const data = {
        name: `${this.firstName} ${this.lastName}`,
        gender: this.gender,
        citizenId: this.citizenId,
        address: this.address,
        zipcode: this.zipcode,
        birthDate: this.birthDate,
        position: this.role,
        email: String(Date.now()) + 'dummy@domain.com',
        username: String(Date.now()),
        phone: '0'
      }
      if (this.passwordEditable) {
        data.password = this.password
      }
      this.$axios
        .post('/staff/general/edit', data)
        .then(res => {
          this.$emit('onSubmit')
        })
        .catch(e => {
          this.$store.dispatch('snackbars/show', e.message)
        })
    }
  }
}
</script>
