import { Theme } from "@twilio-paste/core/theme";
import React, { useState } from "react";

import { Heading } from "@twilio-paste/core/heading";
import { Box } from "@twilio-paste/core/box";

import { Form, FormControl } from "@twilio-paste/core/form";
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
  const [initialLanguage, setInitialLanguage] = useState("en");
  const [initialVoice, setInitialVoice] = useState("TxGEqnHWrfWFTfGW9XjX");
  // const [languageSettings, setLanguageSettings] = useState("");
  const [template, setTemplate] = useState("Custom");
  const [server, setServer] = useState("Multi");
  const [showComponent, setShowComponent] = useState(true);

  const handleServerChange = (e) => {
    setServer(e.target.value);
    if (e.target.value === "Multi") {
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
  };

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
    if (e.target.value === "Apple Airpods") {
      setSystemContext(
        "You are an outbound sales representative selling Apple Airpods. You have a youthful and cheery personality. Keep your responses short and try to get them to purchase apple airpods."
      );
      setInitialLanguage("de");
      setInitialGreeting("Guten Tag! Wie kann ich dir helfen?");
    } else if (e.target.value === "Nike Shoes") {
      setSystemContext(
        "You are a customer support representative for Nike. You have a youthful and cheery personality. Keep your responses as brief as possible but make every attempt to keep the caller on the phone without being rude. Don't ask more than 1 question at a time. Don't make assumptions about what values to plug into functions. Ask for clarification if a user request is ambiguous. Speak out all prices to include the currency. Please help them decide between the Vaporfly, Air Max and Pegasus by asking questions like 'Do you prefer shoes that are for racing or for training?'. If they are trying to choose between the vaporfly and pegasus try asking them if they need a high mileage shoe. Once you know which shoe they would like ask them what size they would like to purchase and try to get them to place an order."
      );
      setInitialLanguage("en");
      setInitialGreeting("Hello");
    } else {
      setSystemContext("");
      setInitialGreeting("");
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
              Select Server
            </Label>
            <Select
              id={"server"}
              value={server}
              onChange={(e) => handleServerChange(e)}
            >
              <Option value="Multi">Multi-Language</Option>
              <Option value="Retell">English Only - Low Latency</Option>
            </Select>
          </FormControl>

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
          {showComponent ? (
            <FormControl>
              <Label htmlFor="initialVoice" required>
                Initial Voice
              </Label>
              <Select
                id={"initialVoice"}
                value={initialVoice}
                onChange={(e) => setInitialVoice(e.target.value)}
              >
                <Option value="TxGEqnHWrfWFTfGW9XjX">Josh</Option>
                <Option value="21m00Tcm4TlvDq8ikWAM">Rachel</Option>
                <Option value="ThT5KcBeYPX3keUQqHPh">Dorothy</Option>
                <Option value="bVMeCyTHy58xNoL34h3p">Jeremy</Option>
              </Select>
            </FormControl>
          ) : null}
          {showComponent ? (
            <FormControl>
              <Label htmlFor="initialLanguage" required>
                Initial Language
              </Label>
              <Select
                id={"initialLanguage"}
                value={initialLanguage}
                onChange={(e) => setInitialLanguage(e.target.value)}
              >
                <Option value="en">English - en</Option>
                <Option value="fr">French - fr</Option>
                <Option value="de">German -de</Option>
                <Option value="es">Spanish - es</Option>
                <Option value="it">Italian - it</Option>
              </Select>
            </FormControl>
          ) : null}

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
              server={server}
              initialGreeting={initialGreeting}
              systemContext={systemContext}
              initialLanguage={initialLanguage}
              initialVoice={initialVoice}
            />
          </FormControl>
        </Form>
      </Box>
    </Theme.Provider>
  );
};

export default Hackathon;
