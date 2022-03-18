export const getEnv = (req:any) => {
    let env = "PROD";
    if ( req.hostname === "localhost" ) env = "LOCAL";
    return env;
  };