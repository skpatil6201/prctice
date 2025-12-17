
let name="bhau"
class nam {
    

    tej(name) {
        this.name=name
        console.log("in tej function ",name)
    }
    cancle(name) {
        this.name= name
        
        console.log("in cancle",name)
    }
}

let namee = new nam();
namee.tej("tejas")
namee.cancle("harne")