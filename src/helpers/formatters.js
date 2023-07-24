const formatCurrencyApi = (currency) => {
    if (!currency) return 0;
    return parseInt(String(currency).replace(/\s*/g, ""));
};

const formatCurrencyView = (currency, separator = " ") => {
    if (!currency) return 0;
    return String(currency).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

const formatters = { formatCurrencyApi, formatCurrencyView };

export default formatters;
