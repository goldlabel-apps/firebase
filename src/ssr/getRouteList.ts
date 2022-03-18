// import axios from "axios";
export const getRouteList = (req:any, env:string): string => {
  let baseURL;
  switch ( env ) {
    case "LOCAL":
      baseURL = "http://localhost:5001/listingslab-app/us-central1/SSR";
      break;
    default:
      baseURL = "https://listingslab.com";
  }
  const mdArr = [
    {
      title: "Work",
      excerpt: "please forgive me.",
      icon: "markdown",
      url: baseURL + "/work",
      slug: "forgive",
      image: "https://lisitngslab.com/jpg/defaultSq.jpg",
    },
    {
      title: "Life",
      excerpt: "young padwan.",
      icon: "markdown",
      url: baseURL + "/life",
      slug: "padwan",
      image: "https://lisitngslab.com/jpg/defaultSq.jpg",
    },
    {
      title: "Balance",
      excerpt: "young padwan.",
      icon: "markdown",
      url: baseURL + "/balance",
      slug: "padwan",
      image: "https://lisitngslab.com/jpg/defaultSq.jpg",
    },
  ];

  let mdHtml = "<ul>";
  for (let i=0; i < mdArr.length; i++) {
    mdHtml += "<li>";
    mdHtml += "<a href='" + mdArr[i].url + "'>";
    mdHtml += mdArr[i].title;
    mdHtml += "</a>&nbsp;";
    // mdHtml += mdArr[i].excerpt;
    // mdHtml += "<br />";
    // mdHtml += mdArr[i].url;
    mdHtml += "</li>";
  };
  mdHtml += "</ul>";

  return mdHtml;
};
