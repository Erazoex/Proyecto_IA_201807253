function handleOnChangeSelectedOption() {
    // select de los diferentes modelos
    const selectedOption = document.getElementById("selectOption").value;

    // selected method h2
    const selectedMethodText = document.getElementById("selectedMethodText");

    // First File Upload y label
    const firstFileUpload = document.getElementById("firstFileUpload");
    const firstFileUploadLabel = document.getElementById("firstFileUploadLabel");

    // Second File Upload y label
    const secondFileUpload = document.getElementById("secondFileUpload");
    const secondFileUploadLabel = document.getElementById("secondFileUploadLabel");

    // Third File Upload  y label
    const thirdFileUpload = document.getElementById("thirdFileUpload");
    const thirdFileUploadLabel = document.getElementById("thirdFileUploadLabel");

    // columna del Eje X
    const xAxis = document.getElementById("xAxis");
    // columna del Eje Y
    const yAxis = document.getElementById("yAxis");

    // Canvas de las diferentes graficas
    const chart = document.getElementById("chart");

    // Regresion Polinomial
    const polynomialContainer = document.getElementById("polynomialContainer");
    const trainPercentageContainer = document.getElementById("trainPercentageContainer");

    // Naive Bayes
    const naiveBayesFormContainer = document.getElementById("naiveBayesFormContainer");
    const naiveBayesPredictionContainer = document.getElementById("naiveBayesPredictionContainer");

    // Arbol de Decision
    const tree = document.getElementById("tree");

    // Red Neuronal
    const neuralNetworkPredictionContainer = document.getElementById("neuralNetworkPredictionContainer");
    const neuralNetworkWeightsContainer = document.getElementById("neuralNetworkWeightsContainer");
    const neuralNetworkBiasesContainer = document.getElementById("neuralNetworkBiasesContainer");

    // Seccion de botones
    const resultButton = document.getElementById("resultButton");       // boton de resultados

    if (selectedOption === "regresionLineal") {
        // Titulo
        selectedMethodText.innerHTML = "Modelo de Regresión Lineal";

        // Grafica 
        chart.style.Display = "Display";

        // File Uploads
        firstFileUpload.style.display = "block";
        secondFileUpload.style.display = "none";
        thirdFileUpload.style.display = "none";

        // Cambiar texto de fileUploadLabels segun corresponda
        firstFileUploadLabel.innerHTML = "Selecciona un archivo CSV para predecir:";
        // secondFileUploadLabel.innerHTML = "";
        // thirdFileUploadLabel.innerHTML = "";

        // Ejes
        xAxis.style.display = "block";
        yAxis.style.display = "block";

        // Contenedores polinomial
        polynomialContainer.style.display = "none";
        trainPercentageContainer.style.display = "none";

        // Contenedores naive bayes
        naiveBayesFormContainer.style.display = "none";
        naiveBayesPredictionContainer.style.display = "none";

        // Contenedores red neuronal
        neuralNetworkPredictionContainer.style.display = "none";
        neuralNetworkWeightsContainer.style.display = "none";
        neuralNetworkBiasesContainer.style.display = "none";

        // Contenedor arbol
        tree.style.display = "none";


        // Boton para generar los resultados
        resultButton.classList.remove('hidden');
    } else if (selectedOption === "regresionPolinomial") {
        // Titulo
        selectedMethodText.innerHTML = "Modelo de Regresión Polinomial";

        // Grafica 
        chart.style.Display = "display";

        // File Uploads
        firstFileUpload.style.display = "block";
        secondFileUpload.style.display = "none";
        thirdFileUpload.style.display = "none";

        // Cambiar texto de fileUploadLabels segun corresponda
        firstFileUploadLabel.innerHTML = "Selecciona un archivo CSV para predecir:";
        // secondFileUploadLabel.innerHTML = "";
        // thirdFileUploadLabel.innerHTML = "";

        // Ejes
        xAxis.style.display = "block";
        yAxis.style.display = "block";

        // Contenedores polinomial
        polynomialContainer.style.display = "block";
        trainPercentageContainer.style.display = "block";

        // Contenedores naive bayes
        naiveBayesFormContainer.style.display = "none";
        naiveBayesPredictionContainer.style.display = "none";

        // Contenedores red neuronal
        neuralNetworkPredictionContainer.style.display = "none";
        neuralNetworkWeightsContainer.style.display = "none";
        neuralNetworkBiasesContainer.style.display = "none";

        // Contenedor arbol
        tree.style.display = "none";

        // Boton para generar los resultados
        resultButton.classList.remove('hidden');
    } else if (selectedOption === "arbolDeDecision") {
        // Titulo
        selectedMethodText.innerHTML = "Modelo de Árbol de Decisión";

        // Grafica 
        chart.style.Display = "none";

        // File Uploads
        firstFileUpload.style.display = "block";
        secondFileUpload.style.display = "block";
        thirdFileUpload.style.display = "none";

        // Cambiar texto de fileUploadLabels segun corresponda
        firstFileUploadLabel.innerHTML = "Selecciona un archivo CSV para entrenar:";
        secondFileUploadLabel.innerHTML = "Selecciona un archivo CSV para predecir:";
        // thirdFileUploadLabel.innerHTML = "";

        // Ejes
        xAxis.style.display = "none";
        yAxis.style.display = "none";

        // Contenedores polinomial
        polynomialContainer.style.display = "none";
        trainPercentageContainer.style.display = "none";

        // Contenedores naive bayes
        naiveBayesFormContainer.style.display = "none";
        naiveBayesPredictionContainer.style.display = "none";

        // Contenedores red neuronal
        neuralNetworkPredictionContainer.style.display = "none";
        neuralNetworkWeightsContainer.style.display = "none";
        neuralNetworkBiasesContainer.style.display = "none";

        // Contenedor arbol
        tree.style.display = "block";
        tree.innerHTML = "";

        // Boton para generar los resultados
        resultButton.classList.remove('hidden');
    } else if (selectedOption === "naiveBayes") {
        // Titulo
        selectedMethodText.innerHTML = "Modelo de Naive Bayes";

        // Grafica 
        chart.style.Display = "none";

        // File Uploads
        firstFileUpload.style.display = "block";
        secondFileUpload.style.display = "none";
        thirdFileUpload.style.display = "none";

        // Cambiar texto de fileUploadLabels segun corresponda
        firstFileUploadLabel.innerHTML = "Selecciona un archivo CSV para predecir:";
        // secondFileUploadLabel.innerHTML = "";
        // thirdFileUploadLabel.innerHTML = "";

        // Ejes
        xAxis.style.display = "none";
        yAxis.style.display = "none";

        // Contenedores polinomial
        polynomialContainer.style.display = "none";
        trainPercentageContainer.style.display = "none";

        // Contenedores naive bayes
        naiveBayesFormContainer.style.display = "block";
        naiveBayesPredictionContainer.style.display = "none";

        // Contenedores red neuronal
        neuralNetworkPredictionContainer.style.display = "none";
        neuralNetworkWeightsContainer.style.display = "none";
        neuralNetworkBiasesContainer.style.display = "none";

        // Contenedor arbol
        tree.style.display = "none";

        // Boton para generar los resultados
        resultButton.classList.remove('hidden');
    } else if (selectedOption === "redNeuronal") {
        // Titulo
        selectedMethodText.innerHTML = "Modelo de Red Neuronal";

        // Grafica 
        chart.style.Display = "block";

        // File Uploads
        firstFileUpload.style.display = "block";
        secondFileUpload.style.display = "block";
        thirdFileUpload.style.display = "block";

        // Cambiar texto de fileUploadLabels segun corresponda
        firstFileUploadLabel.innerHTML = "Selecciona un archivo CSV para configurar:";
        secondFileUploadLabel.innerHTML = "Selecciona un archivo CSV para entrenar:";
        thirdFileUploadLabel.innerHTML = "Selecciona un archivo CSV para predecir:";

        // Ejes
        xAxis.style.display = "none";
        yAxis.style.display = "none";

        // Contenedores polinomial
        polynomialContainer.style.display = "none";
        trainPercentageContainer.style.display = "none";

        // Contenedores naive bayes
        naiveBayesFormContainer.style.display = "none";
        naiveBayesPredictionContainer.style.display = "none";

        // Contenedores red neuronal
        neuralNetworkPredictionContainer.style.display = "block";
        neuralNetworkWeightsContainer.style.display = "block";
        neuralNetworkBiasesContainer.style.display = "block";

        // Contenedor arbol
        tree.style.display = "none";

        // Boton para generar los resultados
        resultButton.classList.remove('hidden');
    } else if (selectedOption === "k-means") {
        // Titulo
        selectedMethodText.innerHTML = "Modelo de K-Means";

        // Grafica 
        chart.style.Display = "block";

        // File Uploads
        firstFileUpload.style.display = "block";
        secondFileUpload.style.display = "block";
        thirdFileUpload.style.display = "none";

        // Cambiar texto de fileUploadLabels segun corresponda
        firstFileUploadLabel.innerHTML = "Selecciona un archivo CSV para entrenar:";
        secondFileUploadLabel.innerHTML = "Selecciona un archivo CSV para predecir:";
        // thirdFileUploadLabel.innerHTML = "";

        // Ejes
        xAxis.style.display = "none";
        yAxis.style.display = "none";

        // Contenedores polinomial
        polynomialContainer.style.display = "none";
        trainPercentageContainer.style.display = "none";

        // Contenedores naive bayes
        naiveBayesFormContainer.style.display = "none";
        naiveBayesPredictionContainer.style.display = "none";

        // Contenedores red neuronal
        neuralNetworkPredictionContainer.style.display = "none";
        neuralNetworkWeightsContainer.style.display = "none";
        neuralNetworkBiasesContainer.style.display = "none";

        // Contenedor arbol
        tree.style.display = "none";

        // Boton para generar los resultados
        resultButton.classList.remove('hidden');
    } else if (selectedOption === "k-nearestNeighbor") {
        // Titulo
        selectedMethodText.innerHTML = "Modelo de K-Nearest Neighbor";

        // Grafica 
        chart.style.Display = "block";

        // File Uploads
        firstFileUpload.style.display = "block";
        secondFileUpload.style.display = "block";
        thirdFileUpload.style.display = "none";

        // Cambiar texto de fileUploadLabels segun corresponda
        firstFileUploadLabel.innerHTML = "Selecciona un archivo CSV para entrenar:";
        secondFileUploadLabel.innerHTML = "Selecciona un archivo CSV para predecir:";
        // thirdFileUploadLabel.innerHTML = "";

        // Ejes
        xAxis.style.display = "none";
        yAxis.style.display = "none";

        // Contenedores polinomial
        polynomialContainer.style.display = "none";
        trainPercentageContainer.style.display = "none";

        // Contenedores naive bayes
        naiveBayesFormContainer.style.display = "none";
        naiveBayesPredictionContainer.style.display = "none";

        // Contenedores red neuronal
        neuralNetworkPredictionContainer.style.display = "none";
        neuralNetworkWeightsContainer.style.display = "none";
        neuralNetworkBiasesContainer.style.display = "none";

        // Contenedor arbol
        tree.style.display = "none";

        // Boton para generar los resultados
        resultButton.classList.remove('hidden');
    } else {
        // Titulo
        selectedMethodText.innerHTML = "Debe seleccionar algún Modelo";

        // Grafica 
        chart.style.Display = "none";

        // File Uploads
        firstFileUpload.style.display = "none";
        secondFileUpload.style.display = "none";
        thirdFileUpload.style.display = "none";

        // Cambiar texto de fileUploadLabels segun corresponda
        // firstFileUploadLabel.innerHTML = "";
        // secondFileUploadLabel.innerHTML = "";
        // thirdFileUploadLabel.innerHTML = "";

        // Ejes
        xAxis.style.display = "none";
        yAxis.style.display = "none";

        // Contenedores polinomial
        polynomialContainer.style.display = "none";
        trainPercentageContainer.style.display = "none";

        // Contenedores naive bayes
        naiveBayesFormContainer.style.display = "none";
        naiveBayesPredictionContainer.style.display = "none";

        // Contenedores red neuronal
        neuralNetworkPredictionContainer.style.display = "none";
        neuralNetworkWeightsContainer.style.display = "none";
        neuralNetworkBiasesContainer.style.display = "none";

        // Contenedor arbol
        tree.style.display = "none";

        // Boton para generar los resultados
        resultButton.classList.add("hidden");
    }
}

function displayFileName(inputId, labelId) {
    const fileInput = document.getElementById(inputId);
    const label = document.getElementById(labelId);

    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        label.textContent = `Archivo seleccionado: ${fileName}`; // Actualiza solo el texto del label
    } else {
        label.textContent = 'Arrastra un archivo CSV o haz clic para seleccionarlo:'; // Restablece el texto si no hay archivo
    }
}

function handleFileDrop(event, inputId) {
    event.preventDefault();
    const fileInput = document.getElementById(inputId);
    const files = event.dataTransfer.files;

    if (files.length > 0) {
        fileInput.files = files; // Asignar los archivos arrastrados al input
        displayFileName(inputId, fileInput.previousElementSibling.id); // Actualiza el nombre del archivo
    }
}
