import React from 'react';
import './styles/index.css';

//components
import MainContainer from './components/containers/MainContainer';
import Logo from './components/logo/Logo';
import BackButton from './components/backButton/BackButton';


function App() {
  return (
    <div className='relative w-full h-dvh flex justify-center'>
      <MainContainer />
      <Logo />
      <BackButton />
    </div>
  );
}

export default App;
