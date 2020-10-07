import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import CheckboxWithLabel from '../CheckboxWithLabel';

afterEach(cleanup);
// afterEach will be run after the this test case run completely 

it('CheckboxWithLabel changes the text after click', () => {
  const { queryByLabelText, getByLabelText } = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));
  // manually fire a event 

  expect(queryByLabelText(/on/i)).toBeTruthy();
});