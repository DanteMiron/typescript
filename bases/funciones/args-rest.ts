(()=>{

    const fullName = (firstName : string, ...restArgs : string[])=>{
        return `${firstName} ${restArgs.join(' ')}`;
    }

    const name = fullName('Dante', 'Pablo', 'Miron');

    console.log(name)
})()