// object litterlas
let name={
    name:"tejas",
    date:()=>{
    }
}

//constructar function can use pascalCase

function Tejas(name,middle){
    this.name=name,
    this.middle=middle,
    this.getName=()=>{
     console.log("data",this.name,this.getName)   
    }
}


let obj =new Tejas("tejas","harne")
console.log(obj.getName())