import React, { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

function App() {
  return (
    <>
      <MyNavbar />
      <MainContent>
        <h1 className="mt-5">
          Sticky footer with fixed navbar
        </h1>
        <p className="lead">
          Pin a footer to the bottom of the viewport in
          desktop browsers with this custom HTML and CSS. A
          fixed navbar has been added with{' '}
          <code>padding-top: 60px;</code> on the{' '}
          <code>main &gt; .container</code>.
        </p>
        <p className="lead">
          Pin a footer to the bottom of the viewport in
          desktop browsers with this custom HTML and CSS. A
          fixed navbar has been added with{' '}
          <code>padding-top: 60px;</code> on the{' '}
          <code>main &gt; .container</code>.
        </p>
        <p className="lead">
          Pin a footer to the bottom of the viewport in
          desktop browsers with this custom HTML and CSS. A
          fixed navbar has been added with{' '}
          <code>padding-top: 60px;</code> on the{' '}
          <code>main &gt; .container</code>.
        </p>
        <p className="lead">
          Pin a footer to the bottom of the viewport in
          desktop browsers with this custom HTML and CSS. A
          fixed navbar has been added with{' '}
          <code>padding-top: 60px;</code> on the{' '}
          <code>main &gt; .container</code>.
        </p>
        <p className="lead">
          Pin a footer to the bottom of the viewport in
          desktop browsers with this custom HTML and CSS. A
          fixed navbar has been added with{' '}
          <code>padding-top: 60px;</code> on the{' '}
          <code>main &gt; .container</code>.
        </p>
        <p className="lead">
          Pin a footer to the bottom of the viewport in
          desktop browsers with this custom HTML and CSS. A
          fixed navbar has been added with{' '}
          <code>padding-top: 60px;</code> on the{' '}
          <code>main &gt; .container</code>.
        </p>
        <p className="lead">
          Pin a footer to the bottom of the viewport in
          desktop browsers with this custom HTML and CSS. A
          fixed navbar has been added with{' '}
          <code>padding-top: 60px;</code> on the{' '}
          <code>main &gt; .container</code>.
        </p>
      </MainContent>
      <MyFooter />
    </>
  )
}

export default App
