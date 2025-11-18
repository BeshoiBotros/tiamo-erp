import { ThemeProvider } from "./contexts/theme-provider";
import { TiamoRoutes } from "./routes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="tiamo-theme">
      <TiamoRoutes />
    </ThemeProvider>
  );
}

export default App;
