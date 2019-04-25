const gatsby = jest.requireActual('gatsby');

// hack: avoid mocking <Link> component from gatsby
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).___loader = { enqueue: jest.fn() };

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
};
