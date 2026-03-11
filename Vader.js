function myclick() {

    var x = document.getElementById('yes');
    if (window.getComputedStyle(x).display == "flex") {
        x.style.display = "none";
        console.log("hej");
    }

    else if (window.getComputedStyle(x).display == "none") {
        x.style.display = "flex";
        console.log("hej");
    }


}
function dag1(){
    var x = document.getElementById('dag1');
    if (window.getComputedStyle(x).display == "flex") {
        x.style.display = "none";
        console.log("hej");
    }

    else if (window.getComputedStyle(x).display == "none") {
        x.style.display = "flex";
        console.log("hej");
    }
}
function dag2(){
    var x = document.getElementById('dag2');
    if (window.getComputedStyle(x).display == "flex") {
        x.style.display = "none";
        console.log("hej");
    }

    else if (window.getComputedStyle(x).display == "none") {
        x.style.display = "flex";
        console.log("hej");
    }
}
function dag3(){
    var x = document.getElementById('dag3');
    if (window.getComputedStyle(x).display == "flex") {
        x.style.display = "none";
        console.log("hej");
    }

    else if (window.getComputedStyle(x).display == "none") {
        x.style.display = "flex";
        console.log("hej");
    }
}
function dag4(){
    var x = document.getElementById('dag4');
    if (window.getComputedStyle(x).display == "flex") {
        x.style.display = "none";
        console.log("hej");
    }

    else if (window.getComputedStyle(x).display == "none") {
        x.style.display = "flex";
        console.log("hej");
    }
}
function dag5(){
    var x = document.getElementById('dag5');
    if (window.getComputedStyle(x).display == "flex") {
        x.style.display = "none";
        console.log("hej");
    }

    else if (window.getComputedStyle(x).display == "none") {
        x.style.display = "flex";
        console.log("hej");
    }
}

async function HeedMyCall() {
    try {
        const a = urlabducter();
        let INfo = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+a+"&appid=8fb84302d94adf0a3b8bf2f3be04e4a2"); //https://api.openweathermap.org/data/2.5/forecast?q=luleå&appid=8fb84302d94adf0a3b8bf2f3be04e4a2
        if (!INfo.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
            
        var fil = await INfo.json();

        const wader = fil.list.map(item => ({
            datum: item.dt_txt,
            temp: item.main.temp,
            kanns: item.main.feels_like,
            humuditet: item.main.humidity,
            vader: item.weather[0].main,
            tryck: item.main.pressure,
            Apiforklarelse: item.weather[0].description,
            icon: item.weather[0].icon,
            wind: item.wind.speed,
            city: fil.city.name,
            
        }));
            let e = 0;
            console.log(wader);
            var Firsticon = wader[e].icon;
            var icon = wader[e].icon;
            var temp = parseInt(wader[e].temp);
            var kanns = parseInt(wader[e].kanns);
            var forklarelse = wader[e].Apiforklarelse;
            
            document.getElementById("sol").src="https://openweathermap.org/payload/api/media/file/"+Firsticon+".png";
            document.getElementById("forklara").innerHTML = forklarelse;
            document.getElementById("temprertayur").innerHTML = "Temp "+(temp-273)+"°C";
            document.getElementById("temprereaturkanns").innerHTML = "Känns "+(kanns-273)+"°C";
            var count = 1;
            var count2 = 0;
           while(true){
                var veckodagyes = "Erm";
                var d = wader[e].datum; //tar datum ur min lista av wader ovan
                const l = new Date(d);
                let dagensdag = l.getDay();
                dagensdag--; dagensdag--;
                if(dagensdag==-1){
                    veckodagyes = "Måndag"
                }else if(dagensdag==0){
                    veckodagyes = "tisdag"
                }else if(dagensdag==1){
                    veckodagyes = "Onsdag"
                }else if(dagensdag==2){
                    veckodagyes = "Torsdag"
                }else if(dagensdag==3){
                    veckodagyes = "Fredag"
                }else if(dagensdag==4){
                    veckodagyes = "Lördag"
                }else if(dagensdag==-2){
                    veckodagyes = "Söndag"
                }

                icon = wader[e].icon;
                var f = d.substring(8,10);//2026-02-11 12:00:00 isolerar 11
                var tid = d.substring(11,13);
                var b = parseInt(d); // gör till int
                var dag = parseInt(f); // gör till int
                temp = parseInt(wader[e].temp); //mobil
                kanns = parseInt(wader[e].kanns);
                var humuditet = parseInt(wader[e].humuditet);
                var tryck = parseInt(wader[e].tryck);
                var wind = parseInt(wader[e].wind); // mobil
                var c = dag+1; //uhhhhhhhhhhh gör variabel c 👍
                var charliebrown = parseInt(d.substring(5,7));
                var snobel = parseInt(d.substring(5,7));
                while(true){ // loop
                    const row = document.createElement("div");
                    row.className = "weather";
                    const paratemp = document.createElement("p");
                    const paratid = document.createElement("p");
                    const parawind = document.createElement("p");
                    const paraicon = document.createElement("img");
                    const paratryck = document.createElement("p");
                    paratryck.className = "erm"
                    paratryck.innerHTML = tryck+"pa";
                    paratid.innerHTML = tid+":";
                    paratemp.innerHTML = temp-273+"°C";
                    parawind.innerHTML = wind +"m/s";
                    paraicon.src = "https://openweathermap.org/payload/api/media/file/"+icon+".png";
                    row.appendChild(paratid);
                    row.appendChild(paratemp);
                    row.appendChild(parawind);
                    row.appendChild(paratryck);
                    row.appendChild(paraicon);
                    console.log(dagensdag);
                    console.log(veckodagyes);
                    count++; //tror useless
                    if(count2==5){ //osäker om den funkar på andra dagar, den funkar nu men... jag vet inte hur. IF it works dont fix it 👍👍👍
                        break; // hehe break
                    }
                    console.log(dag+" "+ c);
                    if(dag==c){ // dag separerare
                        
                        console.log(count2);
                        count=0; // just nu useless
                        count2++; //hjälper att stoppa dag 6 ⬆️
                        break; // break
                    }else if(charliebrown==snobel+1){ //för att kolla att månaden för u helevete funkar 
                        console.log(count2);
                        count=0; // just nu useless
                        count2++; //hjälper att stoppa dag 6 ⬆️
                        break; // break
                    }else {
                    console.log(d);
                    if(count2==0){

                        document.getElementById("dag1").appendChild(row); 
                        document.getElementById("e1").innerHTML = veckodagyes;
                        document.getElementById("icon1").src = "https://openweathermap.org/payload/api/media/file/"+icon+".png";
                    } 
                    if(count2==1){
                        document.getElementById("dag2").appendChild(row);
                        document.getElementById("e2").innerHTML = veckodagyes;
                        document.getElementById("icon2").src = "https://openweathermap.org/payload/api/media/file/"+icon+".png";
                    }
                    if(count2==2){
                        document.getElementById("dag3").appendChild(row);
                        document.getElementById("e3").innerHTML = veckodagyes;
                        document.getElementById("icon3").src = "https://openweathermap.org/payload/api/media/file/"+icon+".png";
                    }
                    if(count2==3){
                        document.getElementById("dag4").appendChild(row);
                        document.getElementById("e4").innerHTML = veckodagyes;
                        document.getElementById("icon4").src = "https://openweathermap.org/payload/api/media/file/"+icon+".png";
                    }
                    if(count2==4){
                        document.getElementById("dag5").appendChild(row);
                        document.getElementById("e5").innerHTML = veckodagyes;
                        document.getElementById("icon5").src = "https://openweathermap.org/payload/api/media/file/"+icon+".png";
                    }
                    
                    c = dag+1; //refresh
                    e++;
                    d = wader[e].datum; //refresh
                    f = d.substring(8,10) //refresh
                    dag = parseInt(f); //refresh
                    b = parseInt(d); //refresh
                    tid = d.substring(11,13);
                    temp = parseInt(wader[e].temp);
                    icon = wader[e].icon;
                    charliebrown = parseInt(d.substring(5,7)); 
                    }
                }
                if(count2==5){
                break;
            }
                //björns kommentar under (probably)
                console.log(icon);
                document.getElementById("phenieous").src = "https://openweathermap.org/payload/api/media/file/"+icon+".png" // ska vara en bild men just nu är det en icon för det är enklare
                if(Firsticon == "01d"){
                document.getElementById("phenieous").src = "https://cataas.com/cat"; //klart erm tro mig det är inte en kitty generator
                document.getElementById("balalalalalala").innerHTML = "The cat is a deadly laser";//martin
                }else if(Firsticon == "02d"){
                document.getElementById("phenieous").src = "images/Fewcloudsfuckyou.jpg"; //mycket liten mängd måln, den man skulle säga att det är klart med
                document.getElementById("balalalalalala").innerHTML = "Inom inlandet av sverige när det är kalt med lite högtryck så kan man se några moln på den klara himlen";
                }else if(Firsticon == "03d"){
                document.getElementById("phenieous").src = "images/Scattered_clouds.jpg"; // halva himlen täckt med måln
                document.getElementById("balalalalalala").innerHTML = "När himlen är täckt med 25-50% måln";
                }else if(Firsticon == "04d"){
                document.getElementById("phenieous").src = "images/Mulet.jpg"; // 80% av himlen täckt med moln 
                document.getElementById("balalalalalala").innerHTML = "Ett grått täcke' qoute av Frank";
                }else if(Firsticon == "09d"){
                document.getElementById("phenieous").src = "images/Regn.jpg"; // skurregn kan dock vara svårt att få en bild på med vårt väder och att det är vinter
                document.getElementById("balalalalalala").innerHTML = "HELP I'M DROWNING";//martin
                }else if(Firsticon == "10d"){
                document.getElementById("phenieous").src = "images/Regn.jpg"; // Normal regn
                document.getElementById("balalalalalala").innerHTML = "I'm drowning but not as fast"; //martin
                }else if(Firsticon == "11d"){
                document.getElementById("phenieous").src = "images/Regn.jpg"; // Blixt... vill lämna in denna uppgift i år
                document.getElementById("balalalalalala").innerHTML = "Wow bra jobbat du hittade ett ställe med blixt 🫸🫷🫸🫷🫸🫷🫸🫷🫸🫷🫸🫷";
                }else if(Firsticon == "13d"){
                document.getElementById("phenieous").src = "images/Jagtogverkligendennabild.jpg"; // snö
                document.getElementById("balalalalalala").innerHTML = "Änglarna skakar sina kuddar";
                }else if(Firsticon == "50d"){
                document.getElementById("phenieous").src = "images/Dimma.jpg"; // dimma
                document.getElementById("balalalalalala").innerHTML = "Detta phenomen som sänker sin synsräckvid ger en olycksbådande känsla och kan ge en ganska osäker känsla beroende på tid i detta fall så är det dag";
                }else if(Firsticon == "01n"){
                document.getElementById("phenieous").src = "images/Stjärnklart.jpg"; // stjärnklart
                document.getElementById("balalalalalala").innerHTML = "Innan månens ljusa 'strålar' når denna sida av himlen så kan du se ";
                }else if(Firsticon == "02n"){
                document.getElementById("phenieous").src = "images/Nightfewclouds.jpg"; // stjärnklart med några få moln
                document.getElementById("balalalalalala").innerHTML = "balalalalalalala";
                }else if(Firsticon == "03n"){
                document.getElementById("phenieous").src = "images/Night scattered clouds.png"; //halv täckt
                document.getElementById("balalalalalala").innerHTML = "balalalalalalala";
                }else if(Firsticon == "04n"){
                document.getElementById("phenieous").src = "images/Mulett.jpg"; // mulet 
                document.getElementById("balalalalalala").innerHTML = "Månen som gömmer sig backom lager av orörbara moln ger bara ett ";
                }else if(Firsticon == "09n"){
                document.getElementById("phenieous").src = "images/Regn.jpg"; //nattskurregn
                document.getElementById("balalalalalala").innerHTML = "HELP I'M DROWNING";//martin
                }else if(Firsticon == "10n"){
                document.getElementById("phenieous").src = "images/Regn.jpg"; //nattregn
                document.getElementById("balalalalalala").innerHTML = "I'm drowning but not as fast";//martin
                }else if(Firsticon == "11n"){
                document.getElementById("phenieous").src = "images/Regn.jpg";//natt bilxt
                document.getElementById("balalalalalala").innerHTML = "Wow bra jobbat du hittade ett ställe med blixt 🫸🫷🫸🫷🫸🫷🫸🫷🫸🫷🫸🫷"; 
                }else if(Firsticon == "13n"){
                document.getElementById("phenieous").src = "images/Jagtogverkligendennabild.jpg";//natt snö //jag tog verkligen denna bild tro mig
                document.getElementById("balalalalalala").innerHTML = "balalalalalalala";
                }else if(Firsticon == "50n"){
                document.getElementById("phenieous").src = "images/Dimma.jpg"; // nattdimma
                document.getElementById("balalalalalala").innerHTML = "Detta phenomen som sänker sin synsräckvid ger en olycksbådande känsla och kan ge en ganska osäker känsla beroende på tid i detta fall natt";
                }
                
            }
            
            
        

   } catch (error) {
        console.error(error)
    } 



}
function urlabducter(){
    const abducter = new URLSearchParams(window.location.search)
    return abducter.get("Sök");
    
    
}
function Testing(){
    const a = urlabducter();
    console.log(a);
    console.log(window.location.search)
}

