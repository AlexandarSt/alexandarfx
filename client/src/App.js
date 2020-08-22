import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import './App.css'

import Header from './components/header/header.component'
import HomePage from './pages/home/home.page'
import AboutPage from './pages/about/about.page'
import ProductsPage from './pages/products/products.page'
import ContactPage from './pages/contact/contact.page'
import Footer from './components/footer/footer.component'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/products' component={ProductsPage} />
            <Route exact path='/contact' component={ContactPage} />
          </Switch>
        <Footer />  
      </BrowserRouter>
    </div>
  );
}

export default App
