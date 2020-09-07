export default {
  mode: "universal",
  target: "server",
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
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
    "@/assets/css/main-full.scss",
    "@/assets/css/main-1024.scss",
    "@/assets/css/main-767.scss"
  ],
  plugins: [],
  components: true,
  buildModules: ["@nuxt/typescript-build"],
  modules: [],
  build: {
    transpile: ["reflect-metadata"]
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: "./**/*.{ts,js,vue}"
      }
    }
  }
};
