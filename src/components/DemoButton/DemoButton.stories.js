import React from "react";
import DemoButton from "./DemoButton";

export default {
  title: "Form/DemoButton",
  component: DemoButton,
};

export const Primary = () => <DemoButton variant="primary">Primary</DemoButton>;
export const Secondary = () => (
  <DemoButton variant="secondary">Secondary</DemoButton>
);
export const Danger = () => <DemoButton variant="danger">Danger</DemoButton>;
export const Warning = () => <DemoButton variant="warning">Warning</DemoButton>;
