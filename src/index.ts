import express, { Request, Response } from "express"

import cors from 'cors'
import { modalityRouter } from "./routes/ModalityRouter"
import { runDB } from "./models/functions/functions"






const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
    
});


runDB()

app.use("/modality", modalityRouter)




  