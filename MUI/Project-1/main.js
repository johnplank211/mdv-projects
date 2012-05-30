/*John Plank
MUI Project 1
term 06/12
Apocalypse Checklist*/

window.addEventListener("DOMContentLoaded", function() {
		var $ = function(x) {
	    var theElement = document.getElementById(x);
		return theElement;
	};

	var makeCats = function () {
		var formTags = document.getElementsByTagName("form"),
			selectLi = $("select"),
			makeSelect = document.createElement("select");
		makeSelect.setAttribute("id", "groups");
		for (var i = 0, j = fearGroups.length; i<j; i++) {
			var makeOption = document.createElement('option');
			var optText = fearGroups[i];
			makeOption.setAttribute('value', fearGroups[i]);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
	}
		selectLi.appendChild(makeSelect);
	};

	var getRadio = function () {
		var radio = document.forms[0].apocalypse;
		for (var i = 0; i < radio.length; i++) {
			if (radio[i].checked) {
				apocalypseValue = radio[i].value;
			}

		}
	};

	var getCheckBoxValue = function () {
		if($("firearm").checked){
			firearmValue = $("firearm").value;
		}else{
			firearmValue = "No"
		}
		if($("ammo").checked){
			ammoValue = $("ammo").value;
		}else{
			ammoValue = "No"
		}
		if($("meleeWeapon").checked){
			meleeWeaponValue = $("meleeWeapon").value;
		}else{
			meleeWeaponValue = "No"
		}
		if($("cannedFood").checked){
			cannedValue = $("cannedFood").value;
		}else{
			cannedValue = "No"
		}
		if($("water").checked){
			waterValue = $("water").value;
		}else{
			waterValue = "No"
		}
		if($("chainMeshSuit").checked){
			chainMeshSuitValue = $("chainMeshSuit").value;
 		}else{
			chainMeshSuitValue = "No"
		}
		if($("topographicalMap").checked){
			topographicalMapValue = $("topographicalMap").value;
		}else{
			topographicalMapValue = "No"
		}
		if($("leatherman").checked){
			leathermanValue = $("leatherman").value;
		}else{
			leathermanValue = "No"
		}
		if($("rucksack").checked){
			rucksackValue = $("rucksack").value;
		}else{
			rucksackValue = "No"
		}
		if($("boots").checked){
			bootsValue = $("boots").value;
		}else{
			bootsValue = "No"
		}
		if($("matches").checked){
			matchesValue = $("matches").value;
		}else{
			matchesValue = "No"
		}
		if($("p38").checked){
			p38Value = $("p38").value;
		}else{
			p38Value = "No"
		}
		if($("intestinalFortitude").checked){
			intestinalFortitudeValue = $("intestinalFortitude").value;
		}else{
			intestinalFortitudeValue = "No"
		}

	};
	
	var toggleControls = function (n) {
		switch(n) {
			case "on":
				$("CheckListForm").style.display = "none";
				$("clear").style.display = "inline";
				$("displayLink").style.display = "none";
				$("addNew").style.display = "inline";
				break;
		   case "off":		
		   		$("CheckListForm").style.display = "block";
				$("clear").style.display = "inline";
				$("displayLink").style.display = "inline";
				$("addNew").style.display = "none";
				$("items").style.display = "none";
		   		break;
		   	  default:
		   	  	return false;
		}
	};

	var storeData = function (key) {
		if(!key) {
			var id    		= Math.floor(Math.random()* 1000001);
		} else {
			var id = key;
		}
		getCheckBoxValue();
		getRadio();
		var item 			= {};
		    item.apocalypse = ["Apocalypse:", apocalypseValue];
			item.fear       = ["Fear level:", $("groups").value];
			item.firearm	= ["Firearm:", firearmValue];
			item.ammo		= ["Ammo:", ammoValue];
			item.melee 		= ["Melee weapon:", meleeWeaponValue];
			item.canned		= ["Canned:", cannedValue];
			item.water		= ["Water:", waterValue];
			item.chain		= ["Chain mesh suit:", chainMeshSuitValue];
			item.map 		= ["Topographical Map:", topographicalMapValue];
			item.leatherman = ["Leatherman:", leathermanValue];
			item.rucksack	= ["Rucksack:", rucksackValue];
			item.boots		= ["Boots:", bootsValue];
			item.matches	= ["Matches:", matchesValue];
			item.p38		= ["P38:", p38Value];
			item.intestinal = ["Intestinal Fortitude:", intestinalFortitudeValue];
			item.item		= ["Item:", $("item").value];			
			item.date       = ["World Ended:", $("date").value];
			item.email		= ["Email:", $("email").value];
			item.comments	= ["Comments:", $("comments").value];
			item.readiness  = ["Readiness:", $("readiness").value];

		localStorage.setItem(id, JSON.stringify(item));
		alert("Checklist Saved!");
	};

	var getData = function () {
		toggleControls("on");
		if (localStorage.length === 0) {
			alert("There is no data in Local Storage so data was added. ");
			autoFillData();
		}

		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$("items").style.display = "display";
		for (var i = 0, len = localStorage.length; i < len; i++) {
			 var makeli = document.createElement("li");
			 var linksLi = document.createElement("li");
			 makeList.appendChild(makeli);
			 var key = localStorage.key(i);
			 var value = localStorage.getItem(key);
			 var obj = JSON.parse(value);
			 var makeSubList = document.createElement("ul");
			 makeli.appendChild(makeSubList);
			 getImage(obj.apocalypse[1], makeSubList);
			 for (var t in obj) {
			 	var makeSubLi = document.createElement("li");
			 	makeSubList.appendChild(makeSubLi);
			 	var optSubText = obj[t][0]+" "+obj[t][1];
			 	makeSubLi.innerHTML = optSubText;
			 	makeSubList.appendChild(linksLi);
			 }
			makeItemLinks(localStorage.key(i),  linksLi);
		}
	};

	var getImage = function (catName, makeSubList) {
		var imageLi = document.createElement("li");
		makeSubList.appendChild(imageLi);
		var newImg = document.createElement("img");
		var setSrc = newImg.setAttribute("src", "images/" + catName + ".png");
		imageLi.appendChild(newImg);
	};

	var autoFillData = function () {
		for ( var n in json) {
			var id = Math.floor(Math.random()* 1000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	}

	var makeItemLinks = function (key, linksLi) {
		var editLink = document.createElement("a");
	    editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Checklist";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);

		var breakTag = document.createElement("br");
		linksLi.appendChild(breakTag);

		var deleteLink = document.createElement("a");
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Checklist";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	};

	var editItem = function () {
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);

		toggleControls("off");

		var radio = document.forms[0].apocalypse;
		for (var i = 0; i<radio.length; i++) {
			if (radio[i].value == "Natural" && item.apocalypse[1] == "Natural") {
				radio[i].setAttribute("checked", "checked");
			} else if (radio[i].value == "Atomic" && item.apocalypse[1] == "Atomic") {
				radio[i].setAttribute("checked", "checked");
			} else if (radio[i].value == "Zombie" && item.apocalypse[1] == "Zombie") {
				radio[i].setAttribute("checked", "checked");
			}
		}			

		if(item.firearm[1] == "yes") {
			$("firearm").setAttribute("checked", "checked");
		}
		if(item.ammo[1] == "yes") {
			$("ammo").setAttribute("checked", "checked");
		}
		if(item.melee[1] == "yes") {
			$("meleeWeapon").setAttribute("checked", "checked");
		}
		if(item.canned[1] == "yes") {
			$("cannedFood").setAttribute("checked", "checked");
		}
		if(item.water[1] == "yes") {
			$("water").setAttribute("checked", "checked");
		}
		if(item.chain[1] == "yes") {
			$("chainMeshSuit").setAttribute("checked", "checked");
		}
		if(item.map[1] == "yes") {
			$("topographicalMap").setAttribute("checked", "checked");
		}
		if(item.leatherman[1] == "yes") {
			$("leatherman").setAttribute("checked", "checked");
		}
		if(item.rucksack[1] == "yes") {
			$("rucksack").setAttribute("checked", "checked");
		}
		if(item.boots[1] == "yes") {
			$("boots").setAttribute("checked", "checked");
		}
		if(item.matches[1] == "yes") {
			$("matches").setAttribute("checked", "checked");
		}
		if(item.p38[1] == "yes") {
			$("p38").setAttribute("checked", "checked");
		}
		if(item.intestinal[1] == "yes") {
			$("intestinalFortitude").setAttribute("checked", "checked");
		}

		$("readiness").value = item.readiness[1]; 
		$("date").value = item.date[1];
		$("comments").value = item.comments[1];
		$("groups").value = item.fear[1];     		
		$("item").value = item.item[1];
		$("email").value = item.email[1];

		save.removeEventListener("click", storeData);
		$("submit").value = "Edit Checklist";
		var editSubmit = $("submit");
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
};	

	var clearLocal = function () {
			if (localStorage.length === 0) {
				alert("All clear.")
				}else{
					localStorage.clear();
					window.location.reload();
					return false;
			}
	};

	var deleteItem =function () {
		var ask = confirm("Are you sure you want to erase this Checklist? Has a cure been found?");
		if (ask) {
			localStorage.removeItem(this.key);
			alert("Thank God for the cure, your checklist has been deleted!!");
			window.location.reload();
		} else {
			alert("Checklist not erased");
		}
	}

	var validate = function (e) {
		var getEmail = $("email");
		var getComments = $("comments");
		var getDate = $("date");

		errMsg.innerHTML = ""; 
		getComments.style.border = "1px solid black";
		getDate.style.border = "1px solid black";
		getEmail.style.border = "1px solid black";

		var messagesArray = [];

		if (getComments.value == "" ) {
			var commentsError = "Please write a death letter.";
			getComments.style.border = "2px solid red";
			messagesArray.push(commentsError);
		}

		if (getDate.value == "" ) {
			var dateError = "Please mark when the world ended.";
			getDate.style.border = "2px solid red";
			messagesArray.push(dateError);
		}		

		var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!(re.exec(getEmail.value))) {
			var emailError = "Please use a valid emaill address.";
			getEmail.style.border = "2px solid red";
			messagesArray.push(emailError);
		}

		if(messagesArray.length >= 1) {
			for (var i = 0, j = messagesArray.length; i < j; i++) {
				var txt = document.createElement("li");
				txt.innerHTML = messagesArray[i];
				errMsg.appendChild(txt);
			}
			e.preventDefault();
			return false;
		} else { 
			storeData(this.key);
		}
	
	 };
	
	var apocalypseValue;
	var errMsg = $("error"); 
	var fearGroups = ["--Fear level--", "Are you kidding me?", "Opps I crapped my pants", "Psalm 144:1"];
	makeCats();
	var firearmValue;

	var displayLink = $("displayLink");
		displayLink.addEventListener("click", getData);
	 	var clearLink = $("clear");
		clearLink.addEventListener("click", clearLocal);
		var save = $("submit");
		save.addEventListener("click", validate);
});







