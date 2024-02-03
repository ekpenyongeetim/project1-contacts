// install and require swagger autogen
const swaggerAutogen = require("swagger-autogen")();

// create a doc info ans doc header
const doc = {
  info: {
    title: "My API",
    description: "Temple API",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
