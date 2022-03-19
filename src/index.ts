import pJSON from "../package.json";
import {serviceAccount} from "./serviceAccountKey";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import make from "./ssr/make";

import {showAPI} from "./api/showAPI";

console.warn(pJSON.name + " vs " + pJSON.version);

admin.initializeApp({
  projectId: serviceAccount.project_id,
  // credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const SSR = express();
SSR.use(cors({origin: true}));
SSR.get("*", (req:any, res:any) => {
  res.status(200).send(make(req, db));
});

exports.SSR = functions.https.onRequest(SSR);
exports.API = functions.https.onRequest(showAPI);