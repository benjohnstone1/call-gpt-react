import { Theme } from "@twilio-paste/core/theme";
import React, { useState } from "react";

import { Heading } from "@twilio-paste/core/heading";
import { Box } from "@twilio-paste/core/box";

import { Form, FormControl } from "@twilio-paste/core/form";
import { Input } from "@twilio-paste/core/input";
import { Label } from "@twilio-paste/core/label";
import { HelpText } from "@twilio-paste/core/help-text";
import { Paragraph } from "@twilio-paste/core/paragraph";

import { Select, Option } from "@twilio-paste/core/select";
import { TextArea } from "@twilio-paste/core/textarea";

import "../styles/Hackathon.css";

// Components
import FunctionManifest from "./FunctionManifest";

const Hackathon = () => {
  const [systemContext, setSystemContext] = useState("");
  const [initialGreeting, setInitialGreeting] = useState("");
  const [languageSettings, setLanguageSettings] = useState("");
  const [template, setTemplate] = useState("Custom");

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
    if (e.target.value === "Apple Airpods") {
      setSystemContext(
        "You are an outbound sales representative selling Apple Airpods. You have a youthful and cheery personality. Keep your responses short and try to get them to purchase apple airpods."
      );
      setInitialGreeting("Guten Tag! Wie kann ich dir helfen?");
      setLanguageSettings("German");
    } else if (e.target.value === "Nike Shoes") {
      setSystemContext(
        "You are a customer support representative for Nike. You have a youthful and cheery personality. Keep your responses as brief as possible but make every attempt to keep the caller on the phone without being rude. Don't ask more than 1 question at a time. Don't make assumptions about what values to plug into functions. Ask for clarification if a user request is ambiguous. Speak out all prices to include the currency. Please help them decide between the Vaporfly, Air Max and Pegasus by asking questions like 'Do you prefer shoes that are for racing or for training?'. If they are trying to choose between the vaporfly and pegasus try asking them if they need a high mileage shoe. Once you know which shoe they would like ask them what size they would like to purchase and try to get them to place an order. You must add a '•' symbol every 5 to 10 words at natural pauses where your response can be split for text to speech."
      );
      setInitialGreeting("Bonjour");
      setLanguageSettings("English & French");
    } else {
      setSystemContext("");
      setInitialGreeting("");
      setLanguageSettings("");
    }
  };

  return (
    <Theme.Provider theme="Twilio">
      <Box>
        <Form maxWidth="size70">
          <Box display="flex" flexDirection="column">
            <Heading as="h2" variant="heading20">
              AI Agent Settings
            </Heading>
            <Paragraph marginBottom="space0">
              This information will be used to create your AI Agent. Give your
              AI Agent assistant a name and a personality.
            </Paragraph>
          </Box>

          <FormControl>
            <Label htmlFor="author" required>
              Select an Agent Template
            </Label>
            <Select
              id={"template"}
              value={template}
              onChange={(e) => handleTemplateChange(e)}
            >
              <Option value="Apple Airpods">Apple Airpods</Option>
              <Option value="Nike Shoes">Nike Shoes</Option>
              <Option value="Custom">Custom</Option>
            </Select>
          </FormControl>
          <FormControl>
            <Label htmlFor="aiPrompt" required>
              Agent Persona
            </Label>
            <TextArea
              id="systemContext"
              value={systemContext}
              onChange={() => {}}
              aria-describedby="message_help_text"
              name="aiPrompt"
              resize="vertical"
              maxRows={15}
              required
            />
            <HelpText id="aiPrompt_help_text">
              Describe your agent in detail
            </HelpText>
          </FormControl>
          <FormControl>
            <Label htmlFor="languageSettings" required>
              Languge Settings
            </Label>
            <Input
              type="text"
              id="languageSettings"
              value={languageSettings}
              onChange={(e) => setLanguageSettings(e.target.value)}
              name="input3"
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="initialGreeting" required>
              Initial Agent Greeting
            </Label>
            <TextArea
              id="initialGreeting"
              name="initialGreeting"
              value={initialGreeting}
              onChange={(e) => setInitialGreeting(e.target.value)}
              maxRows={5}
              required
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="function_generator">Actions Settings</Label>

            <FunctionManifest
              initialGreeting={initialGreeting}
              systemContext={systemContext}
              languageSettings={languageSettings}
            />
          </FormControl>
        </Form>
      </Box>
    </Theme.Provider>
  );
};

export default Hackathon;
