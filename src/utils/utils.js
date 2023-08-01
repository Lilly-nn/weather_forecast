function formatDate(date) {
    //'yyyy-mm-dd'    
    const mm = date.getMonth() + 1;
    const dd = date.getDate();

    return [date.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('-');
};

function formatStringToDate(str) {
    const formattedStr = new Date(str);
    return formattedStr;
}

function getNextWeek() {
    const nextWeek = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
    return nextWeek;
}

export function getFormattedDays() {
    const today = formatDate(new Date());
    const nextWeek = formatDate(getNextWeek());
    return { today, nextWeek }
}