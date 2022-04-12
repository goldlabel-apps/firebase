const serviceAccount = require( "./service_account.json" );
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require( 'express' )
const cors = require( 'cors' )
const { ssr } = require( './func_ssr/ssr.js' )

admin.initializeApp({
    projectId: serviceAccount.project_id,
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express()
app.use(cors({ origin: true }))
app.all('**', async (req, res) => {
    const html = ssr();
    res.status(200).send(html);
})

exports.SSR = functions.https.onRequest(app)