import { useEffect } from 'react';
import '../styles/Cart.css';

function Cart({ cart, updateCart, isCartOpen, setIsCartOpen}) {
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	);
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total]);
	return isCartOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsCartOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (<div></div>);
}

export default Cart;