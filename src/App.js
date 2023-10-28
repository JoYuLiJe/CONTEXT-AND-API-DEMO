import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import ToggleThemeButton from './components/ToggleThemeButton';


function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Context Demo</h1>
        <ToggleThemeButton/>
      </div>
    </ThemeProvider>
  );
}

export default App;
