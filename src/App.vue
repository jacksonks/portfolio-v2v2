<script>
import projects from "@/assets/projects.json";
export default {
  name: "App",
  data: () => ({
    //
  }),
  computed: {
    languages() {
      return projects["languages"];
    },
    menu() {
      return projects["menu"];
    },
  },
  methods: {
    changeLocale(item) {
      this.$vuetify.lang.current = item.code;
    },
  },
};
</script>

<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-toolbar-title>
        <!--
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />

          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
          />
        </div>
-->
        <div class="word d-flex align-center">
          <span class="letter" style="background-color: #42b983">V</span>
          <span class="letter" style="background-color: #42b983">U</span>
          <span class="letter" style="background-color: #42b983">E</span>
          <span class="letter" style="background-color: #58c4dc">R</span>
          <span class="letter" style="background-color: #dd0031">A</span>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        class="hidden-xs-only"
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-1">Blog</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn text @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text>
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title class="font-weight-bold">Translations/Traduções: {{ $vuetify.lang.current }}</v-list-item-title>
          </v-list-item>
          <div v-for="(item, index) in languages" :key="index">
            <div v-if="!item.disabled">
              <v-list-item @click="changeLocale(item)">
                <v-list-item-title>{{ item.language }}</v-list-item-title>
              </v-list-item>
            </div>
          </div>
        </v-list>
      </v-menu>
    </v-app-bar>
    <!--    <v-main>
      <router-view/>
    </v-main>-->
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-divider></v-divider>

    <v-footer color="black" dark padless>
      <v-col class="text-center">
        {{ new Date().getFullYear() }} - Copyright All rights reserved &copy; Jackson Kelvin de
        Souza
      </v-col>
      <v-col class="text-center">
        {{ new Date().getFullYear() }} - Todos os direitos reservados &copy; Jackson Kelvin de
        Souza
      </v-col>
    </v-footer>
  </v-app>
</template>

<style scoped>
.word {
  display: flex;
  gap: 5px;
}

.letter {
  display: inline-block;
  padding: 10px;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  border-radius: 2px;
}
</style>
