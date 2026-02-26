export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Committed to writing clean, maintainable code and learning continuously.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "I’ve worked across global teams and adapt easily to distributed schedules.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Constantly Evolving and Adapting!",
    className: "lg:col-span-2 lg:row-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for web development.",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning Kubernetes and diving into DevOps",
    description: "The Inside Scoop",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 w-[60%] h-[80%]",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Interested in working together? Email me!",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const myProjects = [
  {
    id: 1,
    title: "Share Your Moments",
    des: "An image sharing app where user can perform CRUD operations on posts.",
    img: "/p1.png",
    iconLists: [
      "/re.svg",
      "/nodejs.png",
      "/express.png",
      "/mongo.png",
      "/jwt.png",
    ],
    link: "https://github.com/anushkadubey/Share-Your-Moments",
  },
  {
    id: 2,
    title: "Twitter Bot",
    des: "Node JS based Twitter Bot that tweets links to news with specific keywords using Twitter API.",
    img: "/p2.png",
    iconLists: ["/nodejs.png", "/twitterAPI.png", "/gNews.png"],
    link: "https://github.com/anushkadubey/Twitter-Bot",
  },
  {
    id: 3,
    title: "NewsMan - News App",
    des: "ReactJS based app built using News API to display news based on category.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/nodejs.png", "newsAPI.png", "/bootstrap.png"],
    link: "https://github.com/anushkadubey/NewsWeb",
  },
  {
    id: 4,
    title: "Microsoft Teams UI Clone",
    des: "Recreated Microsoft Team's UI using React JS and CSS.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/css.png"],
    link: "https://github.com/anushkadubey/Microsoft-Teams-Clone",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Lowe's India",
    desc: "Led secure third-party domain integration solutions and enhanced platform observability with Prometheus & Grafana monitoring, while establishing comprehensive test automation frameworks.",
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "Associate Software Engineer",
    company: "Lowe's India",
    desc: "Designed reusable React component library adopted across 3+ projects and optimized UX, reducing invalid submissions by 22% while achieving 80%+ JEST test coverage.",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Computer Engineering Intern",
    company: "Wabtec Corporation",
    desc: "Built responsive data-driven dashboard transforming Excel-based inventory and simulation data into interactive operational insights for train testing environments.",
    thumbnail: "/exp1.svg",
  },
  {
    id: 4,
    title: "Searching for new opportunities",
    company: "Open to Work",
    desc: "Motivated by roles where I can take ownership of meaningful problems, contribute to well-structured and thoughtfully designed systems, and be part of a team that cares about building reliable, high-quality products. ",
    thumbnail: "/searching.gif",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/anushkadubey",
  },
  {
    id: 2,
    img: "/leetcode.png",
    link: "https://leetcode.com/u/noosh06/",
  },
  {
    id: 3,
    img: "/linkedin.svg",
    link: "https://www.linkedin.com/in/anushka16dubey/",
  },
];
