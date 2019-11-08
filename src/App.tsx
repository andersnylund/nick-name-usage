import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import nicks from 'nicks';

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  const [name, setName] = useState('');
  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void =>
    setName(event.target.value);

  const nicknames = nicks(name);

  return (
    <Container>
      <Label>
        <span>Your name</span>
        <input type="text" value={name} onChange={changeHandler} />
      </Label>
      <List>
        {nicknames.map(nick => (
          <li key={nick}>{nick}</li>
        ))}
      </List>
    </Container>
  );
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  min-height: 200px;
  list-style: none;
  margin: 0;
  padding: 10px 0 0 0;
`;

export default App;
