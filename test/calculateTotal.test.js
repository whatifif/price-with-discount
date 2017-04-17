import 'babel-polyfill';
import expect from 'expect';
import calculateTotal from '../utils/calculateTotal';

describe('calculateTotal', function () {

	it('total with discounting cari', function() {
		const items =  { 
		  	cari: { count: 3, price: 109.5},
		  	peti: { count: 1, price: 30}
		}
		const total =  249;

		expect(calculateTotal(items)).toBe(total);
    });
	
	it('total with discounting homi', function() {
		const items =  { 
			homi: { count: 5, price: 549.99},
		  	cari: { count: 2, price: 109.5 }
		}

		const total =  2718.95;

		expect(calculateTotal(items)).toBe(total);
    });

    it('total with discounting peti', function() {
		const items =  { 
			homi: { count: 1, price: 549.99 },
		  	heai: { count: 1, price: 1399.99 },
		  	peti: { count: 1, price: 30} 
		}

		const total = 1949.98;

		expect(calculateTotal(items)).toBe(total);
    });

})