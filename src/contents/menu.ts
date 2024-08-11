const menu = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Pages",
    subMenu: [
      {
        id: 3.1,
        title: "Services",
        url: "/service",
      },
      {
        id: 3.2,
        title: "Quality Standard",
        url: "/quality",
      },
      {
        id: 3.3,
        title: "Portfolio Standard",
        url: "/portfolio",
      },
      {
        id: 3.4,
        title: "Our Team",
        url: "/team",
      },
    ],
  },
  {
    id: 4,
    title: "Shop",
    url: "/shop",
  },
  {
    id: 5,
    title: "Projects",
    url: "/projects",
  },
  {
    id: 6,
    title: "News",
    url: "/news",
  },
];

export default menu;
