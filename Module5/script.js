let car = {
    Brand : "Honda",
    Variant : "Brio",
    Transmission: "Manual",
    Lights : {
        Front : "LED",
        Rear : "LED/Bulb",
        Signal : "Bulb"
    },

    //Object
    displayBrand() {
        alert(this.Brand);
    }

}

//Class
class myCar{
    constructor (brand, variant, transmission){
        this.brand = brand;
        this.variant = variant;
        this.transmission = transmission;
    }
}