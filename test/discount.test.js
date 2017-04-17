import 'babel-polyfill';
import expect from 'expect';
import discount from '../utils/discount';

describe('discount', function () {

	it('discount the cari', function() {

		const items =  { 
		  	cari: { count: 3, price: 109.5},
		  	peti: { count: 1, price: 30}
		}

		const total = discount.cari(items);

		expect(total).toBe(219);
    });

    it('discount the homi', function() {

		const items =  { 
			homi: { count: 5, price: 549.99},
		  	cari: { count: 2, price: 109.5 }
		}

		const total = discount.homi(items);

		expect(total).toBe(2499.95);
    });
	
    it('discount the peti', function() {

		const items =  { 
			homi: { count: 1, price: 549.99 },
		  	heai: { count: 1, price: 1399.99 },
		  	peti: { count: 1, price: 30} 
		}

		const total = discount.peti(items);

		expect(total).toBe(0);
    });

})