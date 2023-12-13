import express from "express";
import cors from "cors";
import UserRoute from "./Route/UserRoute.js";
import partnersRouter from "./Route/PartnerRoute.js";
import doctorRouter from "./Route/DoctorRoute.js";
import appointmentsRouter from "./Route/AppointmentRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(partnersRouter);
app.use(doctorRouter);
app.use(appointmentsRouter);
const corsOptions = {
  origin: "https://backend-express-production-3d26.up.railway.app", // replace with your frontend's domain
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // enable credentials (cookies, authorization headers, etc.)
};

app.get("/", cors(corsOptions), (req, res) => {
  // Your specific route handler logic goes here
  res.send("Hello from specific route!");
});
const port = 3001;

app.listen(port, () =>
  console.log(`Server berjalan di http://localhost:${port}`)
);
