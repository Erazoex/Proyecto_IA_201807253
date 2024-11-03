import { setChart, chartDestroy, chart } from "./utils.js";
const ctx = document.getElementById("chart").getContext("2d");

export function neuralNetworkPredictions(predictions) {
    const predictionText = predictions.map((pred, index) => `Predicción ${index + 1}: ${pred}`).join('<br/>');
    document.getElementById("neuralNetworkPredictionText").innerHTML = predictionText;
}

export function neuralNetworkWeights(weights) {
    const weightsText = weights.map((weight, index) => `Peso ${index + 1}: ${weight}`).join('<br/>');
    document.getElementById("neuralNetworkWeightsText").innerHTML = weightsText;
}

export function neuralNetworkBiases(biases) {
    const biasesText = biases.map((bias, index) => `Sesgo ${index + 1}: ${bias}`).join('<br/>');
    document.getElementById("neuralNetworkBiasesText").innerHTML = biasesText;
}

export function weightsChart(weights, biases) {
    const weightLabels = weights.map((_, index) => `Capa ${index + 1}`);
    const weightData = {
        labels: weightLabels,
        datasets: [
            {
                label: 'Pesos',
                data: weights.map(weightArray => weightArray.reduce((acc, val) => acc + val, 0) / weightArray.length),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Sesgos',
                data: biases.map(biasArray => biasArray[0]), 
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };
    const config = {
        type: 'bar',
        data: weightData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
    chartDestroy();
    setChart(new Chart(ctx, config));
}
