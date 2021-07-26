// Load your images on page-load
function preloader() {
    const imagesPaths = [
       "img/panel.jpg",
       "img/hydro.jpg",
       "img/wind.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);

//Get all buttons in a NODE LIST of buttons (array like structure)
let listButton = document.querySelectorAll('#control button');
// let listButton = control.children;
// var nodeList = document.querySelector("button");
// console.log(listButton);

// reference dynamic content from content json
//let promise = fetch('content/content.json');


const data = {
    panel:{
        heading: "Solar Panels",
        imageURL: "./img/panel.jpg",
        imageAlt: "solar-panel-picture",
        bodyText: "Solar power is capital intensive, and the main cost of owning a system comes upfront when buying the equipment. The solar module will almost certainly represent the largest single component of the overall expense. <br/> <br/>Other equipment necessary for installation includes an inverter (to turn the direct current produced by the panel into the alternating current used by household appliances), metering equipment (if it is necessary to see how much power is produced), and various housing components along with cables and wiring gear. <br /> <br /> Some homeowners also consider battery storage. Historically, batteries have been prohibitively expensive and unnecessary if the utility pays for excess electricity that is fed into the grid (see below). The installation labor cost must also be factored in.",
     
    }, 


    hydro:{
        heading: "Hydro Power",
        imageURL: "img/hydro.jpg",
        imageAlt: "hydro-plant",
        bodyText: "The Energy Affordability Program provides support to income-eligible electricity consumers by helping them to lower their monthly electricity costs and to increase their home comfort. <br/> <br/> Depending on your situation, you may receive different energy-saving products and services. Some participants may qualify for a free home energy needs assessment conducted by a trained energy professional that will help identify energy-efficient upgrades available for their homes, such as replacement of inefficient appliances and professionally-installed insulation and draft-proofing. These upgrades may be installed during or after an in-home visit. <br/> <br/> Other participants may qualify instead for free energy saving kits. These are customized to meet their energy needs and could include energy-saving LED lighting, timers, faucet aerators and/or a clothes drying line.<br/> <br/> All expert advice and energy-saving home upgrades under this program are completely free of charge. The Energy Affordability Program is brought to you by Greensaver, the Save on Energy delivery partner.",
    },

    wind:{
        heading: "Wind Power",
        imageURL: "img/wind.jpg",
        imageAlt: "wind-mill",
        bodyText: "Wind energy is now the lowest-cost option for new electricity generation in Canada. In December 2017, a competitive electricity-supply auction in Alberta yielded the lowest-ever rate paid for wind energy in the country, a weighted average of $37 per megawatt hour. Similarly, in October 2018, a competitive procurement in Saskatchewan resulted in an average bid price of $42 per megawatt hour, with the winning bid coming in below $35 per megawatt hour. <br/> <br/> The cost of land-based wind farms is expected to continue to fall in the future. According to a June 2018 study by the International Renewable Energy Agency, the global weighted average cost of onshore wind have declined by 71 per cent in 35 years, as technological improvements continue to be made. This offers an attractive electricity source to provinces seeking to clean and diversify their electricity systems.",
    },

};


let $content = document.getElementById('dynamic-content');

    //create initial page markup
let markup = {   
        panel: `<h2>${data.panel.heading}</h2>`+ 
                `<img src="${data.panel.imageURL}" alt="${data.panel.imageAlt}" />` +
                `<p>${data.panel.bodyText}</p>`,

        hydro: `<h2>${data.hydro.heading}</h2>` +
                    `<img src="${data.hydro.imageURL}" alt="" />` +
                    `<p>${data.hydro.bodyText}</p>`,

        wind: `<h2>${data.wind.heading}</h2>` +
                    `<img src="${data.wind.imageURL}" alt="" />` +
                    `<p>${data.wind.bodyText}</p>`,

    };
    // $content.innerHTML = markup.panel; 
    
//}  

/*promise
    .then(getResponse)
    .then(doSomethingWithData);
*/

// Start your handleSelection function here. 
function handleClick (ev) {
    let currentItem = ev.target;
    console.log(currentItem);

    for (let i = 0; i < listButton.length; i++){
        if (listButton[i].hasAttribute('id')){

            listButton[i].removeAttribute('id');
        }
    }

    currentItem.setAttribute('id','active');
    // console.log('button is active');

    //add data to the currently clicked element
    if(listButton[0].hasAttribute("id")){
        $content.innerHTML = markup.panel; 
    } else if(listButton[1].hasAttribute("id")){
        $content.innerHTML = markup.hydro;
    } else{
        $content.innerHTML = markup.wind;
    }
}

//regestering list buttons for click event
for (let i = 0; i < listButton.length; i++) {
    listButton[i].addEventListener('click', handleClick);
}
