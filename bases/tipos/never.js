"use strict";
(() => {
    const error = (mensaje) => {
        if (false) {
            throw new Error(mensaje);
        }
        return 1;
    };
    error('Auxilio');
})();
