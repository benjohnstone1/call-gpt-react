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
        enum: ["english", "french", "italian", "spanish", "german"],
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
    desc: "Check the inventory of Nike Vaporfly, Air Max or Pegasus.",
    properties: [
      {
        name: "model",
        type: "String",
        enum: ["vaporfly", "air max", "pegasus"],
        desc: "The model of the Nike shoe",
      },
    ],
    returnObjProperties: [
      {
        name: "stock",
        type: "Int",
        desc: "An integer containing how many of the shoes are in currently in stock.",
      },
    ],
  },
  {
    name: "checkPrice",
    desc: "Check the price of a given Nike shoe.  Shoes include Vaporfly, Air Max and Pegasus.",
    properties: [
      {
        name: "model",
        type: "String",
        enum: ["vaporfly", "air max", "pegasus"],
        desc: "The shoe model, either Vaporfly, Air Max or Pegasus",
      },
    ],
    returnObjProperties: [
      {
        name: "price",
        type: "Int",
        desc: "the price of the shoe",
      },
    ],
  },
  {
    name: "placeOrder",
    desc: "Places an order for a pair of shoes.",
    properties: [
      {
        name: "model",
        type: "String",
        enum: ["vaporfly", "air max", "pegasus"],
        desc: "The shoe model, either Vaporfly, Air Max or Pegasus",
      },
      {
        name: "size",
        type: "Int",
        enum: [],
        desc: "The size of the shoes they want to order",
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
