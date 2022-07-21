import React from 'react';
import RoutesComponent from './Routes';
import './App.scss';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider
      breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <RoutesComponent />
    </ThemeProvider>
  );
}
//teste
