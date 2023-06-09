export default {
    formatCurrency: function (num) {
        return '\u00A3' + Number(num.toFixed(4)).toLocaleString() + ' '
    }
}