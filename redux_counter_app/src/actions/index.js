export const increment = (number) => {
    return {
        type: 'INCREMENT',
        data: number
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

