import { useState, useEffect } from "react";

import CardListRepo from "./components/card-list-repo/card-list-repo.component";
import CardListProfile from "./components/card-list-profile/card-list-profile.component";
import "./App.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const App = () => {
  const [value, setTabValue] = useState(0);

  const handleTab = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="App">
      <div className="main">
        <Tabs
          selectionFollowsFocus
          value={value}
          onChange={handleTab}
          aria-label="basic tabs example"
        >
          <Tab label="repositories" {...a11yProps(0)} />
          <Tab label="profiles" {...a11yProps(1)} />
        </Tabs>

        <TabPanel value={value} index={1}>
          <CardListRepo />
        </TabPanel>
        <TabPanel value={value} index={0}>
          <CardListProfile />
        </TabPanel>

        <p>
          Source code:{" "}
          <a href="https://github.com/ttran293/useful-github">GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default App;
