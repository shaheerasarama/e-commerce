import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import theme from "./Theme/Theme";
import { ThemeProvider } from '@mui/material/styles';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
