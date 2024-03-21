const sampleFunctions = [
  {
    name: "checkLanguage",
    retell_name: "check_language",
    desc: "checking the language used in the conversation to know how to reply to the user, the user may choose to switch languages during the conversation",
    properties: [
      {
        name: "language",
        type: "string",
        enum: ["english", "french", "italian", "spanish", "german"],
        desc: "The types of languages the user could want to converse in",
      },
    ],
    returnObjProperties: [
      {
        name: "locale",
        type: "string",
        desc: "The language locale that should be returned",
      },
    ],
  },
  {
    name: "checkInventory",
    retell_name: "check_inventory",
    desc: "checking the inventory of Nike Vaporfly, Air Max or Pegasus.",
    properties: [
      {
        name: "model",
        type: "string",
        enum: ["vaporfly", "air max", "pegasus"],
        desc: "The model of the Nike shoe",
      },
    ],
    returnObjProperties: [
      {
        name: "stock",
        type: "int",
        desc: "An integer containing how many of the shoes are in currently in stock.",
      },
    ],
  },
  {
    name: "checkPrice",
    retell_name: "check_price",
    desc: "checking the price of a given Nike shoe. Shoes include Vaporfly, Air Max and Pegasus.",
    properties: [
      {
        name: "model",
        type: "string",
        enum: ["vaporfly", "air max", "pegasus"],
        desc: "The shoe model, either Vaporfly, Air Max or Pegasus",
      },
    ],
    returnObjProperties: [
      {
        name: "price",
        type: "int",
        desc: "the price of the shoe",
      },
    ],
  },
  {
    name: "placeOrder",
    retell_name: "place_order",
    desc: "placing an order for a pair of shoes.",
    properties: [
      {
        name: "model",
        type: "string",
        enum: ["vaporfly", "air max", "pegasus"],
        desc: "The shoe model, either Vaporfly, Air Max or Pegasus",
      },
      // {
      //   name: "size",
      //   type: "int",
      //   enum: [],
      //   desc: "The size of the shoes they want to order",
      // },
    ],
    returnObjProperties: [
      {
        name: "price",
        type: "int",
        desc: "The total price of the order including tax",
      },
      {
        name: "orderNumber",
        type: "int",
        desc: "The order number associated with the order.",
      },
    ],
  },
];

export default sampleFunctions;
