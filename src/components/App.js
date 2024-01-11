import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import logo from '../assets/logo.png'
import '../styles/Layout.css'
import { useState } from 'react'



// function handleSubmit(e) {

//   e.preventDefault()
//   alert(e.target['my_input'].value)
// }



function App() {

  const [cart, updateCart] = useState([])
  
  return (
    <div>
      <Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La Maison Jungle</h1>
			</Banner>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  )
}

export default App;
