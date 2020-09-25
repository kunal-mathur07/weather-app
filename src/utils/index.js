const days=['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];



export function getDate(dateStr){
    let date = new Date(dateStr);
    return `${days[date.getDay()]}, ${date.getDate()}`
}


export function getTime(dateStr){
    let date = new Date(dateStr);
    let hours = date.getHours();
    let mins = date.getMinutes();

    if(hours < 10){
        hours = `0${hours}`;
    }
    if(mins < 10){
        mins = `0${mins}`;
    }
    return `${hours}:${mins}`;
}
