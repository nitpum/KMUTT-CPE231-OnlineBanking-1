<template>
  <v-card-title class="headline">
    Favorite bill payment
    <v-spacer />
    <add-favorite />
  </v-card-title>
</template>

<script>
import AddFavorite from './AddFavorite'

export default {
  components: {
    AddFavorite
  }
}
</script>
