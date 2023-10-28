import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        // a built in feature of useState is that the current state is made available to use as an argument inside od setThese if needed it's good practice to avoid the ACTUAL state variable (theme) in setState
        setTheme(currentTheme => currentTheme === "light" ? "dark" : "light");

        // works just fine for current use case, but for more complex projects/apps, could cause you some trouble
        // setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return (
        <ThemeContext.Provider value={ {theme, toggleTheme} }>
            {children}
        </ThemeContext.Provider>
     );
}


export {ThemeContext, ThemeProvider}; 