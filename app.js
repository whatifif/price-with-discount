// Sample data array.
// var scannedItems = require('./data/scannedItems');
import scannedItems from './data/scannedItems';

// Items object to store the item information.
import items from './utils/items';

// To count each item into items.
import countItems from './utils/countItems';

// To calculate the total price including discount.
import calculateTotal from './utils/calculateTotal';

// To dispaly the total price.
import displayTotal from './utils/displayTotal';

// To display the items.
import displayItems from './utils/displayItems';

// Initial total price.
let total = 0;

// Count each item into items.
const countedItems = countItems(scannedItems, items);

// Calculate total price.
total = calculateTotal(countedItems);

// Display the total price.
displayTotal(total);

// Display the items for confirmation purpose.
displayItems(items);
