import { Toaster } from "react-hot-toast";
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <StyledChart />
      <Router />
      <Toaster position="top-center" reverseOrder={false} toastOptions={{duration:3000}}/>
    </ThemeProvider>
  );
}
