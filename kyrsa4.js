//Для построение в М-К
    var ctxMK = canvas_example1.getContext("2d");
   	var wMK = canvas_example1.width;
   	var hMK = canvas_example1.height;
  	ctxMK.translate(wMK/2, hMK/2);
  	var xMK = [];
  	var yMK = [];
  	var minMK = 1000;
  	var maxMK = -1000;
  	var nMK = 0;
  	var pointsMK;
  	var cur_pointsMK;
  	var okMK = 0;
  	var aMK;
  	var bMK;
  	var scalexMK, scaleyMK;
  	var dxMK;
  	var dyMK;
  	var funcMK;
  	var timeMK = 5000;
  	var dtMK;
  	var resultMK;
//Для трапеции
   var ctxTR = canvas_example2.getContext("2d");
   var wTR = canvas_example2.width;
   var hTR = canvas_example2.height;
   var aTR;
   var bTR;
   var funcTR;
   var maxTR = -100000;
   var minTR = 100000;
   var scaleTR, scale1TR, scale2TR;
   var xTR = [];
   var yTR = [];
   var resultTR = 0;
   ctxTR.translate(wTR/2, hTR/2);
//Для правых
   var ctxP = canvas_example3.getContext("2d");
   var wP = canvas_example3.width;
   var hP = canvas_example3.height;
   var aP;
   var bP;
   var funcP;
   var maxP = -100000;
   var minP = 100000;
   var scaleP, scale1P, scale2P;
   var xP = [];
   var yP = [];
   var resultP = 0;
   var dtP;
   var dxP = 0;
   var dyP = 0;
   ctxP.translate(wP/2, hP/2);
//Для левых
   var ctxL = canvas_example4.getContext("2d");
   var wL = canvas_example4.width;
   var hL = canvas_example4.height;
   var aL;
   var bL;
   var funcL;
   var maxL = -100000;
   var minL = 100000;
   var scaleL, scale1L, scale2L;
   var xL = [];
   var yL = [];
   var resultL = 0;
   var dtL;
   var dxL = 0;
   var dyL = 0;
   ctxL.translate(wL/2, hL/2);
//Для средних
   var ctxS = canvas_example5.getContext("2d");
   var wS = canvas_example5.width;
   var hS = canvas_example5.height;
   var aS;
   var bS;
   var funcS;
   var maxS = -100000;
   var minS = 100000;
   var scaleS, scale1S, scale2S;
   var xS = [];
   var yS = [];
   var resultS = 0;
   var dtS;
   var dxS = 0;
   var dyS = 0;
   ctxS.translate(wS/2, hS/2);
//Поле в котором все выводится
var input = document.querySelector('.input');
//Сохраненная часть выражения для возведения в степень
var power = "";
//строка для перевода
var result;
//Вставить символ
function insert(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else
        input.textContent += num;
}
//Очистить все поле
function clean() {
    input.textContent = "0";
    power = "";
}

//Удалить символ
function back() {
    var exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = "0";
    }
}

//Для добавления констант
function constant(name) {
    if (input.textContent == 0) {
        input.textContent = "";
    }
    if (name == "pi")
        input.textContent += "pi" ;
    if (name == "e")
        input.textContent += "e" ;
}
//степень
function operation(name) {
    if (name == "^") {
        power = input.textContent;
        input.textContent += "^(";
    }
}

//Логарифмы
function log(name) {
    if (input.textContent == 0) {
        input.textContent = "";
    }
    if (name == 'lg') {
        input.textContent += "lg(";
    }
    if (name == 'ln') {
        input.textContent += "ln(";
    }
}

//Синусы и косинусы
function f(name) {
    if (input.textContent == 0) {
        input.textContent = "";
    }
    if (name == 'sin') {
            input.textContent += "sin(";
        }        
    if (name == 'cos') {
            input.textContent += "cos(";
        } 
    if (name == 'tan') {
            input.textContent += "tg(";
        }  
}

function equal(){
    result = input.textContent;
    //console.log(result);
    var newstr1 = result.replace(/sin/gi, 'Math.sin');
    var newstr2 = newstr1.replace(/cos/gi, 'Math.cos');
    var newstr3 = newstr2.replace(/tg/gi, 'Math.tan');
    var newstr4 = newstr3.replace(/lg/gi, 'Math.log10');
    var newstr5 = newstr4.replace(/ln/gi, 'Math.log');
    var newstr6 = newstr5.replace(/pi/gi, 'Math.PI');
    var newstr7 = newstr6.replace(/e/gi, 'Math.E');
    console.log(newstr7);
    
    //Монте-Карло
    //функция
  	function fMK(x){
  		return (eval(funcMK));
  	}
  
  	function searchMK(){
 
  		funcMK = newstr7;
  
  		for (var i = aMK; i < bMK; i+=0.001){
  
  			//максимум
  			if (fMK(i) > maxMK){
  				maxMK = fMK(i);
  			}
  
  			//минимум
  			if (fMK(i) < minMK){
  				minMK = fMK(i);
  			}
  		}
  
  		//масштаб
      scaleyMK = 100/(Math.abs(maxMK) + Math.abs(minMK));
  
  		if (Math.abs(bMK) >= Math.abs(aMK)){
  			scalexMK = 250/bMK * 0.9;
  		}
 
  		if (Math.abs(bMK) < Math.abs(aMK)){
  			scalexMK = 250/Math.abs(aMK) * 0.9;
  		}
  
       //сдвиг
  		dxMK = (bMK + aMK)/2;
  		dyMK = (maxMK + minMK)/2;
  
  		//точки
  		//points = 100;
  	}
  
  	function calculationMK(){
  
  		cur_pointsMK++;
  
  		//положительная функция
  		if (minMK * maxMK >= 0 && minMK >= 0 && nMK < pointsMK){
  			xMK[nMK] = Math.random() * (bMK - aMK) + aMK;
  			yMK[nMK] = Math.random() * (maxMK - 0) + 0;
  
  			if (yMK[nMK] < fMK(xMK[nMK])){
  				okMK++;
  			}
  
  
  			resultMK = (okMK / cur_pointsMK) * (bMK - aMK) * maxMK;
  			nMK++;
  
  		}
  
  		//отрицательная функция
  		if (minMK * maxMK >= 0 && maxMK <= 0 && nMK < pointsMK){
  			xMK[nMK] = Math.random() * (bMK - aMK) + aMK;
  			yMK[nMK] = Math.random() * (minMK - 0) + 0;
  
 			if (yMK[nMK] > fMK(xMK[nMK])){
 				okMK++;
 			}
 
 			resultMK = -(okMK/cur_pointsMK) * (bMK - aMK) * (-minMK);
  			nMK++;
 		}
 
 		//знакопеременные функции
 		if (minMK * maxMK < 0 && nMK < pointsMK){
 
 			xMK[nMK] = Math.random() * (bMK - aMK) + aMK;
 			yMK[nMK] = Math.random() * (maxMK - minMK) + minMK;
 
 
 			if (yMK[nMK] > 0 && fMK(xMK[nMK]) > 0 && yMK[nMK] < fMK(xMK[nMK])){
 				okMK++;
 			}
 
 			if (yMK[nMK] < 0 && fMK(xMK[nMK]) < 0 && yMK[nMK] > fMK(xMK[nMK])){
 				okMK--;
 			}
 
 			resultMK = (okMK/cur_pointsMK) * (bMK - aMK) * (maxMK - minMK);
 			nMK++;
 		}
 	}
       
 
 	function drawMK(){
 		//оси
 		ctxMK.beginPath();
 		ctxMK.moveTo(0 - dxMK * scalexMK, -hMK/2);
 		ctxMK.lineTo(0 - dxMK * scalexMK, hMK/2);
 		ctxMK.moveTo(wMK/2 , dyMK * scaleyMK);
 		ctxMK.lineTo(-wMK/2 , dyMK * scaleyMK);
 		ctxMK.stroke();
        
 		//кривая
 		ctxMK.beginPath();
 		for (var i = aMK; i < bMK; i+=0.001){
 			ctxMK.moveTo((i - dxMK) * scalexMK, (-fMK(i) + dyMK) * scaleyMK);
 			ctxMK.lineTo((i+0.001 - dxMK) * scalexMK, (-fMK(i+0.001) + dyMK) * scaleyMK);
 		}
 		ctxMK.stroke();
 
 		//точки
 		ctxMK.fillStyle = 'red';
 		ctxMK.beginPath();
 		ctxMK.arc((xMK[nMK-1] - dxMK) * scalexMK, (-yMK[nMK-1] + dyMK) * scaleyMK, 1, 0, 2 * Math.PI);
 		ctxMK.fill(); 
 	}
 
 	function controlMK(){
 		calculationMK();
 		drawMK();
 		document.getElementById("result1").innerHTML = Math.round(resultMK * 100)/100;
 	}
 
 		cur_pointsMK = 0;
 		pointsMK = parseFloat(document.getElementById("qual").value);
 		dtMK = timeMK/pointsMK;
 		aMK = parseFloat(document.getElementById("a1").value);
 		bMK = parseFloat(document.getElementById("b1").value);
 		searchMK();
 		var nameMK = setInterval(controlMK, dtMK);

    //Метод трапеции
      //функция
   function fTR(x){
     return (eval(funcTR));
   }
 
   function inputTR(){
 
     aTR = parseFloat(document.getElementById("a1").value);
     bTR = parseFloat(document.getElementById("b1").value);
     funcTR = newstr7;
     numberTR = parseFloat(document.getElementById('qual2').value);
 
     //минимум и максимум
     for (var i = aTR; i < bTR; i+=0.001){
 
 			//максимум
 			if (fTR(i) > maxTR){
 				maxTR = fTR(i);
 			}
  			//минимум
 			if (fTR(i) < minTR){
 				minTR = fTR(i);
 			}
 		}
 
     //масштаб
     scaleyTR = 100/(Math.abs(maxTR) + Math.abs(minTR));
 
     if (Math.abs(bTR) >= Math.abs(aTR)){
       scalexTR = 250/bTR * 0.9;
     }
 
     if (Math.abs(bTR) < Math.abs(aTR)){
       scalexTR = 250/Math.abs(aTR) * 0.9;
     }
 
     //сдвиг
     dxTR = (bTR + aTR)/2;
     dyTR = (maxTR + minTR)/2;
     dtTR = (bTR - aTR)/numberTR;
 
     //разбиение
     for (var i = aTR; i < bTR + 1/2 * dtTR; i += dtTR){
       xTR.push(i);
       yTR.push(fTR(i));
     }
   }
 
   function calculationTR(){
     for (var i = 0; i < numberTR; i++){
 
       if (fTR(xTR[i]) >= 0 && fTR(xTR[i+1]) >= 0){
         resultTR += (xTR[i + 1] - xTR[i]) * (Math.abs(yTR[i]) + Math.abs(yTR[i + 1])) * 0.5;
       }
 
       if (fTR(xTR[i]) < 0 && fTR(xTR[i+1]) < 0){
         resultTR -= (xTR[i + 1] - xTR[i]) * (Math.abs(yTR[i]) + Math.abs(yTR[i + 1])) * 0.5;
       }
 
       else{
         resultTR += 0;
       }
 
     }
   }
 
   function drawTR(){
 
     //оси
 		ctxTR.beginPath();
 		ctxTR.moveTo(0 - dxTR * scalexTR, -hTR/2);
 		ctxTR.lineTo(0 - dxTR * scalexTR, hTR/2);
 		ctxTR.moveTo(wTR/2 , 0 + dyTR * scaleyTR);
 		ctxTR.lineTo(-wTR/2 , 0 + dyTR * scaleyTR);
 		ctxTR.stroke();
 
     //кривая
     ctxTR.beginPath();
     for (var i = aTR; i < bTR; i+=0.01){
       ctxTR.moveTo((i - dxTR) * scalexTR, (-fTR(i) + dyTR) * scaleyTR);
       ctxTR.lineTo((i + 0.01 - dxTR) * scalexTR, (-fTR(i + 0.01) + dyTR) * scaleyTR);
     }
     ctxTR.stroke();
 
     ctxTR.strokeStyle = 'red';
 
     //разбиение
     ctxTR.beginPath();
     for (var i = 0; i < numberTR + 1; i++){
       ctxTR.moveTo((xTR[i] - dxTR) * scalexTR, dyTR * scaleyTR);
       ctxTR.lineTo((xTR[i] - dxTR) * scalexTR, (-yTR[i] + dyTR) * scaleyTR)
     }
     ctxTR.stroke();
 
     ctxTR.beginPath();
     for(var i = 0; i < numberTR; i++){
       ctxTR.moveTo((xTR[i] - dxTR) * scalexTR, (-yTR[i] + dyTR) * scaleyTR);
       ctxTR.lineTo((xTR[i+1] - dxTR) * scalexTR, (-yTR[i+1] + dyTR) * scaleyTR);
     }
     ctxTR.stroke();
 
   }
 
     inputTR();
     calculationTR();
     document.getElementById("result2").innerHTML = Math.round(resultTR * 100)/100;
     drawTR();
   
    //Метод правых
       //функция
   function fP(x){
     return (eval(funcP));
   }
 
   function inputP(){
 
     aP = parseFloat(document.getElementById("a1").value);
     bP = parseFloat(document.getElementById("b1").value);
     funcP = newstr7;
     var numberP = parseFloat(document.getElementById('qual2').value);
     dxP = (bP - aP)/numberP;
 
     //минимум и максимум
     for (var i = aP; i < bP; i+=0.001){
 
 			//максимум
 			if (fP(i) > maxP){
 				maxP = fP(i);
 			}
 
 			//минимум
 			if (fP(i) < minP){
 				minP = fP(i);
 			}
 		}
 
     //масштаб
     scaleyP = 100/(Math.abs(maxP) + Math.abs(minP));
 
 		if (Math.abs(bP) >= Math.abs(aP)){
 			scalexP = 250/bP * 0.9;
 		}
 
 		if (Math.abs(bP) < Math.abs(aP)){
 			scalexP = 250/Math.abs(aP) * 0.9;
 		}
 
     //сдвиг
 		dxP = (bP + aP)/2;
 		dyP = (maxP + minP)/2;
     dtP = (bP - aP)/numberP;
 
   }
 
   function calculationP(){
 
     
       for (var i = aP+dtP; i < bP; i += dtP){
 
         if (fP(i) >= 0 & fP(i + dtP) >= 0){
           resultP += Math.abs(fP(i))*dtP;
         }
 
         if (fP(i) < 0 & fP(i + dtP) < 0){
           resultP -= Math.abs(fP(i))*dtP;
         }
 
         else{
           resultP += 0;
         }
 
       }
     
         }
    
 
   function drawP(){
 
     //оси
 		ctxP.beginPath();
 		ctxP.moveTo(0 - dxP * scalexP, -hP/2);
 		ctxP.lineTo(0 - dxP * scalexP, hP/2);
 		ctxP.moveTo(wP/2 , 0 + dyP * scaleyP);
 		ctxP.lineTo(-wP/2 , 0 + dyP * scaleyP);
 		ctxP.stroke();
 
     //кривая
     ctxP.beginPath();
     for (var i = aP; i < bP; i+=0.01){
       ctxP.moveTo((i - dxP) * scalexP, (-fP(i) + dyP) * scaleyP);
       ctxP.lineTo((i + 0.01 - dxP) * scalexP, (-fP(i + 0.01) + dyP) * scaleyP);
     }
     ctxP.stroke();
 
     ctxP.strokeStyle = 'red';
 
       for (var i = aP+dtP; i < bP + dtP/2; i += dtP){
         if(fP(i) >= 0){
           ctxP.strokeRect((i - dxP) * scalexP, (-fP(i) + dyP) * scaleyP, dtP * scalexP, Math.abs(fP(i)) * scaleyP);
         }
         else{
           ctxP.strokeRect((i - dxP) * scalexP, (dyP) * scaleyP, dtP * scalexP, Math.abs(fP(i)) * scaleyP);
         }
       }
 
   }

     inputP();
     calculationP();
     drawP();
     document.getElementById("result3").innerHTML = Math.round(resultP * 100)/100;
 
    //Метод левых
       //функция
   function fL(x){
     return (eval(funcL));
   }
 
   function inputL(){
 
     aL = parseFloat(document.getElementById("a1").value);
     bL = parseFloat(document.getElementById("b1").value);
     funcL = newstr7;
     var numberL = parseFloat(document.getElementById('qual2').value);
     dxL = (bL - aL)/numberL;
 
     //минимум и максимум
     for (var i = aL; i < bL; i+=0.001){
 
 			//максимум
 			if (fL(i) > maxL){
 				maxL = fL(i);
 			}
 
 			//минимум
 			if (fL(i) < minL){
 				minL = fL(i);
 			}
 		}
 
     //масштаб
     scaleyL = 100/(Math.abs(maxL) + Math.abs(minL));
 
 		if (Math.abs(bL) >= Math.abs(aL)){
 			scalexL = 250/bL * 0.9;
 		}
 
 		if (Math.abs(bL) < Math.abs(aL)){
 			scalexL = 250/Math.abs(aL) * 0.9;
 		}
 
     //сдвиг
 		dxL = (bL + aL)/2;
 		dyL = (maxL + minL)/2;
     dtL = (bL - aL)/numberL;
 
   }
 
   function calculationL(){

       for (var i = aL; i < bL; i += dtL){
         if (fL(i) >= 0 & fL(i + dtL) >= 0){
           resultL += Math.abs(fL(i))*dtL;
         }
 
         if (fL(i) < 0 & fL(i + dtL) < 0){
           resultL -= Math.abs(fL(i))*dtL;
         }
 
         else{
           resultL += 0;
         }
       }
 
   }
 
   function drawL(){
 
     //оси
 		ctxL.beginPath();
 		ctxL.moveTo(0 - dxL * scalexL, -hL/2);
 		ctxL.lineTo(0 - dxL * scalexL, hL/2);
 		ctxL.moveTo(wL/2 , 0 + dyL * scaleyL);
 		ctxL.lineTo(-wL/2 , 0 + dyL * scaleyL);
 		ctxL.stroke();
 
     //кривая
     ctxL.beginPath();
     for (var i = aL; i < bL; i+=0.01){
       ctxL.moveTo((i - dxL) * scalexL, (-fL(i) + dyL) * scaleyL);
       ctxL.lineTo((i + 0.01 - dxL) * scalexL, (-fL(i + 0.01) + dyL) * scaleyL);
     }
     ctxL.stroke();
 
     ctxL.strokeStyle = 'red';


       for (var i = aL; i < bL - dtL/2; i += dtL){
         if(fL(i) >= 0){
           ctxL.strokeRect((i - dxL) * scalexL, (-fL(i) + dyL) * scaleyL, dtL * scalexL, Math.abs(fL(i)) * scaleyL);
         }
         else{
           ctxL.strokeRect((i - dxL) * scalexL, (dyL) * scaleyL, dtL * scalexL, Math.abs(fL(i)) * scaleyL);
         }
       }

   }
     inputL();
     calculationL();
     drawL();
     document.getElementById("result4").innerHTML = Math.round(resultL * 100)/100;

    //Метод средних
      //функция
   function fS(x){
     return (eval(funcS));
   }
 
   function inputS(){
 
     aS = parseFloat(document.getElementById("a1").value);
     bS = parseFloat(document.getElementById("b1").value);
     funcS = newstr7;
     var numberS = parseFloat(document.getElementById('qual2').value);
     dxS = (bS - aS)/numberS;
 
     //минимум и максимум
     for (var i = aS; i < bS; i+=0.001){
 
 			//максимум
 			if (fS(i) > maxS){
 				maxS = fS(i);
 			}
 
 			//минимум
 			if (fS(i) < minS){
 				minS = fS(i);
 			}
 		}
 
     //масштаб
     scaleyS = 100/(Math.abs(maxS) + Math.abs(minS));
 
 		if (Math.abs(bS) >= Math.abs(aS)){
 			scalexS = 250/bS * 0.9;
 		}
 
 		if (Math.abs(bS) < Math.abs(aS)){
 			scalexS = 250/Math.abs(aS) * 0.9;
 		}
 
     //сдвиг
 		dxS = (bS + aS)/2;
 		dyS = (maxS + minS)/2;
     dtS = (bS - aS)/numberS;
 
   }
 
   function calculationS(){

       for (var i = aS + dtS/2 ; i < bS; i += dtS){
         if (fS(i) >= 0 & fS(i + dtS) >= 0){
           resultS += Math.abs(fS(i))*dtS;
         }
 
         if (fS(i) < 0 & fS(i + dtS) < 0){
           resultS -= Math.abs(fS(i))*dtS;
         }
 
         else{
           resultS += 0;
         }
       }
 
   }
 
   function drawS(){
 
     //оси
 		ctxS.beginPath();
 		ctxS.moveTo(0 - dxS * scalexS, -hS/2);
 		ctxS.lineTo(0 - dxS * scalexS, hS/2);
 		ctxS.moveTo(wS/2 , 0 + dyS * scaleyS);
 		ctxS.lineTo(-wS/2 , 0 + dyS * scaleyS);
 		ctxS.stroke();

     //кривая
     ctxS.beginPath();
     for (var i = aS; i < bS; i+=0.01){
       ctxS.moveTo((i - dxS) * scalexS, (-fS(i) + dyS) * scaleyS);
       ctxS.lineTo((i + 0.01 - dxS) * scalexS, (-fS(i + 0.01) + dyS) * scaleyS);
     }
     ctxS.stroke();
 
     ctxS.strokeStyle = 'red';

       for (var i = aS + dtS/2; i < bS + dtS/4; i += dtS){
         if(fS(i) >= 0){
           ctxS.strokeRect((i - dtS/2 - dxS) * scalexS, (-fS(i) + dyS) * scaleyS, dtS * scalexS, Math.abs(fS(i)) * scaleyS);
         }
         else{
           ctxS.strokeRect((i - dtS/2 - dxS) * scalexS, (dyS) * scaleyS, dtS * scalexS, Math.abs(fS(i)) * scaleyS);
         }
       }
     
   }

     inputS();
     calculationS();
     drawS();
     document.getElementById("result5").innerHTML = Math.round(resultS * 100)/100;
 
}





















