import React from 'react';
import 'jest-dom/extend-expect';
import { render } from 'react-testing-library';

import Header from './Header';

describe('<Header />', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
});
