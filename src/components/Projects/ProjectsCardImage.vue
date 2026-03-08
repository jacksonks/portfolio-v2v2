<script>
export default {
  name: "ProjectsCardImage",
  props: ["img"],
};
</script>

<template>
  <v-img
    contain
    min-height="200px"
    max-height="200px"
    :src="img"
    :lazy-src="img"
    aspect-ratio="1"
    class="grey lighten-2"
  >
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<style scoped></style>
