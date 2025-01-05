// @vitest-environment jsdom
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  // screen.debug(document.body);
  expect(currentCount.textContent).toBe('0');

});

test(
  'it should increment when the "Increment" button is pressed',
  async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const currentCount = screen.getByTestId('current-count');
    await user.click(incrementButton);

    console.log(currentCount);
    
    expect(currentCount.textContent).toBe('1');


  },
);
