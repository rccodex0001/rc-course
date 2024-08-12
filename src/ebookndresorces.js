import React from 'react'
import Hero from './component/hero';
import Book from './component/book';
import Frontend from './component/frontendbook';
import Stats from './component/stats';
import Whoshouldbuy from './component/whoshouldbuy';
import Premium from './component/premium';
import Fre from './component/fre';
import Nav from './component/nav';

export default function Ebookndresorces() {
  return (
    <>
    <Nav/>
    <Hero/>
    <Frontend/>
    <Book/>
    <Stats/>
    <Whoshouldbuy/>
    <Premium/>
    <Fre/>
  </>
  )
}
