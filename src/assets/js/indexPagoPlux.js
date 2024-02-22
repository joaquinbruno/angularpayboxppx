     function iniciarDatos(dataPago) {
        if (Data) {
            console.log(Data)
            Data.init(dataPago);
        }
    }
    
    
       function reload(data) {
        if (Data) {
            console.log("Destroy: "+ Data)
            Data.reload(data);
        }
    }
