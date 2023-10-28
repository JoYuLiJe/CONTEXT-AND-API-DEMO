import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ToggleThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme} className={theme}>
            Toggle Theme
        </button>
    )
}

export default ToggleThemeButton;