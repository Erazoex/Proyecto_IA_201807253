export function calculateR2(predictions, actual) {
    const n = predictions.length;
    const meanActual = actual.reduce((acc, val) => acc + val, 0) / n;

    let ssTotal = 0;
    let ssRes = 0;

    for (let i = 0; i < n; i++) {
        ssTotal += Math.pow(actual[i] - meanActual, 2);
        ssRes += Math.pow(actual[i] - predictions[i], 2);
    }

    return 1 - (ssRes / ssTotal);
}


export let chart;
export function setChart(newchart) {
    chart = newchart;
}

export function chartDestroy() {
    if (chart) {
        chart.destroy();
    }
}

export let predictions = [];
export function setPredictions(newPredictions) {
    predictions = newPredictions;
}