import createNumberMask from 'text-mask-addons/dist/createNumberMask';
const currencyMask = createNumberMask({
    prefix: '',
    allowDecimal: false,
    includeThousandsSeparator: true,
    allowNegative: false,
});
export default currencyMask