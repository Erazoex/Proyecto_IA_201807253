export function kmeans(configFile, dataFile) {
    const [k, iterations] = configFile[0].map(Number);
    const data = dataFile.map(line => parseInt(line[0])).filter(num => !isNaN(num));

    if (data.length < k) {
        alert(`El número de clusters (${k}) no puede ser menor a la cantidad de datos ingresados (${data.length})`);
        return;
    }
    var kmeans = new LinearKMeans(k, data);
    let clusterized_data = kmeans.clusterize(k, data, iterations);

    let clusters = new Set([...clusterized_data.map(a => a[1])])
    clusters = Array.from(clusters)
    clusters.forEach((cluster, i) => {
        clusters[i] = [cluster, "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })]
    });
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(function () { drawChart(clusters) });

    function drawChart(clusters) {
        var graph_data = new google.visualization.DataTable();
        graph_data.addColumn('number', 'X')
        graph_data.addColumn('number', 'Y')
        graph_data.addColumn({ type: 'string', role: 'style' }); 
        let a = clusterized_data.map(e => [e[0], 0, `point { size: 7; shape-type: diamond; fill-color: ${clusters[clusters.findIndex(a => a[0] == e[1])][1]}}`])
        graph_data.addRows(a)

        clusters.forEach(c => {
            graph_data.addRow([c[0], 0, `point { size: 3; shape-type: square; fill-color: #ff0000`])
        });

        var options = {
            title: 'Puntos',
            seriesType: 'scatter',
            series: { 1: { type: 'line' } },
            hAxis: { title: 'X', minValue: 0, maxValue: Math.max(data) + 10 },
            yAxis: { title: 'Y', minValue: 0, maxValue: 5 },
            legend: 'none'
        };
        var chart = new google.visualization.ScatterChart(document.getElementById('chartKMeans'));
        chart.draw(graph_data, options);
    }
}

export function kmeans2D(configcsv, datacsv) {
    const [k, iterations] = configcsv[0].map(Number);
    const data = datacsv.map(pair => [parseInt(pair[0]), parseInt(pair[1])]);
    const datoDos = data;
    var kmeans = new G8_Kmeans({
        canvas: document.getElementById("chart"),
        data: datoDos,
        k: 4
    });
    var kmeans = new _2DKMeans(k, data)

    let clusterized_data = kmeans.clusterize(k, data, iterations)
    let clusters = clusterized_data.map(a => [a[1][0], a[1][1]])
    clusters = clusters.filter((v, i, a) => a.findIndex(t => (JSON.stringify(t) === JSON.stringify(v))) === i)
    clusters.forEach((cluster, i) => {
        clusters[i] = [cluster, "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })]
    });

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(function () { drawChart(clusters) });

    function drawChart(clusters) {
        var graph_data = new google.visualization.DataTable();
        graph_data.addColumn('number', 'X')
        graph_data.addColumn('number', 'Y')
        graph_data.addColumn({ type: 'string', role: 'style' }); // style col.
        let a = clusterized_data.map(e => [e[0][0], e[0][1], `point { size: 7; shape-type: diamond; fill-color: ${clusters[clusters.findIndex(a => JSON.stringify(a[0]) == JSON.stringify(e[1]))][1]}}`])
        graph_data.addRows(a);

        clusters.forEach(c => {
            graph_data.addRow([c[0][0], c[0][1], `point { size: 3; shape-type: square; fill-color: #ff0000`])
        });

        var options = {
            title: 'Puntos',
            seriesType: 'scatter',
            series: { 1: { type: 'line' } },
            hAxis: { title: 'X' },
            yAxis: { title: 'Y' },
            legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chartKMeans'));
        chart.draw(graph_data, options);
    }
}