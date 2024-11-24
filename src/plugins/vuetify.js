// src/plugins/vuetify.js
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

// Translation provided by Vuetify (javascript)
import pt from "vuetify/lib/locale/pt";
import en from "vuetify/lib/locale/pt";
// Translation provided by Vuetify (typescript)
// import pl from 'vuetify/src/locale/pl'
// Your own translation file
// import sv from './i18n/vuetify/sv'

const opts = {
  lang: {
    locales: { en, pt },
    current: "pt",
  },
  icons: {
    iconfont: "mdi",
  },
  theme: {
    dark: false,
    //light: true,
    default: "light",
    disable: false,
    options: {
      cspNonce: undefined,
      customProperties: undefined,
      minifyTheme: undefined,
      themeCache: undefined,
    },
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
      },
      dark: {
        primary: "#2196F3",
        secondary: "#424242",
        accent: "#FF4081",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
      },
    },
  },
};

export default new Vuetify(opts);
