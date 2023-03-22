import {app} from "./app"
import { compRouter } from "./routes/CompRouter"
import { AthleteRouter } from './routes/AthleteRouter';
app.use('/comp',compRouter)
app.use('/athletes', AthleteRouter)