// Import from react-router-dom
import { Routes, Route } from "react-router-dom";

// Import Bootstrap
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Components
import SimulateAgent from "./components/SimulateAgent";
import Hackathon from "./components/Hackathon";

// Styles
import "./styles/App.css";

// Paste
import { Theme } from "@twilio-paste/core/theme";

import { Box } from "@twilio-paste/core/box";
import { useUID } from "@twilio-paste/core/uid-library";

import {
  PageHeader,
  PageHeaderDetails,
  PageHeaderHeading,
  PageHeaderInPageNavigation,
  PageHeaderSetting,
} from "@twilio-paste/core/page-header";
import { Breadcrumb, BreadcrumbItem } from "@twilio-paste/core/breadcrumb";
import {
  InPageNavigation,
  InPageNavigationItem,
} from "@twilio-paste/core/in-page-navigation";

function App() {
  return (
    // <div className="App">
    <Container>
      <Theme.Provider theme="Twilio">
        <Box paddingX="space100" paddingTop="space60">
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
                <InPageNavigationItem href="/hackathon">
                  AI Agent Settings
                </InPageNavigationItem>
                <InPageNavigationItem href="/simulate">
                  View Virtual Agent
                </InPageNavigationItem>
              </InPageNavigation>
            </PageHeaderInPageNavigation>
          </PageHeader>
        </Box>
        <Box paddingX="space100" paddingBottom="space160">
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route path="/simulate" element={<SimulateAgent />} />
                  <Route path="/hackathon" element={<Hackathon />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Box>
      </Theme.Provider>
    </Container>
    // </div>
  );
}

export default App;
