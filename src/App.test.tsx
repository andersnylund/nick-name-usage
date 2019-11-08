import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('should not render the name immediately', async () => {
    const { getByLabelText, queryByText } = render(<App />);
    const input = getByLabelText('Your name');
    fireEvent.change(input, { target: { value: 'Matti Meikäläinen' } });
    expect(queryByText('mmeika')).toBeNull();
  });

  it('should render the names after a delay', async () => {
    const { getByLabelText, getByText } = render(<App />);
    const input = getByLabelText('Your name');
    fireEvent.change(input, { target: { value: 'Matti Meikäläinen' } });

    await wait(() => {
      expect(getByText('mmeika')).toBeInTheDocument();
      expect(getByText('meikam')).toBeInTheDocument();
      expect(getByText('matmei')).toBeInTheDocument();
      expect(getByText('meimat')).toBeInTheDocument();
    });
  });
});
