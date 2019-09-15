export const notEnoughComplicatedData = () => ({
    type: 'NOT_ENOUGH_COMPLICATED_DATA', 
});

export const greatSuccess = (id, response) => ({
    type: 'GREAT_SUCCESS',
    response,
    id,
});

export const sadFailure = (id, error) => ({
    type: 'SAD_FAILURE',
    error,
    id,
});