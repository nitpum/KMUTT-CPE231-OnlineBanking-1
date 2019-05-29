<template>
  <v-dialog v-model="model" lazy max-width="500" scrollable>
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
          required
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
          required
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
          :items="genders"
          item-text="text"
          item-value="value"
          required
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
          mask="# #### ##### ## #"
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
          required
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
          mask="#####"
          :rules="[val => val.length == 5 || 'Zipcode length must be 5']"
          required
        ></v-text-field>
        <text-label
          v-if="!editable"
          label="Birth Date"
          placeholder="Birth Date"
          :text="birthDate"
        ></text-label>
        <date-picker-dialog
          v-else
          v-model="birthDate"
          label="Birth Date"
          required
        />
        <text-label
          v-if="
            !editable ||
              fixedPosition === 'staff' ||
              fixedPosition === 'manager'
          "
          label="Role"
          placeholder="Role"
          :text="role"
        ></text-label>
        <v-select
          v-else
          v-model="role"
          label="Role"
          :items="roles"
          item-text="text"
          item-value="value"
          required
        />
        <!-- <text-label v-if="!editable" label="Branch" :text="branch.name" /> -->
        <branch-select v-model="item.branch" />
        <v-text-field
          v-if="editable && passwordEditable"
          v-model="username"
          label="Username"
        />
        <v-text-field
          v-if="editable && passwordEditable"
          v-model="email"
          label="Email"
        />
        <v-text-field
          v-if="editable && passwordEditable"
          v-model="password"
          label="Password"
          type="password"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="model = false">Close</v-btn>
        <v-btn
          v-if="editable"
          :loading="loading"
          :disabled="disabled"
          color="primary"
          flat
          @click="submit"
        >
          <slot name="sumbit-btn">Submit</slot>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import TextLabel from '@/components/core/TextLabel'
import DatePickerDialog from '@/components/core/DatePickerDialog'
import BranchSelect from '@/components/core/branch/Select'

export default {
  components: {
    DatePickerDialog,
    TextLabel,
    BranchSelect
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
      default() {
        return {
          name: {
            firstName: '',
            lastName: ''
          },
          gender: 'Male',
          citizenId: '',
          address: '',
          zipcode: '',
          birthDate: new Date(),
          role: '',
          username: '',
          password: '',
          email: '',
          branch: {}
        }
      }
    },
    fixedPosition: {
      type: String,
      default: ''
    },
    passwordEditable: {
      type: Boolean,
      default: false
    },
    mode: {
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
    roles: [
      {
        text: 'Staff',
        value: 'general'
      },
      {
        text: 'Manager',
        value: 'manager'
      }
    ],
    formHasErrors: false,
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
    item: {
      get() {
        return this.data
      },
      set(val) {
        this.$emit('update:data', val)
      }
    },
    firstName: {
      get() {
        return this.data.name.firstName || ''
      },
      set(val) {
        const data = this.data
        data.name.firstName = val
        this.$emit('update:data', data)
        this.data.firstName = val
      }
    },
    lastName: {
      get() {
        return this.data.name.lastName || ''
      },
      set(val) {
        const data = this.data
        data.name.lastName = val
        this.$emit('update:data', data)
        this.data.lastName = val
      }
    },
    gender: {
      get() {
        return this.data.gender || 'Undefined'
      },
      set(val) {
        const data = this.data
        data.gender = val
        this.$emit('update:data', data)
        this.data.gender = val
      }
    },
    citizenId: {
      get() {
        return this.data.citizenId || ''
      },
      set(val) {
        const data = this.data
        data.citizenId = val
        this.$emit('update:data', data)
        this.data.citizenId = val
      }
    },
    address: {
      get() {
        return this.data.address || ''
      },
      set(val) {
        const data = this.data
        data.address = val
        this.$emit('update:data', data)
        this.data.address = val
      }
    },
    zipcode: {
      get() {
        return this.data.zipcode || ''
      },
      set(val) {
        const data = this.data
        data.zipcode = val
        this.$emit('update:data', data)
        this.data.zipcode = val
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
    role: {
      get() {
        if (this.fixedPosition === 'staff' || this.fixedPosition === 'manager')
          return this.fixedPosition
        return this.data.role
      },
      set(val) {
        const data = this.data || 'Staff'
        data.role = val
        this.$emit('update:data', data)
        this.data.role = val
      }
    },
    username: {
      get() {
        return this.data.username || ''
      },
      set(val) {
        const data = this.data
        data.username = val
        this.$emit('update:data', data)
        this.data.username = val
      }
    },
    password: {
      get() {
        return this.data.password || ''
      },
      set(val) {
        const data = this.data
        data.password = val
        this.$emit('update:data', data)
        this.data.password = val
      }
    },
    email: {
      get() {
        return this.data.email || ''
      },
      set(val) {
        const data = this.data
        data.email = val
        this.$emit('update:data', data)
        this.data.email = val
      }
    },
    disabled() {
      return (
        !this.firstName ||
        !this.lastName ||
        !this.citizenId ||
        !this.address ||
        !this.zipcode ||
        !this.item.branch ||
        this.loading
      )
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
        role: this.role,
        username: this.data.username,
        password: this.password,
        email: this.data.email
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
      const data = {
        name: `${this.firstName} ${this.lastName}`,
        gender: this.gender,
        citizenId: this.citizenId,
        address: this.address,
        zipcode: this.zipcode,
        birthDate: this.birthDate,
        position: this.role,
        username: this.data.username,
        password: this.password,
        email: this.data.email,
        branch: this.item.branch._id,
        phone: '0',
        permission: this.role
      }
      this.loading = true
      this.$axios
        .post('/staff/general/create', data)
        .then(res => {
          this.firstName = ''
          this.lastName = ''
          this.gender = ''
          this.citizenId = ''
          this.address = ''
          this.zipcode = ''
          this.birthDate = ''
          this.position = ''
          this.username = ''
          this.password = ''
          this.item.branch = null
          this.email = ''
          this.$emit('onSubmit').$store.dispatch('snackbars/success', 'Success')
          this.model = false
        })
        .catch(e => {
          this.$store.dispatch(
            'snackbars/error',
            e.response.status === 400 ? e.response.data.err : e.message
          )
        })
        .finally(() => {
          this.loading = false
        })
    },
    update() {
      this.loading = true
      const data = {
        name: {
          firstName: this.firstName,
          lastName: this.lastName
        },
        gender: this.gender,
        citizenId: this.citizenId,
        address: this.address,
        zipcode: this.zipcode,
        birthDate: this.birthDate,
        position: this.role,
        permission: this.role,
        branch: this.item.branch._id,
        phone: '0'
      }
      if (this.passwordEditable) {
        data.email = this.email
        data.username = this.username
        data.password = this.password
      }
      this.$axios
        .post('/staff/general/edit', {
          id: this.data.id,
          data: data
        })
        .then(res => {
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
