(()=>{

    const fullName = (firstName : string, lastName?: string, upper : boolean = false)=>{
       if(upper){
        return `${firstName} ${lastName || 'no last name'}`.toUpperCase();
    } else {
        return `${firstName} ${lastName || 'no last name'}`;
    }
    }

    const name = fullName('Tony', 'Stark', true);

    console.log({name});
})()