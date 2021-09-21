
function prepareEventHandlers() {
	document.getElementById("frmContact").onsubmit = function() {
		
        
         if (document.getElementById("tex").value == "") {
        	document.getElementById("errorDemo").innerHTML = "Please fill in your Name";
        	document.getElementById("errorDemo").setAttribute("class", "redder");
        	return false;
        } 
  else if (document.getElementById("email").value == "") {
        	document.getElementById("errorMessage").innerHTML = "Please provide an email";
        	document.getElementById("errorMessage").setAttribute("class", "redder");
        	return false;
        } 

        else if (document.getElementById("textt").value == "") {
        	document.getElementById("errorDemoo").innerHTML = "Please fill in this empty space";
        	document.getElementById("errorDemoo").setAttribute("class", "redder");
        	return false;
        } 

 else if (document.getElementById("area").value == "") {
        	document.getElementById("errorComment").innerHTML = "Please Kindly drop a Comment";
        	document.getElementById("errorComment").setAttribute("class", "redder");
        	return false;
        } 


	};
}

// when the document loads
window.onload =  function() {
	prepareEventHandlers();
};

function First() {
	document.getElementById("email").onfocus = function() {
		
        
         if (document.getElementById("tex").value == "") {
        	document.getElementById("errorDemo").innerHTML = "Please fill in your Name";
        	document.getElementById("errorDemo").setAttribute("class", "redder");
        	return false;
        } else{ document.getElementById("errorDemo").innerHTML="valid";

	document.getElementById("errorDemo").setAttribute("class", "change");
	return true;

	}
        }
    };


// when the document loads

	First();


function myFunc() {
	document.getElementById("textt").onfocus = function() {
		if (document.getElementById("email").value == "") {
        	document.getElementById("errorMessage").innerHTML = "Please provide an Email";
        	
        	document.getElementById("errorMessage").setAttribute("class", "redder");
        	
        	return false;
} 



else{
	document.getElementById("errorMessage").innerHTML="valid";
	document.getElementById("errorMessage").setAttribute("class", "change");
	return true;
	}
};
};

myFunc();



function func() {
	document.getElementById("tex").onblur = function() {
		if (document.getElementById("tex").value == "") {
			document.getElementById("errorDemo").innerHTML = "";
        	
		} else {
              document.getElementById("errorDemo").innerHTML = "valid";
              document.getElementById("errorDemo").setAttribute("class", "change");
		}


	}
};
func();

function perform() {
	document.getElementById("email").onblur = function() {
		if (document.getElementById("email").value == "") {
			document.getElementById("errorMessage").innerHTML = "";
        	
		} else {
              document.getElementById("errorMessage").innerHTML = "valid";
              document.getElementById("errorMessage").setAttribute("class", "change");
		}


	}
};
perform();



function perf() {
	document.getElementById("textt").onblur = function() {
		if (document.getElementById("textt").value == "") {
			document.getElementById("errorDemoo").innerHTML = "";
        	
		} else {
              document.getElementById("errorDemoo").innerHTML = "valid";
              document.getElementById("errorDemoo").setAttribute("class", "change");
		}


	}
};
perf();

function third() {
	document.getElementById("check").onclick = function() {
		document.getElementById("drop").innerHTML="Your login details will be saved for you next comment";

}
};

third();

function second() {
	document.getElementById("download").onclick =function() {
		alert("Downloading Ed sheeran Ft Justin Bieber(I Dont Care)");
	}
}
second();