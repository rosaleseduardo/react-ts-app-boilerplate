import { render, screen } from '@testing-library/react';

import App from './App';

it('Should have "Click on the Vite and React logos to learn more"', () => {
  render(<App />);

  const message = screen.queryByText(
    'Click on the Vite and React logos to learn more',
  );

  expect(message).toBeVisible();
});
