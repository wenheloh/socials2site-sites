export default {
  mode: "universal",
  target: "server",
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,width=device-width,user-scalable=no"
        // content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }
    ]
  },
  css: [
    "@/assets/css/main.scss"
  ],
  plugins: [],
  components: true,
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],
  modules: ["@nuxtjs/recaptcha"],
  build: {
    transpile: ["reflect-metadata"]
  },
  server: {
    host: "0.0.0.0"
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: "./**/*.{ts,js,vue}"
      }
    }
  },
  recaptcha: {
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: "6LfdsdgZAAAAAHwBWrO1kMXkcVafSPIGPqj0RHO6", // Site key for requests
    version: 3, // Version
    size: "invisible" // Size: 'compact', 'normal', 'invisible' (v2)
  },
};
