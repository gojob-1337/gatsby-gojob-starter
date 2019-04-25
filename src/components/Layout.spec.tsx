import React from 'react';
import 'jest-dom/extend-expect';
import { render } from 'react-testing-library';

import Layout from './Layout';
import { useStaticQuery } from 'gatsby';

describe('<Layout />', () => {
  const title = 'My page being tested';
  const content = 'Hello World';
  const children = <div>{content}</div>;

  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockReturnValue({ site: { siteMetadata: { title } } });
  });

  it('contains the title of the website', () => {
    const { container } = render(<Layout>{children}</Layout>);
    expect(container).toHaveTextContent(title);
  });

  it('contains the text of its children', () => {
    const { container } = render(<Layout>{children}</Layout>);
    expect(container).toHaveTextContent(content);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Layout>{children}</Layout>);
    expect(asFragment()).toMatchSnapshot();
  });
});
