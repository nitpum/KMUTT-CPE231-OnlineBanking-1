<template>
  <v-dialog v-model="model" width="500px">
    <v-btn slot="activator" color="primary">
      Add
    </v-btn>
    <v-card>
      <v-card-title class="headline" primary-title>
        Title
      </v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        fuga tempora, perferendis rem libero error consectetur earum animi sed
        id. Tenetur neque nemo tempora maxime molestias veniam obcaecati
        inventore mollitia.
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn flat>
          Close
        </v-btn>
        <v-btn flat color="primary">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    model: false
  })
}
</script>
