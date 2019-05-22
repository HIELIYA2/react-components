import React from 'react';
import './assets/css/main.css';
import Button from './cmps/button/Button';
import Tags from './cmps/tags/Tags';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel)

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <h1>react-components</h1>
      <Button value="primary" isDisabled="default"/>
      <Button value="primary" isDisabled="disabled" onClick={()=>{}}/>
      <Button value="secondary" isDisabled="default"/>
      <Button value="secondary" isDisabled="disabled"/>
      <Button value="tertiary" isDisabled="default"/>
      <Button value="tertiary" isDisabled="disabled"/>
      <Tags/>
      </header>
    </div>
  );
}

export default App;
