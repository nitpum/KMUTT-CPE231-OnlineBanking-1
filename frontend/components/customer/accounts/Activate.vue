<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <v-card-title class="headline">
        Activate online account
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field label="Account number" mask="###-#-#####-#" />
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn flat color="primary">
          close
        </v-btn>
        <v-btn flat color="primary">
          save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
}
</script>
