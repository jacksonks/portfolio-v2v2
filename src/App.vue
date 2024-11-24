<script>
export default {
  name: "App",
  data: () => ({
    menu: [],
    languages: [
      { code: "af", language: "Afrikaans (Afrikaans)", disabled: true },
      { code: "ar", language: "Arabic (العربية)", disabled: true },
      { code: "az", language: "Azerbaijani (Azərbaycan)", disabled: true },
      { code: "bg", language: "Bulgarian (български)", disabled: true },
      { code: "ca", language: "Catalan (català)", disabled: true },
      { code: "ckb", language: "Central Kurdish (کوردی)", disabled: true },
      { code: "cs", language: "Czech (čeština)", disabled: true },
      { code: "da", language: "Danish (Dansk)", disabled: true },
      { code: "de", language: "German (Deutsch)", disabled: true },
      { code: "el", language: "Greek (Ελληνικά)", disabled: true },
      { code: "en", language: "English", disabled: false },
      { code: "es", language: "Spanish (Español)", disabled: true },
      { code: "et", language: "Estonian (eesti)", disabled: true },
      { code: "fa", language: "Persian (فارسی)", disabled: true },
      { code: "fi", language: "Finnish (suomi)", disabled: true },
      { code: "fr", language: "French (Français)", disabled: true },
      { code: "he", language: "Hebrew (עברית)", disabled: true },
      { code: "hr", language: "Croatian (hrvatski jezik)", disabled: true },
      { code: "hu", language: "Hungarian (magyar)", disabled: true },
      { code: "id", language: "Indonesian (Indonesian)", disabled: true },
      { code: "it", language: "Italian (Italiano)", disabled: true },
      { code: "ja", language: "Japanese (日本語)", disabled: true },
      { code: "ko", language: "Korean (한국어)", disabled: true },
      { code: "lt", language: "Lithuanian (lietuvių kalba)", disabled: true },
      { code: "lv", language: "Latvian (latviešu valoda)", disabled: true },
      { code: "nl", language: "Dutch (Nederlands)", disabled: true },
      { code: "no", language: "Norwegian (Norsk)", disabled: true },
      { code: "pl", language: "Polish (język polski)", disabled: true },
      { code: "pt", language: "Portuguese (Português)", disabled: false },
      { code: "ro", language: "Romanian (Română)", disabled: true },
      { code: "ru", language: "Russian (Русский)", disabled: true },
      { code: "sk", language: "Slovak (slovenčina)", disabled: true },
      { code: "sl", language: "Slovene (slovenski jezik)", disabled: true },
      { code: "srCyrl", language: "Serbian (српски језик)", disabled: true },
      { code: "srLatn", language: "Serbian (srpski jezik)", disabled: true },
      { code: "sv", language: "Swedish (svenska)", disabled: true },
      { code: "th", language: "Thai (ไทย)", disabled: true },
      { code: "tr", language: "Turkish (Türkçe)", disabled: true },
      { code: "uk", language: "Ukrainian (Українська)", disabled: true },
      { code: "vi", language: "Vietnamese (Tiếng Việt)", disabled: true },
      { code: "zhHans", language: "Chinese (中文)", disabled: true },
      { code: "zhHant", language: "Chinese (正體中文)", disabled: true },
    ],
  }),
  methods: {
    changeLocale(item) {
      this.$vuetify.lang.current = item.code;
    },
  },
};
</script>

<template>
  <v-app>
    <!--        <v-navigation-drawer app>
          &lt;!&ndash; &ndash;&gt;
        </v-navigation-drawer>-->
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
        <span class="mr-2">Blog</span>
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
        {{ new Date().getFullYear() }} - Copyright &copy; Jackson Kelvin de
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
