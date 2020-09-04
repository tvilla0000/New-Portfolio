let projects = [
  {
    name: "Tasty",
    id: "tasty",
    type: "Frontend & Backend",
    technology: [
      {
        name: "Django",
        techImgUrl:
          "https://gitlab.com/uploads/-/system/project/avatar/3692106/django.png"
      },
      {
        name: "Python",
        techImgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
      },
      {
        name: "PostgreSQL",
        techImgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
      }
    ],
    description:
      "Tasty is a project that integrates the use of Django with Python to create an app alike to Yelp that implements class based views! ",
    imgUrl: "https://i.imgur.com/yAn25C6.png"
  },
  {
    name: "Supe API",
    id: "supe",
    type: "Frontend",
    technology: [
      {
        name: "React",
        techImgUrl:
          "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
      },
      {
        name: "Javascript",
        techImgUrl:
          "https://www.geekstrick.com/wp-content/themes/geekstrick/assets/icons/javascript.svg"
      }
    ],
    description:
      "Tasty is a project that integrates the use of Django with Python to create an app alike to Yelp that implements class based views! ",
    imgUrl: "https://i.imgur.com/TgFOa5V.png"
  },
  {
    name: "WeStream",
    id: "westream",
    type: "Fullstack",
    technology: [
      {
        name: "React",
        techImgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
      },
      {
        name: "Node",
        techImgUrl: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
      },
      {
        name: "Javascript",
        techImgUrl:
          "https://www.geekstrick.com/wp-content/themes/geekstrick/assets/icons/javascript.svg"
      }
    ],
    description:
      "WeStream is an Full-stack application meant which implements Youtube's Data API to mimic its streaming services!",
    imgUrl: "https://i.imgur.com/NeCJEHh.png"
  },
  {
    name: "Django Blog",
    id: "django-blog",
    type: "Frontend & Backend",
    technology: [
      {
        name: "Django",
        techImgUrl:
          "https://gitlab.com/uploads/-/system/project/avatar/3692106/django.png"
      },
      {
        name: "Python",
        techImgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
      },
      {
        name: "PostgreSQL",
        techImgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
      }
    ],
    description:
      "This app was created as a project which allows users to create a profile and create blog posts for others to see!",
    imgUrl: "https://i.ibb.co/Jc5KzCX/Screen-Shot-2020-01-18-at-10-50-21-PM.png"
  },

  {
    name: "Node",
    id: "node-master",
    type: "Backend",
    technology: [
      {
        name: "Node",
        techImgUrl: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
      }
    ],
    description:
      "Pure Node backend Application that logs out parsed requests to a server in the console and parses data requests!",
    imgUrl: ""
  }
];

// Grab all projects and export them
const getAll = () => {
  return projects;
};

// Filter out projects based on type
const isFrontend = projects.filter(x => {
  return x.type === "Frontend" || x.type === "Frontend & Backend";
});

const isBackend = projects.filter(x => {
  return x.type === "Backend" || x.type === "Frontend & Backend";
});

const isFullstack = projects.filter(x => {
  return x.type === "Fullstack";
});

const recentProjects = projects.filter(x => {
  return x.name === "WeStream" || x.name === "Supe API" || x.name === "Tasty";
});

const getAllFrontend = () => {
  return isFrontend;
};

const getAllBackend = () => {
  return isBackend;
};

const getAllFullstack = () => {
  return isFullstack;
};

const getRecent = () => {
  return recentProjects;
};

module.exports = {
  getAll,
  getAllFrontend,
  getAllBackend,
  getAllFullstack,
  getRecent
};
