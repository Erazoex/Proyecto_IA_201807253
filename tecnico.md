# Manual Técnico - Proyecto 2 IA1

Este documento describe el funcionamiento y estructura del archivo `main.js`, el cual forma parte del **Proyecto 2 IA1**. Este archivo contiene la lógica de carga de archivos CSV, la configuración de modelos de aprendizaje automático, y la generación de gráficos para la visualización de resultados.

## Importaciones

El archivo importa múltiples módulos y funciones necesarias para el procesamiento de datos y visualización de resultados:

```javascript
import showLinearGraph from "./linear-regression.js";
import showPolynomialGraph from "./polynomial-regression.js";
import showDecisionTreeGraph from "./decision-tree.js";
import { createFormNaiveBayes, naiveBayesPrediction } from "./naive-bayes.js";
import { neuralNetworkPredictions, neuralNetworkWeights, neuralNetworkBiases, weightsChart } from "./neural-network.js";
import { kmeans, kmeans2D } from "./k-means.js";
import getDistance from "./k-nearest-neighbor.js";
import { predictions, setPredictions, chart } from "./utils.js";
```

## Funciones

`Initialize` La función Initialize agrega los eventos necesarios para manejar la carga de archivos y el botón de resultados.

```javascript
const Initialize = () => {
    firstFileUpload.addEventListener("change", constructFileUploadFunc(1));
    secondFileUpload.addEventListener("change", constructFileUploadFunc(2));
    thirdFileUpload.addEventListener("change", constructFileUploadFunc(3));
    resutlButton.addEventListener("click", handleGenerateResult);
};
```

`constructFileUploadFunc` Función que gestiona la carga de archivos CSV y su procesamiento.
```javascript
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
```

`getCSVFileData` Función que gestiona la carga de archivos CSV y su procesamiento.

```javascript
const getCSVFileData = (option, fileText) => {
    const rows = fileText.split("\n").map(row => row.split(",").map(cell => cell.trim()));
    const selectedOptionValue = selectedOption.value;
    ...
}
```
`handleGenerateResult` Procesa los datos del archivo CSV cargado y organiza la información en arrays.
```javascript
function handleGenerateResult() {
    const selectedOptionValue = selectedOption.value;
    const xIndex = parseInt(xAxis.value);
    const yIndex = parseInt(yAxis.value);
    ...
}
```

# Función para Mostrar Gráfico Lineal

## `showLinearGraph`
Muestra un gráfico de regresión lineal utilizando los valores de X e Y proporcionados. La función también calcula y muestra el valor de \( R^2 \) en el gráfico.

### Parámetros
- `xValues` (Array): Un array que contiene los valores del eje X.
- `yValues` (Array): Un array que contiene los valores reales del eje Y.

### Uso
```javascript
showLinearGraph(xValues, yValues);
```

# Función para Mostrar Gráfico Polinómico

## `showPolynomialGraph`
Muestra un gráfico de regresión polinómica utilizando los valores de X e Y proporcionados. La función también calcula y muestra el valor de \( R^2 \) en el gráfico.

### Parámetros
- `xValues` (Array): Un array que contiene los valores del eje X.
- `yValues` (Array): Un array que contiene los valores reales del eje Y.

### Uso
```javascript
showPolynomialGraph(xValues, yValues);
```

# Función para Mostrar el Gráfico del Árbol de Decisión

## `showDecisionTreeGraph`
Muestra un gráfico de un árbol de decisión utilizando un string en formato DOT. Esta función utiliza la biblioteca `vis.js` para renderizar el gráfico.

### Parámetros
- `dotStr` (String): Un string que representa el árbol de decisión en formato DOT.

### Uso
```javascript
showDecisionTreeGraph(dotStr);
```

# Funciones para la Predicción de Naive Bayes

## `createFormNaiveBayes`
Crea un formulario dinámico para ingresar los valores de los atributos necesarios para el modelo de Naive Bayes.

### Parámetros
- `options` (Array): Un array de strings que representa los nombres de los atributos para los cuales se solicita la entrada de datos.

### Uso
```javascript
createFormNaiveBayes(['Atributo1', 'Atributo2', 'Atributo3']);
```

# Funciones para Redes Neuronales

## `neuralNetworkPredictions`
Muestra las predicciones generadas por la red neuronal en el contenedor designado.

### Parámetros
- `predictions` (Array): Un array que contiene las predicciones realizadas por la red neuronal.

### Uso
```javascript
neuralNetworkPredictions([0.85, 0.90, 0.78]);
```

# Funciones de K-Means

## `kmeans`
Realiza la agrupación de datos utilizando el algoritmo K-Means en un espacio unidimensional y visualiza los resultados en un gráfico de dispersión.

### Parámetros
- `configFile` (Array): Un array que contiene la configuración del algoritmo, donde el primer elemento es el número de clusters `k` y el segundo el número de iteraciones.
- `dataFile` (Array): Un array de datos que serán agrupados, cada línea del archivo debe contener un número.

### Uso
```javascript
kmeans([[3, 10]], [[1], [2], [3], [4], [5], [6]]);
```

# Función `getDistance`

Calcula las distancias Euclidiana y Manhattan entre un conjunto de individuos y una posición de referencia, luego muestra los resultados en el DOM.

## Parámetros

- `dataFile` (Array): Un array que contiene datos de individuos, donde cada fila representa un individuo con sus coordenadas y un valor adicional.
    - La estructura esperada es: 
      ```javascript
      [
          [x1, y1, z1, value1],
          [x2, y2, z2, value2],
          ...
      ]
      ```
- `position` (Array): Un array que contiene las coordenadas de la posición de referencia en la forma de un array de arrays.
    - La estructura esperada es: 
      ```javascript
      [
          [x_ref, y_ref, z_ref]
      ]
      ```

## Uso

```javascript
getDistance(data, [[refX, refY, refZ]]);
```