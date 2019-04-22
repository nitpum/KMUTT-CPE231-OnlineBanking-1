<template>
  <v-card-title class="headline">
    Favorites
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
