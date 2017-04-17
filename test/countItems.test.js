import 'babel-polyfill';
import expect from 'expect';
import countItems from '../utils/countItems';
let items;

describe('countItems', function () {

	beforeEach(function(){
		items = {
			'homi': {count: 0, price: 549.99},
			'heai': {count: 0, price: 1399.99},
			'cari': {count: 0, price: 109.50},
			'peti': {count: 0, price: 30.00}
		};
	});

	it('count the scannedItems 1', function() {

		const scannedItems = ['cari', 'cari', 'cari', 'peti'];
		items = countItems(scannedItems, items);

		expect(items.cari.count).toBe(3);
		expect(items.peti.count).toBe(1);
    });
	
	it('count the scannedItems 2', function() {

		const scannedItems = ['cari', 'homi', 'homi', 'cari', 'homi', 'homi', 'homi'];
		items = countItems(scannedItems, items);
		
		expect(items.cari.count).toBe(2);
		expect(items.homi.count).toBe(5);
    });

	it('count the scannedItems 3', function() {

		const scannedItems = ['heai', 'peti', 'homi'];
		items = countItems(scannedItems, items);
		
		expect(items.heai.count).toBe(1);
		expect(items.peti.count).toBe(1);
		expect(items.homi.count).toBe(1);
    });

})