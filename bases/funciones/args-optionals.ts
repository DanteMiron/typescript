(()=>{

    const fullName = (firstName : string, lastName?: string)=>{
        return `${firstName} ${lastName || 'no last name'}`;
    }

    const name = fullName('Tony');

    console.log({name})
})()