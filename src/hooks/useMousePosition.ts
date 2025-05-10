import { useState, useEffect, useContext } from 'react';
import { CursorContext } from '../context/CursorContext';

export const useMousePosition = () => {
  const cursorContext = useContext(CursorContext);
  
  return cursorContext.position;
};