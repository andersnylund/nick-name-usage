import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('allows to input name', () => {
    const { getByLabelText, getByText } = render(<App />);
    const input = getByLabelText('Your name');
    fireEvent.change(input, { target: { value: 'Matti Meikäläinen' } });
    expect(getByText('mmeika'));
    expect(getByText('meikam'));
    expect(getByText('matmei'));
    expect(getByText('meimat'));
  });
});
