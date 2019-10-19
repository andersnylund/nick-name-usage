import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import nicks from 'nicks';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from './store';
import { incrementAction, decrementAction } from './actions';

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  const [name, setName] = useState('');
  const counter = useSelector((state: AppState) => state.index.counter);
  const dispatch = useDispatch();
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
      <p>{counter}</p>
      <button onClick={() => dispatch(incrementAction)}>increment</button>
      <button onClick={() => dispatch(decrementAction)}>decrement</button>
    </Container>
  );
};

export default App;
