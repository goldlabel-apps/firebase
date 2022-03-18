export const getEnv = (req:any): string => {
  let env = "PROD";
  if ( req.hostname === "localhost" ) env = "LOCAL";
  return env;
};
