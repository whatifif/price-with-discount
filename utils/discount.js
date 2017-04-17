const discount = {
	cari: (items) => {
			const count = items['cari'].count;
			
			if (count >= 3) {
				items['cari'].adjCount = Math.floor( count / 3 ) * 2 + (count % 3);
				return items['cari'].adjCount * items['cari'].price;
			}

			return count * items['cari'].price; 
		},
	homi: (items) => {
		const count = items['homi'].count;
		
		if (count > 4) {
			items['homi'].adjPrice = 499.99;
			return count * items['homi'].adjPrice;
		}

		return count * items['homi'].price; 
	},
	peti: (items) => {
		const count = items['peti'].count;
		const countHeai = items['heai'] && items['heai'].count;

		if (count > 0 && countHeai > 0) {
			items['peti'].adjCount = count - countHeai;
			if(items['peti'].adjCount < 0) {
				items['peti'].adjCount = 0;
			}

			return items['peti'].adjCount * items['peti'].price; 

		}
		
		return count * items['peti'].price; 
	}
}

export default discount;