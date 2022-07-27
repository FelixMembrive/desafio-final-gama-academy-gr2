import React from 'react';
import RoutesComponent from './Routes';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
//deixar os imports do bootstrap e scss sempre por último:
import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.scss';

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
