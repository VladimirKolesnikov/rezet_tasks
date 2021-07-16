const applyPatternToMatrix = (matrix) => {
    let results = [];
    const pattern = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for (let i = 0; i < matrix[0].length - 2; i += 1) {
        const matrixPart = [
                            ...matrix[0].slice(i, i + 3), 
                            ...matrix[1].slice(i, i + 3), 
                            ...matrix[2].slice(i, i + 3)
                        ];
        results.push(pattern.join() === matrixPart.sort().join());
    }

    return results;
}

export default applyPatternToMatrix;
