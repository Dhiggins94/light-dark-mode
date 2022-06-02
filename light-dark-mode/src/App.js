import "./App.css";
import Form from "./Form";
import { createContext, useState } from "react";
import Switch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className="App" id={theme}>
        <Form />
        <div className="switch">
          <label>{theme === "light" ? " LIGHT MODE" : "DARK MODE"}</label>
          <Switch onChange={toggle} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
//  context API allows us to pass toggling functionality as well as determing the mode where in have it accessable anywhere in the app

// from react website
// Context provides a way to pass data through the component tree without having to pass props down manually at every level.

// the toggle function allows the current value to be checked for being either light or dark which is used for the THEMECONTEXT.PROVIDER for the context. once it figures out the curr(rent) value, it becomes said light or dark

// added react switch libraray for the switch.
// (property) checked: boolean
// The checked state of the switch. If true, the switch is set to checked. If false, it is not checked.

// label is set to verbally display that if theme is set to light to display the words "light mode", if not to display dark mode via teneary operator
