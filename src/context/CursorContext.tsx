import React, { createContext } from 'react';

type CursorPosition = {
  x: number;
  y: number;
};

type CursorContextType = {
  position: CursorPosition;
};

export const CursorContext = createContext<CursorContextType>({
  position: { x: 0, y: 0 },
});