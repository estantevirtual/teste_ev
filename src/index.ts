import { app } from "./app";
import { competitionRouter } from "./router/CompetitionsRouter";

app.use("/competitions", competitionRouter);
app.use("/athletes", competitionRouter);
