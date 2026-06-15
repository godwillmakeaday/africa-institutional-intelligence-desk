import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.jsx";
import { intelligenceItems } from "./data/intelligenceItems.js";

export { SITE_URL, BRAND } from "./config.js";
export const records = intelligenceItems;

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
