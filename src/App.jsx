
import {RouterProvider} from 'react-router-dom';
import { Routes } from '/src/Routes/Routes.jsx';
import './App.css'
import { useEffect } from 'react';


export function App() {
useEffect(() => {
  const splash = document.getElementById("splash");
  if (!splash) return;                    

  let removeTimer;

  const hideTimer = setTimeout(() => {
    splash.style.opacity = "0";          
    
    removeTimer = setTimeout(() => {
      splash.remove();                    
    }, 300);                              

  }, 500);                                

  return () => {                        
    clearTimeout(hideTimer);
    clearTimeout(removeTimer);
  };
}, []);


  return (
    <>
        <RouterProvider router={Routes}  />
     
    </>
    
  )}

