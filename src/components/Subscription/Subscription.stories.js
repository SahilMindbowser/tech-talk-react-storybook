import React from "react";
import { Primary } from "../DemoButton/DemoButton.stories";
import { Medium } from "../Input/Input.stories";
import "./Subscription.css";

export default {
  title: "Form/Subscription",
  parameters: {
    layout: "centered",
  },
};

export const PrimarySubscription = () => (
  <div className="subscription">
    <Medium />
    <Primary />
  </div>
);
