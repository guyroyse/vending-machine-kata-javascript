var PENNY = 'penny';
var NICKEL = 'nickel';
var DIME = 'dime';
var QUARTER = 'quarter';
var HALF_DOLLAR = 'half dollar';

var createVendingMachine = function() {

	var value = 0;
	var coins = [];

	var coin_value = function(coin) {
		if (coin === NICKEL) return 5;
		if (coin === DIME) return 10;
		if (coin === QUARTER) return 25;
	};

	var valid_coin = function(coin) {
		return coin === NICKEL || coin === DIME || coin == QUARTER
	};

	var format_display_value = function() {
		return '$' + (value/100).toFixed(2);
	};

	return {
		display : 'INSERT COIN',
		coin_return : [],
		insert_coin : function(coin) {
			if (valid_coin(coin)) {
				coins.push(coin);
				value += coin_value(coin);
				this.display = format_display_value();
			} else {
				this.coin_return.push(coin);
			}
		},
		press_return : function() {
			this.coin_return = this.coin_return.concat(coins);
		}
	};

};
