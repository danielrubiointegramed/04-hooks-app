import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { HooksApp } from './HooksApp';
//import { TrafficLight } from './01-useState/TrafficLight';
import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffct';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLight /> */}
    {/* <HooksApp /> */}
    <TrafficLightWithEffect />
  </StrictMode>,
)
