export function createMonday(target){
    return { type: 'CREATE_MONDAY', target};
}

export function createTuesday(target){
    return { type: 'CREATE_TUESDAY', target};
}
export function createWednesday(target){
    return { type: 'CREATE_WEDNESDAY', target};
}
export function createThursday(target){
    return { type: 'CREATE_THURSDAY', target};
}
export function createFriday(target){
    return { type: 'CREATE_FRIDAY', target};
}
export function createWeekend(target){
    return { type: 'CREATE_WEEKEND', target};
}

export function deleteMonday(target){
    return { type: 'DELETE_MONDAY', target};
}

export function deleteTuesday(target){
    return { type: 'DELETE_TUESDAY', target};
}
export function deleteWednesday(target){
    return { type: 'DELETE_WEDNESDAY', target};
}
export function deleteThursday(target){
    return { type: 'DELETE_THURSDAY', target};
}
export function deleteFriday(target){
    return { type: 'DELETE_FRIDAY', target};
}
export function deleteWeekend(target){
    return { type: 'DELETE_WEEKEND', target};
}