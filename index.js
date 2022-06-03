function Car(name, model, year){
    this.name=name;
    this.model=model;
    this.year=year;
    this.getCarInfo=function(){
        document.write(this.name+ "  " + "model"+ "  " +this.model+"  "+ "relesed in"+"  "+this.year)
    }
}

var tesla=new Car("Tesla","S",2015)