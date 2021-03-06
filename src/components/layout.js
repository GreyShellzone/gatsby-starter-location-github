// npm
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'

// self
import { Social, Header, Nav } from '.'
import './layout.scss'

const Layout = ({ messages, header, children }, ctx) => {
  const pageContext = ctx.language || {}
  return (
    <Fragment>
      <Social messages={messages} pageContext={pageContext} />
      {header ? (
        <Header
          pageContext={pageContext}
          siteTitle={<FormattedMessage id='title' />}
          subTitle={<FormattedMessage id='subtitle' />}
        />
      ) : (
        <Nav pageContext={pageContext} />
      )}
      {children}
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

Layout.contextTypes = {
  language: PropTypes.object
}

export default Layout
