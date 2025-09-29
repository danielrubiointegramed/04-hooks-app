import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
//import { HooksApp } from './HooksApp';
//import { TrafficLight } from './01-useState/TrafficLight';
//import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLight /> */}
    {/* <HooksApp /> */}
    {/* <TrafficLightWithEffect /> */}
    <TrafficLightWithHook />
  </StrictMode>,
)
