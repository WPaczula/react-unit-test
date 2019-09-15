/*
    Function filtering object's properties with some filter function. It removes undefined properties
    by default. If the 'object' argument is not of an object type the function returns the argument itself.       
*/
export const filterObjectsProperties = (object, filter = v => v !== undefined) => 
    typeof object === 'object' && object !== null 
        ? Object.keys(object)
        .filter(k => filter(object[k]))
        .reduce((agg, k) => ({
            ...agg,
            [k]: object[k],
        }), {})
        : object;