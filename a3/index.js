function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  upRight(pHeight, pColorEven, pColorOdd, pSymbol);
  downRight(pHeight, pColorEven, pColorOdd, pSymbol);
  upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i=0;i<pHeight;i++){
    rLine +="<p>";
    //Create each line on the Rhombus

   for(j=0;j<=i;j++){
   //Is the position even or odd so we change the color
   if (j%2)
     //even
     rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
   else
   //odd
   rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
}
rLine +="</p>";
}

  document.getElementById("upRight").innerHTML = rLine;
}

function upLeft(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i = 0; i < pHeight; i++) {
    rLine += "<p>";
    for (k = 0; k < pHeight - i - 1; k++) {
      rLine += "<span style='color: transparent;'>" + pSymbol + "</span>";
    }
    for (j = 0; j < i + 1; j++){
      // Is the position even or odd so we change the color
      if (j % 2) {
        // even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      } else {
        // odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
      }
    }
    rLine +="</p>";
  }

  document.getElementById("upLeft").innerHTML = rLine;
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i = pHeight; i > 0; i--) {
    rLine += "<p>";
    for (k = 0; k < pHeight - i; k++) {
      rLine += "<span style='color: transparent;'>" + pSymbol + "</span>";
    }
    for (j = 0; j < i; j++){
      // Is the position even or odd so we change the color
      if (j % 2) {
        // even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      } else {
        // odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
      }
    }
    rLine +="</p>";
  }

  document.getElementById("downLeft").innerHTML = rLine;
}


function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i=pHeight;i > 0;i--){
  rLine +="<p>";
  //Create each line on the Rhombus
  for(j=0;j<i;j++){
  //Is the position even or odd so we change the color
  if (j%2)
    //even
    rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
  else
    //odd
    rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

    }
  rLine +="</p>";
  }

  document.getElementById("downRight").innerHTML = rLine;
}
 <script src="index.js"></script>
