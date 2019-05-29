<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex>
        <overview-info
          :overviews="overviews"
          :data="data"
          title="Manager Overview"
        />
      </v-flex>
      <v-flex>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Manager List
            </h3>
            <v-spacer />
            <v-btn color="primary" class="my-0" @click="openCreateDialog">
              Create Manager
            </v-btn>
          </v-card-title>
          <v-divider />
          <branch-list />
        </v-card>
      </v-flex>
    </v-layout>
    <Dialog
      v-model="createDialog"
      mode="create"
      :editable="true"
      :password-editable="true"
      title="Create Manager"
      fixed-position="manager"
      @onSubmit="createBranch"
    />
  </v-container>
</template>

<script>
import OverviewInfo from '@/components/core/overview/Info'
import BranchList from '@/components/admin/BranchList'
import Dialog from '@/components/core/staff/Dialog'

export default {
  layout: 'admin',
  components: {
    OverviewInfo,
    BranchList,
    Dialog
  },
  data: () => ({
    from: undefined,
    to: undefined,
    createDialog: false,
    data: {
      totalBranch: 120,
      minStaff: 10,
      maxStaff: 40,
      avgStaff: 20,
      mostTransaction: 300,
      avgTranPStaff: 5
    },
    overviews: [
      [
        {
          key: 'totalBranch',
          label: 'Total Branch'
        },
        {
          key: 'minStaff',
          label: 'Minimum Staff'
        },
        {
          key: 'maxStaff',
          label: 'Maximum Staff'
        },
        {
          key: 'avgStaff',
          label: 'Average Staff'
        }
      ],
      [
        {
          key: 'mostTransaction',
          label: 'Most Transaction',
          suffix: '(BangMod)'
        },
        {
          key: 'avgTranPStaff',
          label: 'Average Transaction / Staff'
        }
      ]
    ]
  }),
  methods: {
    openCreateDialog() {
      this.createDialog = true
    },
    createBranch() {
      this.createDialog = false
    }
  }
}
</script>
