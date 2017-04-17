// lets assume the scannedItems is array
const countItems = (scannedItems, items) => {
	let item;
	for(let i = 0, len = scannedItems.length; i < len; i++) {
		item = scannedItems[i];
		items[item].count++;
	}

	return items;
}

export default countItems;