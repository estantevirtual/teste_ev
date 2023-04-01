import {app} from "./app"
import { cemMRouter } from "./routes/100mRouter"
import { dardosRouter } from "./routes/DardosRouter"
app.use("/cemrasos", cemMRouter)
app.use("/dardos", dardosRouter)