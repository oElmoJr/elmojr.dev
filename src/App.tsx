import './styles/globalStyles.css';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

import AppRoutes from './routes';

import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()

function App() {

  return (
    <>
      <AppRoutes />
      <SpeedInsights/>
      <Analytics/>
    </>
  );
}

export default App;
