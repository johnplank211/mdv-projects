

var parseClform = function (data) {
	console.log(data);
}

$(document).ready(function(){



	var clf = $("#checklistForm"),
	    errorLink = $("#errorLink")
	
	clf.validate({
		invalidHandler: function(form, validator) {
			errorLink.click();
			var html = "";
			for (var key in validator.submitted) {
				var label = $("label[for^='"+ key +"']").not("[generated]");
				var legend = label.closest("fieldset").find(".ui-controlgroup-label")
				var fieldName = legend.length ? legend.text() : label.text();
				html += "<li>" + fieldName + "</li>";
			};
			$("#error ul").html(html);
		},
		submitHandler: function() {
			var data = clf.serializeArray();
			parseClform(data);
		}
	});




});

var toggleControls = function (n) {
		switch(n) {
			case "on":
				ge("CheckListForm").style.display = "none";
				ge("clear").style.display = "inline";
				ge("displayLink").style.display = "none";
				ge("addNew").style.display = "inline";
				break;
		   case "off":		
		   		ge("CheckListForm").style.display = "block";
				ge("clear").style.display = "inline";
				ge("displayLink").style.display = "inline";
				ge("addNew").style.display = "none";
				ge("items").style.display = "none";
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
			item.item		= ["Item:", ge("item").value];			
			item.date       = ["World Ended:", ge("date").value];
			item.email		= ["Email:", ge("email").value];
			item.comments	= ["Comments:", ge("comments").value];
			item.readiness  = ["Readiness:", ge("readiness").value];

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

var displayLink = ge("displayLink");
		displayLink.addEventListener("click", getData);
	 	var clearLink = ge("clear");
		clearLink.addEventListener("click", clearLocal);
		var save = ge("submit");
		save.addEventListener("click", validate);


