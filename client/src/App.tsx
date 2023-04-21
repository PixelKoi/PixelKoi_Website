import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/helpers/ScrollToTop";
import "@fontsource/merriweather";
import "@fontsource/open-sans";
import "@fontsource/montserrat";
import "@fontsource/noto-sans-georgian";
import "@fontsource/hind";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
