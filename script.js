// World Population Object
const topCountryPop = { 
    China:1451850431,
    India:1411028065,
    Usa:335398419,
    Indonesia:280149180,
    Pakistan:230933076,
    Brasil:215991635,
    Nigeria:218261472,
    Bangladesh:168442340,
    Russia:146074334,
    Mexico:132035319
}

topLaunguageSpo={
    English:1.348,
    Mandarin:1.120,
    Hindi:0.600,
    Spanish:0.543,
    Arabic:0.267,
    Russian:0.258,
    Portuguese:0.258,
    Urde:0.230
}

// defining my variable
let underButton = document.querySelector(".underButton")
let graphBody = document.querySelector(".graphBody");



// defining my functions
function population() {
    underButton.textContent = "Top 10 country in the world by population!";
    graphBody.innerHTML="";
    Object.entries(topCountryPop).forEach(([key, value]) => {
        const p1= document.createElement("p");
        const p2= document.createElement("p");
        const myDiv = document.createElement("div"); //chart bar 
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        const div4 = document.createElement("div");
        let width= Math.floor(value/3000000);  

        
        p1.textContent = `${key}`;
        p2.textContent = value;

        

        myDiv.style.width= `${width}px`;
        myDiv.style.height = "10px";
        myDiv.className = "graphBar";
        myDiv.style.backgroundColor = "green";
        myDiv.style.margin ="20px";


        div2.style.width = "20%";
        div4.style.width = "20%";
        div3.style.width = "60%";   

        div2.style.textAlign = "right";          
        
        
        div1.style.display = "flex";
        div1.style.flexDirection = "row";
        div1.style.justifyContent = "left";
        div1.style.gap = "1rem";

    

        div2.appendChild(p1);
        div3.appendChild(myDiv);
        div4.appendChild(p2);
        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.appendChild(div4);
        graphBody.appendChild(div1);
        


    });

}

function language() {
    underButton.textContent = "Top 10 most spoken language in the world!";
    graphBody.innerHTML="";
    Object.entries(topLaunguageSpo).forEach(([key, value]) => {
        const p1= document.createElement("p");
        const p2= document.createElement("p");
        const myDiv = document.createElement("div"); //chart bar 
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        const div4 = document.createElement("div");
        let width= Math.floor(value*350);  

        
        p1.textContent = `${key}`;
        p2.textContent = Math.floor(value*1000000);

        

        myDiv.style.width= `${width}px`;
        myDiv.style.height = "10px";
        myDiv.className = "graphBar";
        myDiv.style.backgroundColor = "darkOrange";
        myDiv.style.margin ="20px";


        div2.style.width = "20%";
        div4.style.width = "20%";
        div3.style.width = "60%";   

        div2.style.textAlign = "right";          
        
        
        div1.style.display = "flex";
        div1.style.flexDirection = "row";
        div1.style.justifyContent = "left";
        div1.style.gap = "1rem";

    

        div2.appendChild(p1);
        div3.appendChild(myDiv);
        div4.appendChild(p2);
        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.appendChild(div4);
        graphBody.appendChild(div1);
        


    });


}



population();
