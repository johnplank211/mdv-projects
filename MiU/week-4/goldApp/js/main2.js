/*John Plank
Term 06/12
MUI Project 4
Apocalypse Checklist*/



/*var populate = function (data) {
	for (var i in data) {
		var item = data[i];
		var key = item.id;

		//var value = [item.id, item.name, item.cat ].join(";");

		storage.setItem(key, value);
	}
}*/
/*var checklist = function (data){

};*/



$(document).bind('pageinit', function(){
   
   var cform = $('#checklistForm');
       
       cform.validate({
       		invalidHandler: function(form, validator) {},

       		submitHandler: function() {
			var data = cform.serializeArray();
			localStorage.setItem("formdata", data);
			storeData(data);
			//getData(data);
		console.log(data);
		}

       });

});

/*window.addEventListener("DOMContentLoaded", function() {
		var ge = function(x) {
	    var theElement = document.getElementById(x);
		return theElement;
	};*/
$('#myPopupDiv').popup();


var ge = $;


var toggleControls;
//gets radio elements if checked
	var getRadio = function () {
		var radio = document.forms[0].apocalypse;
		for (var i = 0; i < radio.length; i++) {
			if (radio[i].checked) {
				apocalypseValue = radio[i].value;
			}

		}
	};

//gets checkbox if they are checked
	var getCheckBoxValue = function () {
		if(ge("firearm").checked){
			firearmValue = ge("firearm").value;
		}else{
			firearmValue = "No"
		}
		if(ge("ammo").checked){
			ammoValue = ge("ammo").value;
		}else{
			ammoValue = "No"
		}
		if(ge("meleeWeapon").checked){
			meleeWeaponValue = ge("meleeWeapon").value;
		}else{
			meleeWeaponValue = "No"
		}
		if(ge("cannedFood").checked){
			cannedValue = ge("cannedFood").value;
		}else{
			cannedValue = "No"
		}
		if(ge("water").checked){
			waterValue = ge("water").value;
		}else{
			waterValue = "No"
		}
		if(ge("chainMeshSuit").checked){
			chainMeshSuitValue = ge("chainMeshSuit").value;
 		}else{
			chainMeshSuitValue = "No"
		}
		if(ge("topographicalMap").checked){
			topographicalMapValue = ge("topographicalMap").value;
		}else{
			topographicalMapValue = "No"
		}
		if(ge("leatherman").checked){
			leathermanValue = ge("leatherman").value;
		}else{
			leathermanValue = "No"
		}
		if(ge("rucksack").checked){
			rucksackValue = ge("rucksack").value;
		}else{
			rucksackValue = "No"
		}
		if(ge("boots").checked){
			bootsValue = ge("boots").value;
		}else{
			bootsValue = "No"
		}
		if(ge("matches").checked){
			matchesValue = ge("matches").value;
		}else{
			matchesValue = "No"
		}
		if(ge("p38").checked){
			p38Value = ge("p38").value;
		}else{
			p38Value = "No"
		}
		if(ge("intestinalFortitude").checked){
			intestinalFortitudeValue = ge("intestinalFortitude").value;
		}else{
			intestinalFortitudeValue = "No"
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
			item.fear       = ["Fear level:", ge("groups").value];
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
			//item.item		= ["Item:", ge("item").value];			
			item.date       = ["World Ended:", ge("date").value];
			item.email		= ["Email:", ge("email").value];
			item.comments	= ["Comments:", ge("comments").value];
			item.readiness  = ["Readiness:", ge("readiness").value];

		localStorage.setItem(id, JSON.stringify(item));
		alert("Checklist Saved!");
	console.log(item);
	};


	var getData = function () {
		//toggleControls("on");
		if (localStorage.length === 0) {
			alert("There is no data in Local Storage so data was added. ");
			autoFillData();
		}

		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		ge("items").style.display = "display";
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

var editItem = function () {
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);

		//toggleControls("off");

		var radio = document.forms[0].apocalypse;
		for (var i = 0; i<radio.length; i++) {
			if (radio[i].value == "Natural" && item.apocalypse[1] == "Natural") {
				radio[i].setAttribute("checked", "checked");
			} else if (radio[i].value == "Atomic" && item.apocalypse[1] == "Atomic") {
				radio[i].setAttribute("checked", "checked");
			} else if (radio[i].value == "Zombie" && item.apocalypse[1] == "Zombie") {
				radio[i].setAttribute("checked", "checked");
			} else if (radio[i].value == "Aliens" && item.apocalypse[1] == "Aliens") {
				radio[i].setAttribute("checked", "checked");
			} else if (radio[i].value == "Biblical" && item.apocalypse[1] == "Biblical") {
				radio[i].setAttribute("checked", "checked");
		}	
		};		

		if(item.firearm[1] == "yes") {
			ge("firearm").setAttribute("checked", "checked");
		}
		if(item.ammo[1] == "yes") {
			ge("ammo").setAttribute("checked", "checked");
		}
		if(item.melee[1] == "yes") {
			ge("meleeWeapon").setAttribute("checked", "checked");
		}
		if(item.canned[1] == "yes") {
			ge("cannedFood").setAttribute("checked", "checked");
		}
		if(item.water[1] == "yes") {
			ge("water").setAttribute("checked", "checked");
		}
		if(item.chain[1] == "yes") {
			ge("chainMeshSuit").setAttribute("checked", "checked");
		}
		if(item.map[1] == "yes") {
			ge("topographicalMap").setAttribute("checked", "checked");
		}
		if(item.leatherman[1] == "yes") {
			ge("leatherman").setAttribute("checked", "checked");
		}
		if(item.rucksack[1] == "yes") {
			ge("rucksack").setAttribute("checked", "checked");
		}
		if(item.boots[1] == "yes") {
			ge("boots").setAttribute("checked", "checked");
		}
		if(item.matches[1] == "yes") {
			ge("matches").setAttribute("checked", "checked");
		}
		if(item.p38[1] == "yes") {
			ge("p38").setAttribute("checked", "checked");
		}
		if(item.intestinal[1] == "yes") {
			ge("intestinalFortitude").setAttribute("checked", "checked");
		}

		ge("readiness").value = item.readiness[1]; 
		ge("date").value = item.date[1];
		ge("comments").value = item.comments[1];
		ge("groups").value = item.fear[1];     		
		ge("item").value = item.item[1];
		ge("email").value = item.email[1];

		save.removeEventListener("click", storeData);
		ge("submit").value = "Edit Checklist";
		var editSubmit = ge("submit");
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


        var displayLink = ge("displayLink");
		displayLink.addEventListener("click", getData);
	 	var clearLink = ge("clear");
		clearLink.addEventListener("click", clearLocal);
		var save = ge("submit");
		save.addEventListener("click", validate);






