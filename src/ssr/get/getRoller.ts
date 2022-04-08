export const getRoller = (req, env): any => {
  let baseURL;
  const pathname = req.params[0];


  switch ( env ) {
    case "LOCAL":
      baseURL = "http://localhost:5001/listingslab-app/us-central1/SSR";
      break;
    default:
      baseURL = "https://listingslab.com";
  }

  return {
    baseURL,
    pathname,
    focussed:{
      title: "Focussed content",
    },
    context: [
      {
        title: "Context One",
      },
      {
        title: "Context Two",
      },
    ],
  };
};
