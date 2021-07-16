const compareEveryThreeItems = (items) => {
    let results = [];

    for(let i = 0; i < items.length - 2; i += 1) {
        const first = items[i];
        const mid = items[i + 1];
        const last = items[i + 2];

        const isMidBiggest = (first < mid) && (mid > last);
        const isMidLeast = (first > mid) && (mid < last);
        const isMidBiggestOrLeast = isMidBiggest || isMidLeast;

        results.push(isMidBiggestOrLeast + 0);
    }

    return results;
}

export default compareEveryThreeItems;