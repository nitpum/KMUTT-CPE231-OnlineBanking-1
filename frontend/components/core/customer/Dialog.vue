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
          :rules="[val => val.length == 5 || 'Zipcode length must be 5']"
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
          label="Phone"
          placeholder="Phone"
          :text="Phone"
        ></text-label>
        <v-select
          v-else
          v-model="phone"
          label="Phone"
          placeholder="Phone"
          :items="Phone"
        />
        <text-label
          v-if="!editable"
          label="Email"
          placeholder="Email"
          :text="Email"
        ></text-label>
        <v-select
          v-else
          v-model="email"
          label="Email"
          placeholder="Email"
          :items="Email"
        />
        <text-label
          v-if="!editable"
          label="Username"
          placeholder="Username"
          :text="Username"
        ></text-label>
        <v-select
          v-else
          v-model="username"
          label="Username"
          placeholder="Username"
          :items="Username"
        />
        <text-label
          v-if="!editable"
          label="LastAcess"
          placeholder="LastAcess"
          :text="LastAcess"
        ></text-label>
        <v-select
          v-else
          v-model="lastAcess"
          label="LastAcess"
          placeholder="LastAcess"
          :items="LastAcess"
        />
        <text-label
          v-if="!editable"
          label="Status"
          placeholder="Status"
          :text="Status"
        ></text-label>
        <v-select
          v-else
          v-model="status"
          label="Status"
          placeholder="Status"
          :items="Status"
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
      default: 'Customer'
    },
    data: {
      type: Object,
      default: null
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
          phone: '0',
          lastacess: ''
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
        email: String(Date.now()) + 'dummy@domain.com',
        username: String(Date.now()),
        phone: '0',
        lastacess: '0',
        status: '0'
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
