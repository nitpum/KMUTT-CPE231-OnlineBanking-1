<template>
  <v-dialog v-model="model" lazy max-width="500" scrollable>
    <v-card>
      <v-card-title primary-title>
        <h2>
          <slot name="title">{{ title }}</slot>
        </h2>
      </v-card-title>
      <v-card-text>
        <component
          :is="component('v-text-field')"
          v-model="firstName"
          label="Firstname"
          :text="firstName"
        />
        <component
          :is="component('v-text-field')"
          v-model="lastName"
          label="Lastname"
          :text="lastName"
        />
        <component
          :is="component('v-select')"
          v-model="gender"
          label="Gender"
          :text="gender"
          :items="genders"
          item-text="text"
          item-value="value"
        />
        <component
          :is="component('v-text-field')"
          v-model="citizenId"
          label="Citizen ID"
          :text="citizenId"
        />
        <component
          :is="component('v-text-field')"
          v-model="address"
          label="Address"
          :text="address"
        />
        <component
          :is="component('v-text-field')"
          v-model="zipcode"
          label="Zipcode"
          :text="zipcode"
          :rules="[val => val.length == 5 || 'Zipcode length must be 5']"
        />
        <component
          :is="component('date-picker-dialog')"
          v-model="birthDate"
          label="Birth Date"
          :text="birthDate"
        />
        <component
          :is="component('v-text-field')"
          v-model="phone"
          label="Phone"
          :text="phone"
        />
        <component
          :is="component('v-text-field')"
          v-model="email"
          label="Email"
          :text="email"
          type="email"
        />
        <component
          :is="component('v-text-field')"
          v-model="username"
          label="Username"
          :text="username"
        />

        <v-text-field
          v-if="passwordEditable"
          v-model="password"
          label="Password"
        />
        <text-label
          v-if="!editable"
          label="LastAcess"
          placeholder="LastAcess"
          :text="lastacess"
        ></text-label>
        <text-label
          v-if="!editable"
          label="Status"
          placeholder="Status"
          :text="status"
        ></text-label>
        <v-select v-else v-model="status" label="Status" :items="statusList" />
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
      default: 'Customer'
    },
    data: {
      type: Object,
      default() {
        return {
          name: {
            firstName: '',
            lastName: ''
          },
          gender: 'Undefined',
          citizenId: '',
          address: '',
          zipcode: '',
          birthDate: new Date(),
          phone: '',
          username: '',
          status: '',
          email: '',
          lastaccess: ''
        }
      }
    },
    mode: {
      type: String,
      default: 'none'
    },
    passwordEditable: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    genders: [
      { text: 'Male', value: 'M' },
      { text: 'Female', value: 'F' },
      { text: 'Undefined', value: 'U' }
    ],
    statusList: [
      { text: 'ACTIVE', value: 'ACTIVE' },
      { text: 'LOCK', value: 'LOCK' }
    ],
    password: '',
    formHasErrors: false
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
          ? new Date(this.data.birthDate).toISOString().split('T')[0]
          : new Date().toISOString().split('T')[0]
      },
      set(val) {
        const data = this.data
        data.birthDate = val
        this.$emit('update:data', data)
      }
    },
    phone: {
      get() {
        return this.data.phone
      },
      set(val) {
        const data = this.data
        data.phone = val
        this.$emit('update:data', data)
      }
    },
    username: {
      get() {
        return this.data.username
      },
      set(val) {
        const data = this.data
        data.username = val
        this.$emit('update:data', data)
      }
    },
    status: {
      get() {
        return this.data.status
      },
      set(val) {
        const data = this.data
        data.status = val
        this.$emit('update:data', data)
      }
    },
    email: {
      get() {
        return this.data.email
      },
      set(val) {
        const data = this.data
        data.email = val
        this.$emit('update:data', data)
      }
    },
    lastacess: {
      get() {
        return this.data.lastacess
      },
      set(val) {
        const data = this.data
        data.lastacess = val
        this.$emit('update:data', data)
      }
    },
    form() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        citizenId: this.citizenId,
        address: this.address,
        zipcode: this.zipcode,
        birthDate: this.birthDate,
        phone: this.phone,
        username: this.username,
        status: this.status,
        email: this.email,
        lastacess: this.acess
      }
    }
  },
  methods: {
    submit() {
      if (this.mode === 'create') {
        this.create()
      } else if (this.mode === 'update') {
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
          username: this.username,
          email: this.email,
          password: this.password,
          phone: '',
          lastacess: new Date()
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
          this.phone = ''
          this.email = ''
          this.username = ''
          this.lastacess = ''
          this.status = ''
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
        email: this.email,
        username: this.username,
        phone: '0',
        lastacess: '0',
        status: this.status
      }
      if (this.passwordEditable) {
        data.password = this.password
      }
      this.$axios
        .post('/customer/edit', data)
        .then(res => {
          this.$emit('onSubmit')
        })
        .catch(e => {
          this.$store.dispatch('snackbars/show', e.message)
        })
    },
    component(component) {
      return this.editable ? component : 'text-label'
    }
  }
}
</script>
