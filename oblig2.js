  // controller 



  // Her blir stolpe nummer fra venstre markert ved click
     function selectedBar(barNo) {
         if (barNo == chosenBar) {
             chosenBar = '';
         }  else {
             chosenBar = barNo;
         }
         show();
     }



     // Denne fjerner markert stolpe.
     function removeBar() {
        numbers.splice(chosenBar -1,  1);
        show();
     }



     // Denne funksjonen endrer markert stolpe til ønsket verdi via input feltet.
     function changeBar() {
         if (inputValue > 10 || inputValue < 1) {
             alert('Feil, tallet er ikke mellom 1 og 10.');
         } else if(inputValue <= 10 && inputValue >=1) {
             numbers [chosenBar -1 ] = parseInt(inputValue);
         }
         show();
     }



      // Her legger man til stolpe med ønsket verdi (0-10) i input feltet.
     function addBar() {
         if (inputValue > 10 || inputValue < 1) {
             alert('Feil, tallet er ikke mellom 1 og 10');
        } else if (inputValue <= 10 && inputValue >=1) {
            numbers.push(inputValue);
        }
        show();
     }