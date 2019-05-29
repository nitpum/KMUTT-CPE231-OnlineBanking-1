<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex>
        <overview-info
          :overviews="overviews"
          :data="data"
          title="Staff Overview"
        />
      </v-flex>
      <v-flex>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Staff List
            </h3>
            <v-spacer />
            <v-btn
              color="primary"
              class="my-0"
              @click="
                dialog = true
                dialogType = 'create'
              "
            >
              Create Staff
            </v-btn>
          </v-card-title>
          <v-divider />
          <list />
        </v-card>
      </v-flex>
    </v-layout>
    <Dialog
      v-model="dialog"
      :data="data"
      :password-editable="true"
      :editable="true"
      :submit-mode="dialogType"
      @onSubmit="createBranch"
    />
  </v-container>
</template>

<script>
import OverviewInfo from '@/components/core/overview/Info'
import Dialog from '@/components/core/staff/Dialog'
import List from '@/components/admin/staff/List'

export default {
  layout: 'admin',
  components: {
    OverviewInfo,
    Dialog,
    List
  },
  data: () => ({
    from: undefined,
    to: undefined,
    dialog: false,
    dialogType: 'create',
    data: {
      name: '',
      gender: 'Male',
      citizenId: '',
      address: '',
      zipcode: '',
      birthDate: null,
      role: '',
      password: ''
    },
    overviews: [
      [
        {
          key: 'totalStaff',
          label: 'Total Staff'
        }
      ]
    ]
  }),
  methods: {
    createBranch() {
      this.createDialog = false
    }
  }
}
</script>
