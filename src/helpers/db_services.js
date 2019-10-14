import {database} from '../credentials/client';


export const pushToFirebase = (path, data) => {
    try {
        const res =  database.ref(path).push(data);
        return {res, error: false};
    } catch (error) {
        return {res: error, error: true};
    }
}

export const getElementByChild = async (path, childPath, value) => {
    try {
        const res = await database.ref(path).orderByChild(childPath)
        .startAt(value)
        .endAt(value)
        .once('value');
        return {res, error: false};
    } catch (error) {
        return {res: error, error: true};
    } 
}