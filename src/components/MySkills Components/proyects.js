const proyectos = {
  css: [
    "RutinasGim",
    "CV-Online",
    "App-Web-Presupuesto",
    "Login",
    "ToDo-App",
    "Portfolio",
  ],
  sass: [],
  bootstrap: [
    "RutinasGim",
    "CV-Online",
    "App-Web-Presupuesto",
    "Login",
    "ToDo-App",
    "Portfolio"
  ],
  html: [
    "RutinasGim",
    "CV-Online",
    "App-Web-Presupuesto",
    "Login",
    "ToDo-App",
    "Portfolio",
  ],
  python: ["PresupuestoEscritorio"],
  java: [],
  js: [
    "RutinasGim",
    "CV-Online",
    "App-Web-Presupuesto",
    "Login",
    "ToDo-App",
    "Portfolio",
  ],
  react: ["Portfolio"],
  vue: ["login", "ToDo-App"],
  canva: [],
  figma: [],
  mysql: [],
  mongo: [],
  sqlite: ["PresupuestoEscritorio"],
  docker: ["login"],
  git: [],
  github: [],
  office: [],
};

function listar(name){
  for (var property in proyectos){
    if (property === name){
      return proyectos[property]
    }
  }
}

export default listar