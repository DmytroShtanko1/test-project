export class DataHelper {
    static getIndexArrByNameAttr(array, value) {
        for (let i = 0; i < array.length; i += 1) {
            if (array[i] === value) {
                return i;
            }
        }
    }
}