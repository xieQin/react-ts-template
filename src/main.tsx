import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import ReloadPrompt from "@/components/ReloadPrompt";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <App />
    {/* <ReloadPrompt /> */}
  </StrictMode>
);
