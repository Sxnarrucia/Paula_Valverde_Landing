"use client";

import { useEffect, useState } from "react";

function getMsUntilNextMidnight(): number {
  const now = new Date();
  const nextMidnight = new Date(now);
  nextMidnight.setHours(24, 0, 0, 0); // "hora 24" de hoy = medianoche de mañana
  return nextMidnight.getTime() - now.getTime();
}

export function useCountdownToMidnight() {
  // Arranca en null a propósito: si calculamos la hora en el render
  // inicial, el server (que no conoce la hora exacta del visitante) y
  // el cliente calculan valores distintos, y React tira un warning de
  // hidratación. Calculamos recién en useEffect, que solo corre en
  // el navegador.
  const [msLeft, setMsLeft] = useState<number | null>(null);

  useEffect(() => {
    setMsLeft(getMsUntilNextMidnight());
    const interval = setInterval(() => {
      setMsLeft(getMsUntilNextMidnight());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const isReady = msLeft !== null;
  const totalSeconds = Math.max(0, Math.floor((msLeft ?? 0) / 1000));

  return {
    isReady,
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}
