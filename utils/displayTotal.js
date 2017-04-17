import formatPrice from './formatPrice';

// Display the total price.
const displayTotal = (total) => {
	console.log('total = ', formatPrice(total));
}

export default displayTotal;