const express = require("express");

PORT = 3000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "connected",
  });
});

function main() {
  app.listen(PORT, () => {
    console.log("Server is listening on port : 3000");
  });
}

// SIMPLE REQUEST
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   next();
// });

// app.get("/user", (req, res) => {
//   return res.status(200).json({
//     success: true,
//     message: "USERS",
//   });
// });

// PREFLIGHT REQUEST
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

//   next();
// });

// app.put("/update", (req, res) => {
//   return res.status(200).json({
//     success: true,
//     message: "USERS UPDATED",
//   });
// });

// CREDENTIALS REQUEST
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", "true");

  next();
});

app.get("/cred", (req, res) => {
  const token = req.headers["authorization"];

  return res.status(200).json({
    success: true,
    message: "USER WITH CREDENTIALS",
    token: token,
  });
});

main();
