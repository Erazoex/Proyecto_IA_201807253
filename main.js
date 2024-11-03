// Importaciones
import showLinearGraph from "./linear-regression.js";
import showPolynomialGraph from "./polynomial-regression.js";
import showDecisionTreeGraph from "./decision-tree.js";
import { createFormNaiveBayes, naiveBayesPrediction } from "./naive-bayes.js";
import { neuralNetworkPredictions, neuralNetworkWeights, neuralNetworkBiases, weightsChart } from "./neural-network.js";
import { kmeans, kmeans2D } from "./k-means.js";
import getDistance from "./k-nearest-neighbor.js";
import { predictions, setPredictions, chart } from "./utils.js";

// General
const selectedOption = document.getElementById('selectOption'); 

const firstFileUpload = document.getElementById('firstFileUpload');
const secondFileUpload = document.getElementById('secondFileUpload');
const thirdFileUpload = document.getElementById('thirdFileUpload');

// lineal & polynomial
const xAxis = document.getElementById('xAxisSelect');
const yAxis = document.getElementById('yAxisSelect');

// polynomial
const polynomial = document.getElementById('polynomial');

// result button
const resutlButton = document.getElementById('resultButton');

// declarations
let headers = [];

let fileUploadArray1 = [];
let fileUploadArray2 = [];
let fileUploadArray3 = [];
let fileUploadArray4 = [];

let attributes;
let classes;

const Initialize = () => {
    firstFileUpload.addEventListener("change", constructFileUploadFunc(1));
    secondFileUpload.addEventListener("change", constructFileUploadFunc(2));
    thirdFileUpload.addEventListener("change", constructFileUploadFunc(3));
    resutlButton.addEventListener("click", handleGenerateResult);
};

const constructFileUploadFunc = (num) => {
    return (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const fileText = e.target.result;
                getCSVFileData(num, fileText);
            };
            reader.readAsText(file);
        }
    }
}

const getCSVFileData = (option, fileText) => {
    const rows = fileText.split("\n").map(row => row.split(",").map(cell => cell.trim()));
    const selectedOptionValue = selectedOption.value;
    if (rows.length > 0) {
        if (option === 1) {
            headers = rows[0]; 
            fileUploadArray1 = rows.slice(1); 
            fileUploadArray3 = rows.slice(0)
            if (selectedOptionValue === "naiveBayes") {
                attributes = fileUploadArray1.map(row => row.slice(0, -1)); 
                classes = fileUploadArray1.map(row => row.slice(-1)[0])
                createFormNaiveBayes(headers);
            }
            setSelectOptions(headers);
        } else if (option === 2) {
            fileUploadArray2= rows.slice(0); 
        } else if (option === 3) {
            fileUploadArray4 = rows.slice(0); 
        }
    }
}

function setSelectOptions(values) {
    xAxis.innerHTML = '';
    yAxis.innerHTML = '';

    values.forEach((value, index) => {
        const optionXColumn = document.createElement("option");
        optionXColumn.value = index;
        optionXColumn.textContent = value;
        xAxis.appendChild(optionXColumn);

        const optionYColumn = document.createElement("option");
        optionYColumn.value = index;
        optionYColumn.textContent = value;
        yAxis.appendChild(optionYColumn);
    });
}

function handleGenerateResult() {
    const selectedOptionValue = selectedOption.value;
    const xIndex = parseInt(xAxis.value);
    const yIndex = parseInt(yAxis.value);

    if ((fileUploadArray1.length > 0 || fileUploadArray3.length > 0) && xIndex != null && yIndex != null) {
        const xValues = fileUploadArray1.map(row => row[xIndex]);
        const yValues = fileUploadArray1.map(row => row[yIndex]);
        if (selectedOptionValue === "regresionLineal") {
            let linearModel = new LinearRegression();
            linearModel.fit(xValues, yValues);
            setPredictions(linearModel.predict(xValues)); 
            showLinearGraph(xValues, yValues); 
        } else if (selectedOptionValue === "regresionPolinomial") {
            const degree = parseInt(polynomial.value);
            let polynomialModel = new PolynomialRegression();
            polynomialModel.fit(xValues, yValues, degree);
            setPredictions(polynomialModel.predict(xValues)); 
            showPolynomialGraph(xValues, yValues); 
        } else if (selectedOptionValue === "arbolDeDecision") {
            let decisionTreeModel = new DecisionTreeID3(fileUploadArray3);
            const root = decisionTreeModel.train(decisionTreeModel.dataset);
            const predictionData = fileUploadArray2;
            const predictNode = decisionTreeModel.predict(predictionData, root);
            const dot = decisionTreeModel.generateDotString(root);
            showDecisionTreeGraph(dot);
        } else if (selectedOptionValue === "naiveBayes") {
            let model = new BayesMethod();
            headers.slice(0, -1).forEach((header, index) => {
                let columnData = attributes.map(row => row[index]);
                model.addAttribute(columnData, header);
            });
            model.addClass(classes, headers[headers.length - 1]);
            model.train();
            let inputValues = [];
            headers.slice(0, -1).forEach((header, index) => {
                let inputValue = document.getElementById(`attribute_${index}`).value;  
                inputValues.push(inputValue);  
            });
            const prediction = model.predict(inputValues);  
            naiveBayesPrediction(prediction);
        } else if (selectedOptionValue === "redNeuronal") {
            const layers = fileUploadArray3[0].map(Number);
            const options = {
                learning_rate: 5,
                activation: function (x) {
                    return 1 / (1 + Math.exp(-x)); 
                },
                derivative: function (y) {
                    return y * (1 - y); 
                }
            };
            const nn = new NeuralNetwork(layers, options);
            const trainingData = fileUploadArray2.map(data => ({
                input: data.slice(0, 2).map(Number), 
                target: data.slice(2).map(Number) 
            }));
            for (let i = 0; i < 1000; i++) { 
                for (let data of trainingData) {
                    nn.Entrenar(data.input, data.target);
                }
            }
            const predictData = fileUploadArray4.map(data => data.map(Number)); 
            neuralNetworkPredictions(predictData);
            neuralNetworkWeights(nn.layerLink[0].obtener_Weights().data);
            neuralNetworkBiases(nn.layerLink[0].obtener_Bias().data);
            weightsChart(nn.layerLink[0].obtener_Weights().data, nn.layerLink[0].obtener_Bias().data);
        } else if (selectedOptionValue === "k-means") {
            const hasTwoDimensions = fileUploadArray2.every(row => Array.isArray(row) && row.length === 2);
            if (hasTwoDimensions) {
                kmeans2D(fileUploadArray3, fileUploadArray2);
            } else {
                kmeans(fileUploadArray3, fileUploadArray2);
            }
        }else if (selectedOptionValue === "k-nearestNeighbor") {
            getDistance(fileUploadArray3, fileUploadArray2);
        }
    } else {
        alert("Se debe cargar un archivo CSV válido");
    }
}

Initialize();