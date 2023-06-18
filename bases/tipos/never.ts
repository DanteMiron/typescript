(()=>{

    const error = (mensaje : string):(never | number)=>{
        if(false){
        throw new Error(mensaje);
    }
        return 1;
    }

    error('Auxilio')

})()