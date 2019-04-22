<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-btn slot="activator" color="green" dark>
      <v-icon left>add</v-icon>
      add
    </v-btn>
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title>
          Add favorite
        </v-toolbar-title>
        <v-spacer />
        <v-btn icon flat @click="dialog = false">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-container>
          <v-text-field label="Name" counter="50" />
          <v-select label="Bank" />
          <v-text-field label="Account Number" mask="###-#-#####-#" />
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
