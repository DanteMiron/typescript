(()=>{

    type Hero = {
        name: string;
        age: number;
        powers: string[];
        getName? : ()=>string;
    }

    let myCustomVariable: string | number | Hero = 'Fernando';
    console.log(myCustomVariable);

    myCustomVariable= 20;
    console.log(myCustomVariable);
    
    myCustomVariable= {
        name: `Dante`,
        age: 28,
        powers: [`Pegada`]
    };
    console.log(myCustomVariable);
    
    
})()