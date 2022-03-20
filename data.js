export const currencies = [
    {
        code: 'USD',
        baseValue: 339
    },
    {
        code: 'EUR',
        baseValue: 375
    },
    {
        code: 'GBP',
        baseValue: 447
    },
    {
        code: 'CZK',
        baseValue: 15
    },
    {
        code: 'RON',
        baseValue: 76
    },
    {
        code: 'JPY',
        baseValue: 3
    },
    {
        code: 'CNY',
        baseValue: 53
    },
    {
        code: 'INR',
        baseValue: 4.5
    },
    {
        code: 'RUB',
        baseValue: 2.6
    },
    {
        code: 'AUD',
        baseValue: 252
    },
    {
        code: 'HRK',
        baseValue: 49
    },
];

const shiftByRandomPercent = (value, percent) => {
    const shift = ((100-percent/2) + percent * Math.random())/100
    return Math.round(value * shift * 100) /100;
};

export const createExchangeRate = ({code, baseValue}) => ({
    code,
    exchange: {
        hour: shiftByRandomPercent(baseValue, 50),
        day: shiftByRandomPercent(baseValue, 30),
        month: shiftByRandomPercent(baseValue, 10),
        year: shiftByRandomPercent(baseValue, 2),
    },
});

export const getExchangeRatesJSON = () => {
    const exchangeRates = currencies.map(createExchangeRate)

    return JSON.stringify(exchangeRates);
}