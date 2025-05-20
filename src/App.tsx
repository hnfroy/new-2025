import React, { Suspense } from 'react'
// import { lazy } from 'react'


const Nav = React.lazy(() => import('./components/Nav'))
const SmoothScrollWrapper = React.lazy(() => import('./components/SmoothScrollWrapper'))
const Hero = React.lazy(() => import('./components/Hero'))
const About = React.lazy(() => import('./components/About'))
const ProjectParallax = React.lazy(() => import('./components/ProjectParallax'))
const CTAContact = React.lazy(() => import('./components/CTAContact'))
const Footer = React.lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <>
      <Suspense 
        fallback={
        <div className='fixed top-100 inset-0 text-center'>Loading...</div>
        }
      >
        <Nav />
        <SmoothScrollWrapper>
          <Hero />
          <About />
          <ProjectParallax />
          <CTAContact />
          <Footer />
        </SmoothScrollWrapper>
      </Suspense>
    </>
  );
}
