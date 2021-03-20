$(document).ready( function() { 
	var total = $('#total');
	var zakat = $('#zakat');
	var inputs = $('#zakat-calculator input');
	var calculate = $('#calculator-calculate');
	var reset = $('#calculator-reset');
	var zakatForm = $('#give-form-104497-7');
	var nisab = $('input[name="nisab"]');
	var nisabCalc = Number($('input[name="nisab"]:checked').val());
	var zakatCalc = 0;

	function calculateBtn() {
		var gold = +$('#gold').val();
		var silver = +$('#silver').val();
		var cashinhand = +$('#cashinhand').val();
		var cashdeposited = +$('#cashdeposited').val();
		var cashloans = +$('#cashloans').val();
		var cashinvestments = +$('#cashinvestments').val();
		var stock = +$('#stock').val();
		var credit = +$('#credit').val();
		var wages = +$('#wages').val();
		var taxes = +$('#taxes').val();
		var totalCalc = (gold+silver+cashinhand+cashdeposited+cashloans+cashinvestments+stock) - (credit+wages+taxes);
		total.text(totalCalc.toLocaleString('en-US'));
		if (totalCalc >=  nisabCalc) {
			zakatCalc = Math.round(totalCalc*0.025);
			zakat.text(zakatCalc.toLocaleString('en-US'));
		}
		else {
			zakat.text("0");
		}
	}

	inputs.on('input', calculateBtn);
	nisab.on('change', function() { nisabCalc = Number($('input[name="nisab"]:checked').val()); calculateBtn(); });
});