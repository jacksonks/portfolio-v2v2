<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projects",
  data() {
    return {
      overlay: false,
      option: "Todos",
      options: [
        "Todos",
        "html",
        "css",
        "jquery",
        "javascript",
        "typescript",
        "vue",
        "vite",
        "vitest",
        "pinia",
        "vuetify",
        "nuxt",
        "electron",
        "react",
        "next",
        "angular",
        "bootstrap",
        "tailwind",
        "nodejs",
        "express",
        "nest",
        "adonis",
        "aws",
        "docker",
        "apollo",
        "graphql",
        "figma",
        "gatsby",
        "git",
        "github",
        "githubactions",
        "gitlab",
        "bitbucket",
        "gulp",
        "webpack",
        "babel",
        "jest",
        "cypress",
        "kubernetes",
        "php",
        "laravel",
        "mongodb",
        "mysql",
        "postgres",
        "prisma",
        "redux",
        "regex",
        "remix",
        "sass",
        "wordpress",
        "postman",
        "npm",
        "pnpm",
        "yarn",
        "jenkins",
        "firebase",
        "python",
        "django",
        "fastapi",
        "nginx",
        "netlify",
        "vercel",
        "sentry",
      ],
      projects: [],
      allProjects: [
        {
          id: 1,
          color: "black",
          title: "cardapio on-line",
          skills: ["html", "css", "jquery", "javascript", "bootstrap"],
          imgs: [
            {
              src: "https://www.frontlee.com.br/cursos/img/cardapio-online-com-whatsapp/card%C3%A1pio%20mobile.jpeg",
            },
            {
              src: "https://www.frontlee.com.br/cursos/img/cardapio-online-com-whatsapp/carrinho%20mobile%20-%20etapa%201.jpeg",
            },
          ],
          img: undefined,
          text: "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
          link: "https://jacksonks.github.io/menu-online-whatsapp-demo/",
          code: "https://github.com/jacksonks/menu-online-whatsapp-demo",
        },
        {
          id: 2,
          color: "black",
          title: "Delivery on-line",
          skills: ["html", "css", "javascript", "vue"],
          imgs: [
            {
              src: "https://frontlee.com.br/cursos/img/ninja-do-delivery/relatorio-faturamento.png",
            },
            {
              src: "https://frontlee.com.br/cursos/img/ninja-do-delivery/cardapio-new.PNG",
            },
          ],
          img: undefined,
          text: "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
          link: "https://jacksonks.github.io/menu-online-whatsapp-demo/",
          code: "https://github.com/jacksonks/menu-online-whatsapp-demo",
        },
        {
          id: 3,
          color: "black",
          title: "Internationalization",
          skills: [
            "html",
            "css",
            "jquery",
            "javascript",
            "typescript",
            "vue",
            "vite",
            "vitest",
            "pinia",
            "vuetify",
            "nuxt",
          ],
          imgs: [],
          img: "https://vueschool.io/storage/media/0aa2cfd06e2b4367c1e140d30639da58/I18N-transparent.png",
          text: "multilingual website and vue.js application with vue-i18n. Vue i18n is the official internationalization library from Vue.js that integrates nicely with any new or existing Vue.js application. With Vue i18n, we can automatically detect and set languages based on the user’s browser or URL. We can easily translate and transform text, numbers, dates, currencies, and so much more.",
          link: "https://jacksonks.github.io/menu-online-whatsapp-demo/",
          code: "https://github.com/jacksonks/menu-online-whatsapp-demo",
        },
        {
          id: 4,
          color: "black",
          title: "menu on-line",
          skills: ["html", "css", "jquery", "javascript", "typescript", "vue"],
          imgs: [
            {
              src: "https://frontlee.com.br/cursos/img/ninja-do-delivery/cardapio-novo.PNG",
            },
            {
              src: "https://frontlee.com.br/cursos/img/ninja-do-delivery/cardapio-novo-produto.PNG",
            },
          ],
          img: undefined,
          text: "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
          link: "https://jacksonks.github.io/menu-online-whatsapp-demo/",
          code: "https://github.com/jacksonks/menu-online-whatsapp-demo",
        },
        {
          id: 5,
          color: "black",
          title: "menu on-line",
          skills: ["html", "css", "jquery", "javascript", "typescript", "vue"],
          imgs: [
            {
              src: "https://frontlee.com.br/cursos/img/cardapio-online-com-whatsapp/banner%20desktop.png",
            },
            {
              src: "https://frontlee.com.br/cursos/img/ninja-do-delivery/cardapio-novo-loja.PNG",
            },
          ],
          img: undefined,
          text: "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
          link: "https://jacksonks.github.io/menu-online-whatsapp-demo/",
          code: "https://github.com/jacksonks/menu-online-whatsapp-demo",
        },
        {
          id: 6,
          color: "black",
          title: "menu on-line",
          skills: ["html", "css", "jquery", "javascript", "typescript", "vue"],
          imgs: [
            {
              src: "https://frontlee.com.br/cursos/img/cardapio-online-com-whatsapp/banner%20desktop.png",
            },
            {
              src: "https://frontlee.com.br/cursos/img/ninja-do-delivery/relatorio-faturamento.png",
            },
          ],
          img: undefined,
          text: "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
          link: "https://jacksonks.github.io/menu-online-whatsapp-demo/",
          code: "https://github.com/jacksonks/menu-online-whatsapp-demo",
        },
        {
          id: 7,
          color: "black",
          title: "menu on-line",
          skills: ["html", "css", "jquery", "javascript", "typescript", "vue"],
          imgs: [
            {
              src: "https://frontlee.com.br/cursos/img/cardapio-online-com-whatsapp/banner%20desktop.png",
            },
            {
              src: "https://frontlee.com.br/cursos/img/ninja-do-delivery/relatorio-faturamento.png",
            },
          ],
          img: undefined,
          text: "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
          link: "https://jacksonks.github.io/menu-online-whatsapp-demo/",
          code: "https://github.com/jacksonks/menu-online-whatsapp-demo",
        },
      ],
    };
  },
  created() {
    this.projects = [...this.allProjects];
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 500);
    },
  },
  methods: {
    async filterProjects() {
      this.overlay = true;
      const updated = [...this.allProjects];
      if (this.option === "Todos") {
        this.projects = [...updated];
      } else {
        this.projects = updated.filter((item) => {
          if (item.skills.find((skill) => skill === this.option)) return item;
        });
      }
      //this.overlay = false;
    },
  },
};
</script>

<template>
  <v-container class="container mx-auto">
    <v-row align="center" justify="center" text="center">
      <v-col cols="6">
        <span class="display-1">projetos</span>
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="option"
          :items="options"
          label="Filtros"
          outlined
          dense
          menu-props="auto"
          hide-details
          attach
          single-line
          @change="filterProjects"
        ></v-select>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
      text="center"
      class="d-flex flex-wrap justify-center align-center"
    >
      <div class="text-center">
        <v-overlay :value="overlay">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
      </div>
      <div v-if="projects.length === 0">
        <v-row
          class="align-center justify-center text-center"
          align="center"
          justify="center"
        >
          <v-col
            class="text-center align-center justify-center"
            justify="center"
            align-self="center"
          >
            <span>
              Nenhum projeto com
              <strong>{{ option }}</strong>
              <br />
              <br />
              <img
                class="mr-1"
                height="50px"
                :src="
                  'https://skillicons.dev/icons?i=' + option + '&theme=light'
                "
                :alt="option"
              />
            </span>
          </v-col>
        </v-row>
      </div>
      <div class="pa-3" v-for="(item, i) in projects" :key="i">
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
              <v-img
                v-if="!hover"
                contain
                min-height="200px"
                max-height="200px"
                :src="item.img ? item.img : item.imgs[0].src"
                :lazy-src="item.img ? item.img : item.imgs[0].src"
                aspect-ratio="1"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
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
                :src="item.img ? item.img : item.imgs[1].src"
                :lazy-src="item.img ? item.img : item.imgs[1].src"
                aspect-ratio="1"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-card-title
                class="primary--text text-center align-center justify-center"
              >
                {{ item.title }}
              </v-card-title>
              <v-card-subtitle>
                <v-row align="center" justify="center" text="center">
                  <div v-for="(icon, key) in item.skills" :key="key">
                    <img
                      class="mr-1"
                      height="25px"
                      :src="
                        'https://skillicons.dev/icons?i=' +
                        icon +
                        '&theme=light'
                      "
                      :alt="icon"
                    />
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
                  Visualizar projeto
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
      </div>
    </v-row>
  </v-container>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
