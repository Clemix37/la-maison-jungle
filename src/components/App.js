import { useEffect, useState } from 'react';
import Banner from './Banner';
import logo from '../assets/logo.png';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import '../styles/Layout.css';

function App() {
	const cartSaved = localStorage.getItem('cart');
	const [cart, updateCart] = useState(cartSaved ? JSON.parse(cartSaved) : []);
	const [isCartOpen, setIsCartOpen] = useState(true);
	useEffect(()=>{
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);
	return (
		<div>
			<Banner>
				<div className="colonne">
					&nbsp;
				</div>
				<div className="colonne grosse-colonne">
					<div className="ligne">
						<img src={logo} alt='La maison jungle' className='lmj-logo' />
						<h1 className='lmj-title'>La maison jungle</h1>
					</div>
				</div>
				<div className="colonne">
					<span title={isCartOpen ? "Fermer le panier" : "Ouvrir le panier"} className="lmj-cart-icon" onClick={() => setIsCartOpen(!isCartOpen)}>🛒</span>
				</div>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	);
}

export default App;