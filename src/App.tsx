import React, { useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import nicks from 'nicks';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return (): void => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [nicknames, setNicknames] = useState([] as string[]);
  const debouncedName = useDebounce(name, 300);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void =>
    setName(event.target.value);

  useEffect(() => {
    setNicknames(nicks(debouncedName));
  }, [debouncedName]);

  return (
    <Container>
      <Label>
        <span>Your name</span>
        <input
          placeholder="Matti"
          type="text"
          value={name}
          onChange={changeHandler}
        />
      </Label>
      <List>
        {nicknames.map(nick => (
          <li key={nick}>{nick}</li>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  min-height: 200px;
  list-style: none;
  margin: 10px 0 0 0;
  padding: 0;
`;

export default App;
