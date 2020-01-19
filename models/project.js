const projects = [
  {
    name: "Tasty",
    id: "tasty",
    type: "fullstack",
    technology: [
      {
        name: "Django",
        techImgUrl:
          "https://cdn.freebiesupply.com/logos/large/2x/django-logo-png-transparent.png"
      },
      {
        name: "Python",
        techImgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
      }
    ],
    description:
      "Tasty is a project that integrates the use of Django with Python to create an app alike to Yelp that implements class based views! ",
    imgUrl: "https://i.imgur.com/yAn25C6.png"
  },
  {
    name: "WeStream",
    id: "westream",
    type: "fullstack",
    technology: [
      {
        name: "React",
        id: "react-logo",
        techImgUrl: "http://maxehnert.com/app/images/react.svg"
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
      "WeStream is an Full-stack application meant to mimic Youtube's video streaming services! ",
    imgUrl: "https://i.imgur.com/NeCJEHh.png"
  },
  {
    name: "Django Blog",
    id: "django-blog",
    type: "fullstack",
    technology: [
      {
        name: "Django",
        techImgUrl:
          "https://cdn.freebiesupply.com/logos/large/2x/django-logo-png-transparent.png"
      },
      {
        name: "Python",
        techImgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
      }
    ],
    description:
      "This app was created as a project which allows users to creat a profile and create blog posts for others to see!",
    imgUrl: "https://i.ibb.co/Jc5KzCX/Screen-Shot-2020-01-18-at-10-50-21-PM.png"
  },
  {
    name: "Pokedex",
    id: "pokedex",
    type: "Frontend",
    technology: [
      {
        name: "React",
        techImgUrl: "http://maxehnert.com/app/images/react.svg"
      },

      {
        name: "Javascript",
        techImgUrl:
          "https://www.geekstrick.com/wp-content/themes/geekstrick/assets/icons/javascript.svg"
      }
    ],
    description:
      "Frontend project using React and Javascript meant to replicate a Pokedex that implements the use of type ahead text!",
    imgUrl: "https://i.ibb.co/10nxq2Y/Screen-Shot-2020-01-18-at-10-38-23-PM.png"
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
      "Pure Node backend Application that logs out parsed requests to a server and parses data requests",
    imgUrl: ""
  }
];

function getAll() {
  return projects;
}

module.exports = {
  getAll
};
