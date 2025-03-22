import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { useSound } from './hooks/useSound.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

document.getElementById("PlayBGM")?.addEventListener("click",function(){
  sounds.bgmTitle.play();
});

document.getElementById("PlayBGM")?.addEventListener("click",function(){
  sounds.bgmBattle.play();
});