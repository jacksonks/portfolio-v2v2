<script>
import projects from "@/assets/projects.json";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projects",
  data() {
    return {
      overlay: false,
      option: "Todos",
      projects: [],
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
  computed: {
    allProjects() {
      return projects["allProjects"];
    },
    options() {
      return projects["options"];
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
      <v-col cols="12" md="9">
        <span class="display-1">projetos</span>
      </v-col>
      <v-col cols="12" md="3">
        <!--        <v-combobox-->
        <!--        <v-select-->
        <!--        <v-autocomplete-->
        <!--        single-line
        hide-details
        clearable
        dense-->
        <v-autocomplete
          v-model="option"
          :items="options"
          outlined
          menu-props="auto"
          attach
          rounded
          single-line
          hint="Selecione um item para filtrar"
          persistent-hint
          clearable
          @change="filterProjects"
        >
          <!--          <template v-slot:no-data>
            <v-list-item>
              <v-list-item-title>
                Search for your favorite
                <strong>Cryptocurrency</strong>
              </v-list-item-title>
            </v-list-item>
          </template>-->
          <template v-slot:selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :input-value="data.selected"
              :disabled="data.disabled"
              @click:close="data.parent.selectItem(data.item)"
            >
              <img
                v-if="data.item !== 'Todos'"
                class="mr-1"
                height="20px"
                :src="
                  'https://skillicons.dev/icons?i=' + data.item + '&theme=light'
                "
                :alt="option"
              />
              {{ data.item }}
            </v-chip>
          </template>
        </v-autocomplete>
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
          <v-progress-circular indeterminate size="125"></v-progress-circular>
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
            <span v-if="option">
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
            <span v-else>Nenhum item Selecionado.</span>
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
              <div v-if="item.img">
                <v-img
                  v-if="!hover"
                  contain
                  min-height="200px"
                  max-height="200px"
                  :src="item.img"
                  :lazy-src="item.img"
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
                  min-height="200px"
                  max-height="200px"
                  :src="item.img"
                  :lazy-src="item.img"
                  aspect-ratio="10"
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
              </div>
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
                  :src="item.imgs[1].src"
                  :lazy-src="item.imgs[1].src"
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
                            'https://skillicons.dev/icons?i=' +
                            icon +
                            '&theme=light'
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
                <v-btn
                  v-if="item.id === 6"
                  color="black"
                  dark
                  fab
                  text
                  small
                >
                  <v-icon>mdi-cellphone</v-icon>
                </v-btn>
                <v-btn
                  v-if="item.id === 6"
                  color="black"
                  dark
                  fab
                  text
                  small
                >
                  <v-icon>mdi-tablet</v-icon>
                </v-btn>
                <v-btn
                  v-if="item.id === 6"
                  color="black"
                  dark
                  fab
                  text
                  small
                >
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
