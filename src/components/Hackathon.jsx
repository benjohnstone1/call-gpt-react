import { Theme } from "@twilio-paste/core/theme";
import React, { useState } from "react";
import { Heading } from "@twilio-paste/core/heading";
import { Box } from "@twilio-paste/core/box";
// import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
// import { InformationIcon } from "@twilio-paste/icons/esm/InformationIcon";
// import { ChevronRightIcon } from "@twilio-paste/icons/esm/ChevronRightIcon";

import {
  PageHeader,
  // PageHeaderActions,
  PageHeaderDetails,
  PageHeaderHeading,
  PageHeaderInPageNavigation,
  // PageHeaderKeyword,
  // PageHeaderMeta,
  // PageHeaderParagraph,
  // PageHeaderPrefix,
  PageHeaderSetting,
  // PageHeaderSeparator,
} from "@twilio-paste/core/page-header";
import { Breadcrumb, BreadcrumbItem } from "@twilio-paste/core/breadcrumb";
import { Button } from "@twilio-paste/core/button";
import {
  InPageNavigation,
  InPageNavigationItem,
} from "@twilio-paste/core/in-page-navigation";
// import {
//   DescriptionList,
//   DescriptionListSet,
//   DescriptionListTerm,
//   DescriptionListDetails,
// } from "@twilio-paste/core/description-list";
import { useUID } from "@twilio-paste/core/uid-library";
// import {
//   Table,
//   THead,
//   Tr,
//   Th,
//   TBody,
//   Td,
//   TFoot,
// } from "@twilio-paste/core/table";
// import {
//   RadioButtonGroup,
//   RadioButton,
// } from "@twilio-paste/core/radio-button-group";
// import {
//   Sidebar,
//   SidebarOverlayContentWrapper,
//   SidebarBody,
//   SidebarHeader,
//   SidebarHeaderLabel,
//   SidebarHeaderIconButton,
//   SidebarFooter,
//   SidebarCollapseButton,
//   SidebarNavigation,
//   SidebarNavigationItem,
//   SidebarNavigationDisclosure,
//   SidebarNavigationDisclosureHeading,
//   SidebarNavigationDisclosureHeadingWrapper,
//   SidebarNavigationDisclosureContent,
// } from "@twilio-paste/core/sidebar";
// import { Badge } from "@twilio-paste/core/badge";
// import { DetailText } from "@twilio-paste/core/detail-text";
// import { Text } from "@twilio-paste/text";
// import { Toast, Toaster } from "@twilio-paste/core/toast";
// import { WarningIcon } from "@twilio-paste/icons/esm/WarningIcon";
// import {
//   ProgressSteps,
//   ProgressStepIncomplete,
//   ProgressStepComplete,
//   ProgressStepCurrent,
//   ProgressStepError,
//   ProgressStepSeparator,
// } from "@twilio-paste/core/progress-steps";
import {
  Form,
  // FormSection,
  // FormSectionHeading,
  FormControl,
  // FormActions,
} from "@twilio-paste/core/form";
import {
  Input,
  // input1,
  // input2,
  // input3,
  // input4,
  // input5,
  // input6,
} from "@twilio-paste/core/input";
import { Label } from "@twilio-paste/core/label";
import { HelpText } from "@twilio-paste/core/help-text";
import { Paragraph } from "@twilio-paste/core/paragraph";
// import {
//   DataGrid,
//   DataGridHead,
//   DataGridRow,
//   DataGridHeader,
//   DataGridBody,
//   DataGridCell,
//   DataGridFoot,
// } from "@twilio-paste/core/data-grid";
// import { ButtonGroup } from "@twilio-paste/core/button-group";

// import { Grid, Column } from "@twilio-paste/core/grid";
// import { Card } from "@twilio-paste/core/card";
// import { Stack } from "@twilio-paste/core/stack";
// import { Anchor } from "@twilio-paste/core/anchor";
// import { Alert } from "@twilio-paste/core/alert";
// import { OrderedList, UnorderedList, ListItem } from "@twilio-paste/core/list";
// import {
//   Disclosure,
//   DisclosureHeading,
//   DisclosureContent,
// } from "@twilio-paste/core/disclosure";
// import { Separator } from "@twilio-paste/core/separator";

import { Select, Option } from "@twilio-paste/core/select";
import { TextArea } from "@twilio-paste/core/textarea";

// import axios from "axios";
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
      <Box paddingX="space100" paddingTop="space130" paddingBottom="space160">
        <PageHeader size="default">
          <PageHeaderSetting>
            <Breadcrumb aria-label={useUID()}>
              <BreadcrumbItem href="#">AI Automation</BreadcrumbItem>
              <BreadcrumbItem href="#">Builder</BreadcrumbItem>
              <BreadcrumbItem href="#">Settings</BreadcrumbItem>
            </Breadcrumb>
          </PageHeaderSetting>
          <PageHeaderDetails>
            <PageHeaderHeading>AI Builder Console Settings</PageHeaderHeading>
          </PageHeaderDetails>
          <PageHeaderInPageNavigation>
            <InPageNavigation aria-label={useUID()}>
              <InPageNavigationItem href="#">
                Model Options
              </InPageNavigationItem>
              <InPageNavigationItem href="#" currentPage>
                AI Agent Settings
              </InPageNavigationItem>
              <InPageNavigationItem href="#">
                Advanced Options
              </InPageNavigationItem>
            </InPageNavigation>
          </PageHeaderInPageNavigation>
        </PageHeader>
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
            {/* <FormActions>
              <Button variant="primary" onClick={""}>
                Create Virtual Agent
              </Button>
            </FormActions> */}
          </Form>
        </Box>
      </Box>
    </Theme.Provider>
  );
};

export default Hackathon;
