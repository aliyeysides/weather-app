import React from "react";
import {
  AppBar,
  Button,
  Switch,
  TextField,
  Typography
} from "@material-ui/core";
import ToolBar from "@material-ui/core/Toolbar";
import "./Form.css";

interface FormProps {
  getWeather: () => any;
  isMetric: boolean;
  toggleMetric: () => void;
}

function Form({ getWeather, isMetric, toggleMetric }: FormProps) {
  return (
    <AppBar className="app-bar" position="static" color="default">
      <ToolBar>
        <form className="form" onSubmit={getWeather}>
          <div className="location-input">
            <TextField type="text" name="city" placeholder="City" />
            <TextField type="text" name="country" placeholder="Country" />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
            >
              Submit
            </Button>
          </div>
          <div className="unit-toggle">
            <Typography variant="h6">
              {isMetric ? "Metric" : "Imperial"}
            </Typography>
            <Switch onChange={e => toggleMetric()} color="primary" />
          </div>
        </form>
      </ToolBar>
    </AppBar>
  );
}

export default Form;
