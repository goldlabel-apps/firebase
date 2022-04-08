export const getRoller = (req:any, env:string): any => {
  let baseURL;
  switch ( env ) {
    case "LOCAL":
      baseURL = "http://localhost:5001/listingslab-app/us-central1/SSR";
      break;
    default:
      baseURL = "https://listingslab.com";
  }
  return {
    baseURL,
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
