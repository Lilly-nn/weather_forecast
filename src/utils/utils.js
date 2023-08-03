import { weatherConditions } from "./weatherImports";

export function formatDate(date) {
    const formatted = date.split('.').reverse().join('-');
    return formatted;
}

export function formatDateToTemplate(date) {
    //'yyyy-mm-dd'    
    const mm = date.getMonth() + 1;
    const dd = date.getDate();

    return [date.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('-');
};

export function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

//set calendar initial data in modal
export function getCalendarInitData() {
    const today = new Date();
    const startDate =  formatDateToTemplate(today);
    const startEnd = formatDateToTemplate(addDays(today, 15));
    return {startDate, startEnd}
}


const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export function getDayOfWeek(date) {
    let day = new Date(date).getDay();
    if (day > 0) {
        return daysOfWeek[day - 1]
    } else {
        return daysOfWeek.at(-1)
    }
}


const { rainy, cloudy, cloudy_sunny, snowy, sunny } = weatherConditions;

export function getIcon(icon) {
    switch (true) {
        case icon.includes("rain"):
            return rainy;
        case icon.includes("partly-cloudy"):
            return cloudy_sunny;
        case icon.includes("cloudy"):
            return cloudy;
        case icon.includes("clear"):
            return sunny;
        case icon.includes("snow"):
            return snowy;
        default: return cloudy_sunny;
    }
}

const { sunnyBg, rainyBg, snowyBg, cloudy_sunnyBg, cloudyBg } = weatherConditions;

export function getBackground(icon) {
    switch (true) {
        case icon.includes("rain"):
            return rainyBg;
        case icon.includes("partly-cloudy"):
            return cloudy_sunnyBg;
        case icon.includes("cloudy"):
            return cloudyBg;
        case icon.includes("clear"):
            return sunnyBg;
        case icon.includes("snow"):
            return snowyBg;
        default: return cloudyBg;
    }
}





