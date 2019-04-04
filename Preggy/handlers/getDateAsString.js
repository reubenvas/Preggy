export default function getDate(dateObj) {
    const date = dateObj;
    const YYYY = date.getFullYear()
    const MM = formatTwoDigit(date.getMonth() + 1);
    const DD = formatTwoDigit(date.getDate());
    function formatTwoDigit(num) {
        if (num < 10) {
            return `0${num}`;
        }
        return num;
    }
    return `${YYYY}-${MM}-${DD}`;
}