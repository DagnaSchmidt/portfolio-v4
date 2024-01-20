import React from 'react';
import './styles/index.css';

//components
import MainContainer from './components/containers/MainContainer';
import Logo from './components/logo/Logo';


function App() {
  return (
    <div className='relative w-full h-dvh flex justify-center'>
      <MainContainer />
      <Logo />
    </div>
  );
}

export default App;
