export class Random {
    static range() {
        const min = 380957465792;
        const max = 380998798982;
        return randomInteger(min, max);
    }
    static customRange(total){
        const min = 1;
        const max = total-1;
        return randomInteger(min, max);
    }

    static customRangeDiopazon(min, max){
        return randomInteger(Number(min), Number(max));
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}