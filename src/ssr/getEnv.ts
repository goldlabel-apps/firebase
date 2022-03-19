export const getEnv = (req:unknown): string => {
  let env = "PROD";
  if ( req.hostname === "localhost" ) env = "LOCAL";
  return env;
};
