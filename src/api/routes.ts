/* eslint-disable max-len */
export const routes = {
  id: "root",
  title: "Home",
  icon: "home",
  pathname: "/",
  component: "Home",
  children: [
    {
      title: "Work",
      icon: "work",
      pathname: "/work/",
      component: "Markdown",
      file: "/work.md",
    },
    {
      title: "Life",
      icon: "life",
      pathname: "/life/",
      component: "Markdown",
      file: "/life.md",
    },
    {
      title: "Balance",
      icon: "balance",
      pathname: "/balance/",
      component: "Markdown",
      file: "/balance.md",
    },
  ],
};
