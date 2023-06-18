"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const name = fullName('Dante', 'Pablo', 'Miron');
    console.log(name);
})();
