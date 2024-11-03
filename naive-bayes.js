export function createFormNaiveBayes(options) {
    const formContainer = document.getElementById('naiveBayesFormContainer');
    formContainer.innerHTML = ''; 

    const attributesLabel = document.createElement('label');
    attributesLabel.textContent = 'Introduce los valores para los atributos:';
    formContainer.appendChild(attributesLabel);
    formContainer.appendChild(document.createElement('br'));

    options.slice(0, -1).forEach((option, index) => {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `attribute_${index}`;
        input.name = 'attributes';
        input.placeholder = `Valor para ${option}`;
        input.value = '';

        const label = document.createElement('label');
        label.textContent = `${option}: `;
        label.htmlFor = `attribute_${index}`;

        formContainer.appendChild(label);
        formContainer.appendChild(input);
        formContainer.appendChild(document.createElement('br'));
    });
    formContainer.appendChild(document.createElement('br'));
}

export function naiveBayesPrediction(prediction) {
    const predictionContainer = document.getElementById("naiveBayesPredictionContainer");
    const predictionText = document.getElementById("naiveBayesPredictionText");
    predictionText.innerHTML = `Predicción: <strong>${prediction[0]}</strong> con una probabilidad de <strong>${(prediction[1] * 100).toFixed(2)}%</strong>`;
    predictionContainer.style.display = 'block';
}

export default { createFormNaiveBayes, naiveBayesPrediction };