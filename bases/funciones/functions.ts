(()=>{

    const hero : string = 'Flash';

    function returnName(){
        return hero;
    }

    const activateBatisignal = () : string => {
        return 'Batiseñal activada';
    }

    console.log(typeof activateBatisignal);

    const heroName = returnName()

})()