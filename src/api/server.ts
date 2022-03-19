/* eslint max-len: "off",@typescript-eslint/ban-ts-comment: "off",  @typescript-eslint/explicit-module-boundary-types: "off" */
// @ts-nocheck
import express from "express";
import cors from "cors";
import { endpointRouter } from "./endpointRouter";

// import * as admin from "firebase-admin";
// import { serviceAccount } from "../serviceAccountKey";
// admin.initializeApp({
//   projectId: serviceAccount.project_id,
//   credential: admin.credential.cert(serviceAccount),
// });
// const db = admin.firestore();

export const server = ():any => {
  const API = express();
  API.use(cors({origin: true}));
  API.all("**", async (req:any, res:any) => {
    endpointRouter(req, res, db);
  });
  return API;
};
