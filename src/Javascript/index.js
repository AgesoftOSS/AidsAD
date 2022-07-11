/**
 * Copyright 2022 AidsAD Authors
 * AidsAD is a product of Agesoft!
 */

/**
 * **The AidsAD Class**
 * 
 * it contains all functions to display a AD
 * 
 * Image or Iframe
*/
export default class AidsAD {
    #Version = 1.0;
    #Ads = []
    #AdPictures = []

    /**
     * Has all Ad Catagories
     */
    Catagories = {
        Randomized: 'RANDOMIZED',
        Memes: 'MEMES',
        Testbench: 'TEST',
        Music: 'MUSIC'
    }
    /**
     * Has all Ad Resolution
     * 
     * `970×250` Billboard
     */
    Resolution = {
        Billboard: '970×250'
    }

    /**
     * Sets the Catagory of the ads
     */
    ADCatagory = this.Catagories;

    /**
     * Sets the Resolution of the ads
     */
    ADResolution = this.Resolution;

    constructor(Catagory, Resolution){
        Catagory = this.ADCatagory;
        Resolution = this.ADResolution;
    }

    /**
     * Sets the Resolution and Catagory of the ads
     * @param {ADCatagory} Catagory sets the catagory of the ads
     * @param {ADResolution} Resolution sets the resolution of the ads
     */
    setData(Catagory, Resolution){
        Catagory = this.ADCatagory;
        Resolution = this.ADResolution;
    }
    
    /**
     * Creates a Iframe AD
     * 
     * it uses the settings from `ADCatagory` and `ADResolution`
     * 
     * @param {HTMLDivElement} Div - creates a iframe inside that Div element
     */
    createIframeAD(Div){

        if(this.ADCatagory === this.Catagories.Testbench){
            this.#Ads = [ "./ads/1.html", "./ads/2.html" ]
        }

         // Randomizes which image and link it should show for a complete randomizer it's in a for loop.
         for (let i = 0; i < this.#Ads.length; i++) {
            var randomizer = Math.floor(Math.random() * this.#Ads.length);
         }

         const Iframe = document.createElement("iframe");
         Iframe.src = this.#Ads[randomizer]

         if(this.ADResolution === this.Resolution.Billboard){
            Iframe.width = '970'
            Iframe.height = '250'
            Iframe.style.border = 'none'
         }
            
        
         if(Div !== typeof HTMLDivElement){
            Div.appendChild(Iframe)
         } else {
            console.error("invalid element")
         }

     }
    
     /**
      * Creates a Image AD
      * 
      * @param {HTMLImageElement} Image - The Image element to display the AD
      * @param {HTMLDivElement} Container - The Div element to make the closebutton work properly
      * @param {String} URL - opens the url when clicked
      */
    createImageAD(Image, Container, URL){

        if(this.ADCatagory === this.Catagories.Testbench){
            if(this.ADResolution == this.Resolution.Square){
                this.#AdPictures = [ "./img/2.png", "./img/3.png",]
            }
        }

        // Randomizes which image and link it should show for a complete randomizer it's in a for loop.
        for (let i = 0; i < this.#AdPictures.length; i++) {
            var randomizer = Math.floor(Math.random() * this.#AdPictures.length);
        }
        const closebutton = document.createElement("button");
        closebutton.id = "closead";
        closebutton.innerText = "X"
        closebutton.onclick = function(){
            Image.src = "./img/closedAD.png"
            closebutton.style.display = 'none'

            Image.style.cursor = 'default';
        }

        Image.addEventListener("click",() => {
             window.open(URL)
        })
        
        Image.style.cursor = 'pointer';
        Image.src = this.#AdPictures[randomizer];

        Container.appendChild(closebutton);
    }
    
     /**
      * console loggs some useful informations
      */
     debugData(){
        console.log(this.#Ads)
        console.log("AD Catagory: " + this.ADCatagory + "\nAD Resolution: " + this.ADResolution + "\nAidsAD Version: v" + this.#Version)
     }
}
