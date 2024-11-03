export default function getDistance(dataFile, position) {
    const individuals = dataFile.map(row => {
        return [parseFloat(row[0]), parseFloat(row[1]), parseFloat(row[2]), row[3]]; 
    });
    const refPosition = position[0].map(coord => parseFloat(coord));
    var knn = new KNearestNeighbor(individuals);

    var euclidean = knn.euclidean(refPosition);
    var manhattan = knn.manhattan(refPosition);

    const treeDiv = document.getElementById("tree");
    console.log('distancias deep ')
    let str = "";
    str += "<h4 class=\"text-xl font-semibold mb-4 text-left \">Euclidean Distance:</h4><ul>";
    euclidean.forEach((distance, index) => {
        str += `<li >Punto ${index + 1}: ${distance}</li>`;
    });
    str += "</ul><h4 class=\"text-xl font-semibold mb-4 text-left\">Manhattan Distance:</h4><ul>";
    manhattan.forEach((distance, index) => {
        str += `<li >Position ${index + 1}: ${distance}</li>`;
    });
    str += "</ul>";
    treeDiv.innerHTML = str;
    treeDiv.style.display = "block";
}
