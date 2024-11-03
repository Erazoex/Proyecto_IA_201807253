import { calculateR2 , setChart, chartDestroy, predictions } from "./utils.js";

export default function showPolynomialGraph(xValues, yValues) {
    const ctx = document.getElementById("chart").getContext("2d");
    console.log(chart);
    chartDestroy();
    const r2Value = calculateR2(predictions, yValues);
    setChart(new Chart(ctx, {
        type: "line",
        data: {
            labels: xValues,
            datasets: [
                {
                    label: "Predicciones Polinomiales",
                    data: predictions,
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 2,
                    fill: false,
                },
                {
                    label: "Valores Reales",
                    data: yValues,
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 2,
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "X",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Y",
                    },
                },
            },
            plugins: {
                beforeDraw: (chart) => {
                    const ctx = chart.ctx;
                    ctx.save();
                    ctx.font = "16px Arial";
                    ctx.fillStyle = "black";
                    ctx.fillText(`R^2: ${r2Value.toFixed(2)}`, 10, 30);
                    ctx.restore();
                },
            },
        },
    }));
}