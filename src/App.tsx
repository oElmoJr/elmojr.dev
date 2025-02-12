import './styles/globalStyles.css';
import { SpeedInsights } from "@vercel/speed-insights/react"
import AppRoutes from './routes';

function App() {
  return (
    <>
      <AppRoutes />
    <SpeedInsights/>
    </>
  );
}

export default App;
