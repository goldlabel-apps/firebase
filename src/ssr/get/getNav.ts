// import axios from "axios";
export const getNav = (req:unknown, env:string): string => {
  let baseURL;
  switch ( env ) {
    case "LOCAL":
      baseURL = "http://localhost:5001/listingslab-app/us-central1/SSR";
      break;
    default:
      baseURL = "https://listingslab.com";
  }
  const nav = [
    {
      title: "Work?",
      excerpt: "please forgive me.",
      icon: "markdown",
      url: baseURL + "/work",
      slug: "forgive",
      image: "https://lisitngslab.com/jpg/defaultSq.jpg",
    },
    {
      title: "Life?",
      excerpt: "young padwan.",
      icon: "markdown",
      url: baseURL + "/life",
      slug: "padwan",
      image: "https://lisitngslab.com/jpg/defaultSq.jpg",
    },
    {
      title: "Balance.",
      excerpt: "young padwan.",
      icon: "markdown",
      url: baseURL + "/balance",
      slug: "padwan",
      image: "https://lisitngslab.com/jpg/defaultSq.jpg",
    },
  ];

  let html = "<nav><ul>";
  for (let i=0; i < nav.length; i++) {
    html += "<li>";
    html += "<a href='" + nav[i].url + "'>";
    html += nav[i].title;
    html += "</a>&nbsp;";
    html += "</li>";
  }
  html += "</ul></nav>";

  return html;
};
