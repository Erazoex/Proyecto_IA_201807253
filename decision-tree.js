export default function showDecisionTreeGraph(dotStr) {
    var chart = document.getElementById("tree");

    var parsDot = vis.network.convertDot(dotStr);
    var data = {
        nodes: parsDot.nodes,
        edges: parsDot.edges
    };

    var options = {
        layout: {
            hierarchical: {
                levelSeparation: 100,
                nodeSpacing: 100,
                parentCentralization: true,
                direction: 'UD',
                sortMethod: 'directed',
            },
        },
    };
    var network = new vis.Network(chart, data, options);
}
