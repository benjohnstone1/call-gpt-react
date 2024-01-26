const sampleFunctions = [
  {
    name: "sendToFlex",
    desc: "If user wants to speak with a human agent or if you don't understand the request after trying to clarify multiple times",
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

const tools = [
  {
    type: "function",
    function: {
      name: "sendToFlex",
      description:
        "If user wants to speak with a human agent or if you don't understand the request after trying to clarify multiple times",
      parameters: {
        type: "object",
        properties: {
          language: {
            type: "string",
            enum: ["english", "french", "italian", "spanish"],
            description:
              "The types of languages the user coule want to converse in",
          },
        },
        required: ["language"],
      },
      returns: {
        type: "object",
        properties: {
          locale: {
            type: "string",
            description: "Flex id",
          },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "checkLanguage",
      description:
        "Check the language used in the conversation to know how to reply to the user, the user may choose to switch languages during the conversation",
      parameters: {
        type: "object",
        properties: {
          language: {
            type: "string",
            enum: ["english", "french", "italian", "spanish"],
            description:
              "The types of languages the user could want to converse in",
          },
        },
        required: ["language"], //need to get a value before calling it
      },
      returns: {
        type: "object",
        properties: {
          locale: {
            type: "string",
            description: "The language locale that should be returned",
          },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "checkInventory",
      description:
        "Check the inventory of airpods, airpods pro or airpods max.",
      parameters: {
        type: "object",
        properties: {
          model: {
            type: "string",
            enum: ["airpods", "airpods pro", "airpods max"],
            description:
              "The model of airpods, either the airpods, airpods pro or airpods max",
          },
        },
        required: ["model"],
      },
      returns: {
        type: "object",
        properties: {
          stock: {
            type: "integer",
            description:
              "An integer containing how many of the model are in currently in stock.",
          },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "checkPrice",
      description:
        "Check the price of given model of airpods, airpods pro or airpods max.",
      parameters: {
        type: "object",
        properties: {
          model: {
            type: "string",
            enum: ["airpods", "airpods pro", "airpods max"],
            description:
              "The model of airpods, either the airpods, airpods pro or airpods max",
          },
        },
        required: ["model"],
      },
      returns: {
        type: "object",
        properties: {
          price: {
            type: "integer",
            description: "the price of the model",
          },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "placeOrder",
      description: "Places an order for a set of airpods.",
      parameters: {
        type: "object",
        properties: {
          model: {
            type: "string",
            enum: ["airpods", "airpods pro"],
            description: "The model of airpods, either the regular or pro",
          },
          quantity: {
            type: "integer",
            description: "The number of airpods they want to order",
          },
        },
        required: ["type", "quantity"],
      },
      returns: {
        type: "object",
        properties: {
          price: {
            type: "integer",
            description: "The total price of the order including tax",
          },
          orderNumber: {
            type: "integer",
            description: "The order number associated with the order.",
          },
        },
      },
    },
  },
];

console.log(tools);
