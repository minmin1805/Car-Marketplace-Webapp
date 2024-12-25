import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './components/ui/button.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Category from './components/Category.jsx'
import MostSearchCar from './components/MostSearchCar.jsx'
import InfoSection from './components/InfoSection.jsx'
import Footer from './components/Footer.jsx'

function Home() {
  return (
    <div>

    <div>
      <SignInButton mode='modal' forceRedirectUrl='/' >
          <Button>Sign In</Button>
      </SignInButton>
    </div>

    <Header />
    <Hero />
    <Category />
    <MostSearchCar />
    <InfoSection />
    <Footer />
    </div>
  )
}

export default Home