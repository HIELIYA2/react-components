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
      <Button value="primary" isDisabled={true} onClick={e => console.log(e)} />
      <Button value="primary" isDisabled={false} onClick={() => console.log('2') }/>
      <Button value="secondary" isDisabled={true} onClick={() => console.log('3') }/>
      <Button value="secondary" isDisabled={false} onClick={() => console.log('4') }/>
      <Button value="tertiary" isDisabled={true} onClick={() => console.log('5') }/>
      <Button value="tertiary" isDisabled={false} onClick={()=>{}}/>
      <Tags/>
      </header>
    </div>
  );
}

export default App;
