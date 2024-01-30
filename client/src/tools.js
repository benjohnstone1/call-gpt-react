const sampleFunctions = [
  // {
  //   name: "sendToFlex",
  //   desc: "If user wants to speak with a human agent or if you don't understand the request after trying to clarify multiple times",
  //   properties: [
  //     {
  //       name: "language",
  //       type: "String",
  //       enum: ["english", "french", "italian", "spanish"],
  //       desc: "The types of languages the user could want to converse in",
  //     },
  //   ],
  //   returnObjProperties: [
  //     {
  //       name: "locale",
  //       type: "String",
  //       desc: "The language locale that should be returned",
  //     },
  //   ],
  // },
  {
    name: "checkLanguage",
    desc: "Check the language used in the conversation to know how to reply to the user, the user may choose to switch languages during the conversation",
    properties: [
      {
        name: "language",
        type: "String",
        enum: ["english", "french", "italian", "spanish"],
        desc: "The types of languages the user could want to converse in",
      },
    ],
    returnObjProperties: [
      {
        name: "locale",
        type: "String",
        desc: "The language locale that should be returned",
      },
    ],
  },
  {
    name: "checkInventory",
    desc: "Check the inventory of airpods, airpods pro or airpods max.",
    properties: [
      {
        name: "model",
        type: "String",
        enum: ["airpods", "airpods pro", "airpods max"],
        desc: "The model of airpods, either the airpods, airpods pro or airpods max",
      },
    ],
    returnObjProperties: [
      {
        name: "stock",
        type: "Int",
        desc: "An integer containing how many of the model are in currently in stock.",
      },
    ],
  },
  {
    name: "checkPrice",
    desc: "Check the price of given model of airpods, airpods pro or airpods max.",
    properties: [
      {
        name: "model",
        type: "String",
        enum: ["airpods", "airpods pro", "airpods max"],
        desc: "The model of airpods, either the airpods, airpods pro or airpods max",
      },
    ],
    returnObjProperties: [
      {
        name: "price",
        type: "Int",
        desc: "the price of the model",
      },
    ],
  },
  {
    name: "placeOrder",
    desc: "Places an order for a set of airpods.",
    properties: [
      {
        name: "model",
        type: "String",
        enum: ["airpods", "airpods pro", "airpods max"],
        desc: "The model of airpods, either the airpods, airpods pro or airpods max",
      },
      {
        name: "quantity",
        type: "Int",
        enum: [],
        desc: "The number of airpods they want to order",
      },
    ],
    returnObjProperties: [
      {
        name: "price",
        type: "Int",
        desc: "The total price of the order including tax",
      },
      {
        name: "orderNumber",
        type: "Int",
        desc: "The order number associated with the order.",
      },
    ],
  },
];

export default sampleFunctions;
