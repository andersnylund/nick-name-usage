import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import nickname from 'nick-name';

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  const [name, setName] = useState('');
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const nicknames = nickname(name);

  return (
    <Container>
      <input type="text" value={name} onChange={changeHandler}></input>
      <ul>
        {nicknames.map(nickname => (
          <li key={nickname}>{nickname}</li>
        ))}
      </ul>
    </Container>
  );
};

export default App;
