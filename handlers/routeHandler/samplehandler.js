// module scaffolding
const handler = {};

handler.sampleHandler = (requestedProperties, callback) => {
  console.log(requestedProperties);
  callback(200, {
    message: "It is Sample handler page",
  });
};
module.exports = handler;
