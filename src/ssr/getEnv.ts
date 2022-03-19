/* eslint max-len: "off",@typescript-eslint/ban-ts-comment: "off",  @typescript-eslint/explicit-module-boundary-types: "off" */
// @ts-nocheck
export const getEnv = (req:any): string => {
  let env = "PROD";
  if ( req.hostname === "localhost" ) env = "LOCAL";
  return env;
};
