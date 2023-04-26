function _$(val)
{
	return document.getElementById(val);
}
function _createElts(elts)
{
	return document.createElement(elts);
}

function resetloko()
{
	var casMor = document.getElementsByTagName('input');
	matRef[0] = new Array();
	matRef[0][0] = "."; matRef[0][1] = "."; matRef[0][2] = ".";
	matRef[1] = new Array();
	matRef[1][0] = "."; matRef[1][1] = "."; matRef[1][2] = ".";
	matRef[2] = new Array();
	matRef[2][0] = "."; matRef[2][1] = "."; matRef[2][2] = ".";
	for(i = 0 ; i < casMor.length ; i++){
		casMor[i].setAttribute("value","");
	}
}
function InitializeMatrice()
{
	matRef[0] = new Array();
	matRef[0][0] = "."; matRef[0][1] = "."; matRef[0][2] = ".";
	matRef[1] = new Array();
	matRef[1][0] = "."; matRef[1][1] = "."; matRef[1][2] = ".";
	matRef[2] = new Array();
	matRef[2][0] = "."; matRef[2][1] = "."; matRef[2][2] = ".";
}

function Score()
{
	var	lb_Score1 = _$('ScoreP1'), lb_Score2 = _$('ScoreP2');
	lb_Score1.innerHTML = "";
	lb_Score1.innerHTML = ScorP1;
	lb_Score2.innerHTML = "";
	lb_Score2.innerHTML = ScorP2;
}

var tour="X", matRef = new Array(), ScorP1 = 0, ScorP2 = 0,nomP1,nomP2;
InitializeMatrice();

function testerJoueur(valMat){
	if(valMat == "X"){
			alert("Mandresy ny Pilalao 1");
			ScorP1 += 1;
			Score();
			resetloko();
			InitializeMatrice();
			for (i = 0 ; i < 3 ; i ++){
				for(j = 0 ; j < 3 ; j++){
					_$("b_" + i + "_" + j).style.background = "none";
				}
			}
			
		}else if(valMat == "O")
		{
			alert("Mandresy ny Pilalao 1");
			ScorP2 += 1;
			Score();
			resetloko();
			InitializeMatrice();
			for (i = 0 ; i < 3; i ++){
				for(j = 0 ; j < 3 ; j++){
					_$("b_" + i + "_" + j).style.backgroundImage = "none";
				}
			}

		}
}
function jouerloko(nomId,elt) {
	
	switch(nomId){
		case "b_0_0" :
			matRef[0][0] = elt;break;
		case "b_0_1" :
			matRef[0][1] = elt;break;
		case "b_0_2" :
			matRef[0][2] = elt;break;
		case "b_1_0" :
			matRef[1][0] = elt;break;
		case "b_1_1" :
			matRef[1][1] = elt;break;
		case "b_1_2" :
			matRef[1][2] = elt;break;
		case "b_2_0" :
			matRef[2][0] = elt;break;
		case "b_2_1" :
			matRef[2][1] = elt;break;
		case "b_2_2" :
			matRef[2][2] = elt;break;
		default:
			alert("Tsy Izy");
	}

	
	if((matRef[0][0] == matRef[0][1]) && (matRef[0][0] == matRef[0][2]) && (matRef[0][1] == matRef[0][2]))
	{
		testerJoueur(matRef[0][0]);
	}else if((matRef[0][0] == matRef[1][0]) && (matRef[0][0] == matRef[2][0]) && (matRef[1][0] == matRef[2][0]))
	{
		testerJoueur(matRef[0][0]);
	}else if((matRef[0][0] == matRef[1][1]) && (matRef[0][0] == matRef[2][2]) && (matRef[1][1] == matRef[2][2]))
	{
		testerJoueur(matRef[0][0]);
	}else if((matRef[0][1] == matRef[1][1]) && (matRef[0][1] == matRef[2][1]) && (matRef[1][1] == matRef[2][1]))
	{
		testerJoueur(matRef[0][1]);
	}else if((matRef[0][2] == matRef[1][1]) && (matRef[0][2] == matRef[2][0]) && (matRef[1][1] == matRef[2][0]))
	{
		testerJoueur(matRef[0][2]);
	}else if((matRef[1][0] == matRef[1][1]) && (matRef[1][0] == matRef[1][2]) && (matRef[1][1] == matRef[1][2]))
	{
		testerJoueur(matRef[1][0]);
	}else if((matRef[2][0] == matRef[2][1]) && (matRef[2][0] == matRef[2][2]) && (matRef[2][1] == matRef[2][2]))
	{
		testerJoueur(matRef[2][0]);
	}
}
function monterCasse()
{
	var elt_parent = _$('tab_morp');
	
	for (i = 0; i < 3 ; i++)
	{
		var newelts = _createElts('tr');
		elt_parent.appendChild(newelts);
		for(j = 0; j < 3 ; j++)
		{
			var newseltsChild = _createElts('td');
			newelts.appendChild(newseltsChild);
			var newBout = _createElts('input');
			newBout.type = "button";
			newBout.value = "";
			newBout.id = "b_" + i + "_" + j;
			newseltsChild.appendChild(newBout);
		}
	}
}
function cocherB()
{
	var inputs = document.getElementsByTagName("input");
	for( i = 0; i<inputs.length; i++)
	{
		inputs[i].addEventListener("click",function()
		{
			if(tour == "X")
			{
				if(this.getAttribute('value') == "")
				{
					this.setAttribute("value",tour);
					imagecocher(tour,this.getAttribute("id"));
					jouerloko(this.getAttribute("id"),tour);
					testCaseFeno();
					tour = "O";
				}
				else
				{
					alert("veuillez cliqué sur les bouton vide")
				}
			} else
			{
				if(this.getAttribute('value') == "")
				{
					this.setAttribute("value",tour);
					imagecocher(tour,this.getAttribute("id"));
					jouerloko(this.getAttribute("id"),tour);
					testCaseFeno();
					tour = "X";
				}
				else
				{
					alert("veuillez cliqué sur les bouton vide")
				}
		}});
	}			
}
function imagecocher(turn,idInput){
	if(turn == "X"){
		_$("" + idInput).style.backgroundImage = 'none';
		_$("" + idInput).style.backgroundImage = 'url(b_1.jpg)';
		_$("" + idInput).style.backgroundRepeat = 'round';
	}else{
		_$("" + idInput).style.backgroundImage = 'none';
		_$("" + idInput).style.backgroundImage = 'url(b_2.jpg)';
		_$("" + idInput).style.backgroundRepeat = 'round';
	}
}
function testCaseFeno(){
	var test = 9;
	for(i = 0; i < 3; i++)
	{
		for(j=0;j<3;j++)
		{
			if(matRef[i][j] != ".")
			{
				test -= 1;
			}
		}
	}
	if(test == 0)
	{
		alert("Sahala ny lalao");
		resetloko();
		InitializeMatrice();
		for (i = 0 ; i < 3; i ++){
				for(j = 0 ; j < 3 ; j++){
					_$("b_" + i + "_" + j).style.background = "none";
				}
			}
	}

}
function nomJoueur(){
	var j1 = _$('nomP1'),j2 = _$('nomP2');
	nomP1 = prompt('Anarana pilalao n°: 1 ');
	nomP2 = prompt('Anarana pilalao n°: 2 ');
	j1.innerHTML = "";
	j1.innerHTML = nomP1;
	j2.innerHTML = "";
	j2.innerHTML = nomP2;
}
nomJoueur();
monterCasse();
cocherB();