import { weatherConditions } from "./weatherImports";

export function formatDate(date) {
    const formatted = date.split('.').reverse().join('-');
    return formatted;
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
    console.log(icon);
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
        default: console.log("nana")
    }
}

