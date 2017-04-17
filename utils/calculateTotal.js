// function to discount items.
import discount from './discount';

// Calculate the total price.
const calculateTotal = (items) => {
	let total = 0;
	Object.keys(items).map( (key, index) => {
		if(key === 'cari') {
			total += discount.cari(items);
		} else if (key === 'homi') {
			total += discount.homi(items);
		} else if (key === 'peti') {
			total += discount.peti(items);
		} else {
			total += items[key].count * items[key].price;
		}

	})
	
	return total;
}

export default calculateTotal;

