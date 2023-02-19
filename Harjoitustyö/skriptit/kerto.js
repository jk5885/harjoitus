   
   
    var tulos;
    
    function kyssari()
        {
            let kertoja = Math.floor(Math.random()*10)+1;
            let y = Math.floor(Math.random()*10)+1;
            tulos = y*kertoja;
            document.getElementById("kysymys").innerHTML = "Anna tulos "+kertoja+"*"+y+":"; 
        }
    function tarkista(luku)
        {
            if (luku<1 || luku > 100)
                {
                    document.getElementById('tulo').innerHTML =
                    "<p>Anna vastaus lukuna väliltä 1-100.</p>";
                }
            else
                {
                    if (luku==tulos)
                        {
                            document.getElementById("tulo").innerHTML="Vastaus "+luku+" on oikein.\n Uusi kysymys yläpuolella."
                            kyssari();
                        }
                    else
                        {
                            document.getElementById("tulo").innerHTML="Vastaus "+luku+" on väärin. Oikea vastaus on "+tulos+"."+
                            "\n Uusi kysymys yläpuolella."
                            kyssari();
                        }
                }
        }
