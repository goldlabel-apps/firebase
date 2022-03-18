import axios from "axios";
export const getMdList = (req:any, env:string): string => {
  let baseURL;
  switch ( env ) {
    case "LOCAL":
      baseURL = "http://localhost:2022";
      break;
    default:
      baseURL = "https://listingslab.com";
  }
  const endpoint = baseURL + "/files.json";

  axios.get(endpoint)
          .then(response => {
            return "response.data" + response.data.toString();
          })
          .catch(error => {
            return error;
          })

  return "not done yet";

  // const mdArr = [
  //   {
  //     title: "If the day comes that I have to kill you,",
  //     excerpt: "please forgive me.",
  //     icon: "markdown",
  //     url: baseURL + "/forgive",
  //     slug: "forgive",
  //     image: "https://lisitngslab.com/jpg/defaultSq.jpg",
  //   },
  //   {
  //     title: "Choose your path,",
  //     excerpt: "young padwan.",
  //     icon: "markdown",
  //     url: baseURL + "/padwan",
  //     slug: "padwan",
  //     image: "https://lisitngslab.com/jpg/defaultSq.jpg",
  //   },
  // ];

  
  // let mdHtml = "<ul>";
  // for (let i=0; i < mdArr.length; i++) {
  //   mdHtml += "<li>";
  //   mdHtml += "<a href='" + mdArr[i].url + "'>";
  //   mdHtml += mdArr[i].title;
  //   mdHtml += "</a>&nbsp;";
  //   mdHtml += mdArr[i].excerpt;
  //   // mdHtml += "<br />";
  //   // mdHtml += mdArr[i].url;
  //   mdHtml += "</li>";
  // };
  // mdHtml += "</ul>";

  // return mdHtml;
};
