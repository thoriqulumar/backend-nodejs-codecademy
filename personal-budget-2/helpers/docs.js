const express = require("express");
const router = express.Router();
const swagger = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Portfolio Budget II",
        version: "1.0.0",
        description:
          "Simple backend API to manage portfolio budget using an envelope budgeting method. Built with Postgresql, Express, and Node.",
        license: {
          name: "MIT",
          url: "https://choosealicense.com/licenses/mit/",
        },
      },
    },
    apis: ["./routes/envelopes.js", "./routes/transactions.js"],
  };
  const specs = swagger(swaggerOptions);
  
  router.use("/", swaggerUi.serve);
  router.get(
    "/",
    swaggerUi.setup(specs, {
      explorer: true,
    })
  );
  
  module.exports = router;