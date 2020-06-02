import React from 'react';
import Header from './components/header/header.component';
import AppRouter from './app.router';

const App = () => {
  return (
    <>
      {/* Header Component Comes Here */}
      <Header />
      {/* Router Definition */}
      <AppRouter />
    </>
  );
}

export default App;
