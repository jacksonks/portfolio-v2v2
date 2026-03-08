<script>
import ProjectsCardVideo from "@/components/Projects/ProjectsCardVideo.vue";
import ProjectsCardImage from "@/components/Projects/ProjectsCardImage.vue";

export default {
  name: "ProjectsCard",
  components: { ProjectsCardImage, ProjectsCardVideo },
  props: ["item"],
};
</script>

<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        :elevation="hover ? 24 : 4"
        class="mx-auto"
        max-width="350px"
        min-width="350px"
        min-height="550px"
        max-height="550px"
      >
        <projects-card-video
          v-if="item.video"
          :video="item.video"
        ></projects-card-video>
        <projects-card-image
          v-else-if="item.img"
          :img="item.img"
        ></projects-card-image>
        <div v-else-if="!item.img">
          <v-img
            v-if="!hover"
            contain
            min-height="200px"
            max-height="200px"
            :src="item.imgs[0].src"
            :lazy-src="item.imgs[0].src"
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
          <v-img
            v-else
            contain
            min-height="200px"
            max-height="200px"
            :src="item.imgs[1].src"
            :lazy-src="item.imgs[1].src"
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
        </div>
        <v-card-title
          class="primary--text text-center align-center justify-center"
        >
          {{ item.title }}
        </v-card-title>
        <v-card-subtitle>
          <v-row align="center" justify="center" text="center">
            <div v-for="(icon, key) in item.skills" :key="key">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    v-bind="attrs"
                    v-on="on"
                    class="mr-1"
                    height="25px"
                    :src="
                      'https://skillicons.dev/icons?i=' + icon + '&theme=light'
                    "
                    :alt="icon"
                  />
                </template>
                <span>{{ icon }}</span>
              </v-tooltip>
            </div>
          </v-row>
        </v-card-subtitle>
        <v-card-text class="text-justify" style="min-height: 214px">
          <span>{{ item.text }}</span>
        </v-card-text>
        <v-card-actions class="d-flex justify-space-between">
          <v-btn
            v-if="item.link"
            color="primary"
            dark
            :href="item.link"
            target="_blank"
            small
          >
            Visualizar
            <v-icon left>mdi-open-in-new</v-icon>
          </v-btn>
          <v-btn
            v-if="item.android"
            color="green"
            dark
            :href="item.link"
            target="_blank"
            fab
            text
            small
          >
            <v-icon>mdi-android</v-icon>
          </v-btn>
          <v-btn
            v-if="item.ios"
            color="grey"
            dark
            :href="item.link"
            target="_blank"
            fab
            text
            small
          >
            <v-icon>mdi-apple</v-icon>
          </v-btn>
          <v-btn v-if="item.id === 6" color="black" dark fab text small>
            <v-icon>mdi-cellphone</v-icon>
          </v-btn>
          <v-btn v-if="item.id === 6" color="black" dark fab text small>
            <v-icon>mdi-tablet</v-icon>
          </v-btn>
          <v-btn v-if="item.id === 6" color="black" dark fab text small>
            <v-icon>mdi-laptop</v-icon>
          </v-btn>
          <v-btn
            v-if="item.code"
            color="black"
            :href="item.code"
            target="_blank"
            dark
            fab
            text
            small
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-hover>
</template>

<style scoped></style>
