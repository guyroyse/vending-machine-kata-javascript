describe("Jasmine Test Runner", function() {

  it("Runs", function() {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(42).toEqual(42);
  });

  describe("Vending Machine", function() {

		var machine;

		beforeEach(function() {
			machine = createVendingMachine();
		});

		describe("New Machine", function() {

			it("displays INSERT COIN", function() {
				expect(machine.display).toEqual('INSERT COIN');
			});

			it("has an empty coin return", function() {
				expect(machine.coin_return.length).toEqual(0);
			});
			
		});

		describe("Inserted Money", function() {

			describe("Valid money", function() {

				it("displays $0.05 when a nickel is inserted", function() {
					machine.insert_coin(NICKEL);
					expect(machine.display).toEqual('$0.05');
				});

				it("displays $0.10 when a dime is inserted", function() {
					machine.insert_coin(DIME);
					expect(machine.display).toEqual('$0.10');
				});

				it("displays $0.25 when a quarter is inserted", function() {
					machine.insert_coin(QUARTER);
					expect(machine.display).toEqual('$0.25');
				});

				it("displays a summed value when multiple coins are inserted", function() {
					machine.insert_coin(QUARTER);
					machine.insert_coin(DIME);
					machine.insert_coin(NICKEL);
					expect(machine.display).toEqual('$0.40');
				});
			 
				it("does not place a coin in the coin return when a valid coin is entered", function() {
					machine.insert_coin(NICKEL);
					expect(machine.coin_return.length).toEqual(0);
				});

			});

			describe("Invalid Money", function() {

				it("keeps the display the same when invalid coins are inserted", function() {
					machine.insert_coin(PENNY);
					expect(machine.display).toEqual('INSERT COIN');
				});

				it("places invalid coin in the coin return", function() {
					machine.insert_coin(PENNY);
					expect(machine.coin_return[0]).toEqual(PENNY);
				});

				it("places a second invalid coin in the coin return", function() {
					machine.insert_coin(PENNY);
					machine.insert_coin(HALF_DOLLAR);
					expect(machine.coin_return[1]).toEqual(HALF_DOLLAR);
				});

			});

		});

		describe("Money Return", function() {

			it("returns inserted coin", function() {
				machine.insert_coin(DIME);
				machine.press_return();
				expect(machine.coin_return[0]).toEqual(DIME);
			});

			it("returns a second inserted coin", function() {
				machine.insert_coin(DIME);
				machine.insert_coin(QUARTER);
				machine.press_return();
				expect(machine.coin_return[1]).toEqual(QUARTER);
			});

			it("displays INSERT COIN after money is returned", function() {
				machine.insert_coin(DIME);
				machine.press_return();
				expect(machine.display).toEqual('INSERT COIN');
			});

		});
 
  });

});

