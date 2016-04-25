var boxesNames = ["redMed", "grMed", "bluMed", "bAA", "boo", "hoo", "bom", "magPow", "fRod", "iRod", "bMM", "eMM", "qMM", "lan", "ham", "sho", "flu", "bug", "bok", "cOS", "cOS", "mgC", "mgM", "emJ", "fJr", "beJ", "peB", "tMt", "zoF", "moP"];
console.log(boxesNames.length);

function countCheckboxes() {
	var total = 0;
	var noOfItems = 0;
	var receipt = [];

	for (var i = 0; i < boxesNames.length; i++) {
		
		var names = boxesNames[i];
	
 		if (document.getElementById(names).checked === true) {
 			noOfItems++;
 			var cost = document.getElementById(names).value;
 			total += parseInt(cost);

 			var itemName = document.getElementById(names).name;

 			receipt.push(itemName);
 		}
 	}

 	document.getElementById("purchaseAmmount").innerHTML = ("You have purchased: " + noOfItems + " items");

 	document.getElementById("purchaseList").innerHTML = (receipt.toString());

 	document.getElementById("purchaseButton").innerHTML = ("Your total is: " + total);
 }