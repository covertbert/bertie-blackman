import React from 'react'
const gatsby = jest.requireActual('gatsby')

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
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
  useStaticQuery: () => ({
    site: {
      siteMetadata: {
        title: 'Mock Site',
        lang: 'en',
        titleTemplate: '%s · The Real Hero',
        description: 'We all mock here',
        url: 'https://www.mock.com',
      },
    },
  }),
}
