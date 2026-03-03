<script>
import projects from "@/assets/projects.json";
import ProjectsCard from "@/components/Projects/ProjectsCard.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projects",
  components: { ProjectsCard },
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
  mounted() {
    //rota+vue
    console.log("query", this.$route.query?.q);
    if (!this.$route.query?.q) {
      return;
    }
    this.option = this.$route.query.q;
    this.filterProjects();
    this.$router.replace({ query: {} }).catch(() => {});
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
          <template v-slot:item="data">
            <template>
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
            </template>
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
      <div class="pa-3" v-for="(project, i) in projects" :key="i">
        <projects-card :item="project"></projects-card>
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