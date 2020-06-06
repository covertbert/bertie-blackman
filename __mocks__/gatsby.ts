import React from 'react'
const gatsby = jest.requireActual('gatsby')

module.exports = {
  ...gatsby,
  Link: jest
    .fn()
    .mockImplementation(
      ({
        activeClassName,
        activeStyle,
        getProps,
        innerRef,
        partiallyActive,
        ref,
        replace,
        to,
        ...rest
      }) =>
        React.createElement('a', {
          ...rest,
          href: to,
        }),
    ),
  StaticQuery: jest.fn(),
  graphql: jest.fn(),
  useStaticQuery: () => ({
    site: {
      siteMetadata: {
        description: 'We all mock here',
        lang: 'en',
        title: 'Mock Site',
        titleTemplate: '%s · Mock Land',
        url: 'https://www.mock.com',
      },
    },
  }),
}
