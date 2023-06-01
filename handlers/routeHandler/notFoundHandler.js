// module scaffolding

const handler = {};

handler.notFoundHandler = (requestedProperties, callback) => {
  console.log(requestedProperties);
  callback(404, {
    message: "Not Found",
  });
};

module.exports = handler;
