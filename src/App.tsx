import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import nicks from 'nicks';

import SagaTest from './SagaTest';

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  const [name, setName] = useState('');
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const nicknames = nicks(name);

  return (
    <Container>
      <label>
        Your name
        <input type="text" value={name} onChange={changeHandler}></input>
      </label>
      <ul>
        {nicknames.map(nick => (
          <li key={nick}>{nick}</li>
        ))}
      </ul>
      <SagaTest />
    </Container>
  );
};

export default App;
