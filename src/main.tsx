import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { UI } from "./UI";

const isInIframe = window.self !== window.top;

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <>
    <App />
    {!isInIframe && <UI />}
  </>,
);
