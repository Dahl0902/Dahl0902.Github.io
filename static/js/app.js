
d3.json("/samples.json").then(function(data) {
    console.log(data);
    
    let test = data.samples
    console.log(test);
    let idList = new Array()
    test.forEach(function(sample) {
        let id = sample['id']
        idList.push(id)
    });
    let dropdownMenu = d3.select("#selDataset");
    let metadata = data.metadata
    for (var i=0; i < idList.length; i++) {
        dropdownMenu.append('option').text(idList[i])

    };
    let demInfo = d3.select('#sample-metadata')
    demInfo.append('p').text(`ID: ${idList[0]}`);
    demInfo.append('p').text(`Ethnicity: ${metadata[0]['ethnicity']}`);
    demInfo.append('p').text(`Gender: ${metadata[0]['gender']}`);
    demInfo.append('p').text(`Age: ${metadata[0]['age']}`);
    demInfo.append('p').text(`Location: ${metadata[0]['location']}`);
    demInfo.append('p').text(`bbtype: ${metadata[0]['bbtype']}`);
    demInfo.append('p').text(`wfreq: ${metadata[0]['wfreq']}`);

    buildPlot()
    function buildPlot() {
        let otuIds = test[0]['otu_ids']
        slicedOtuIds = otuIds.slice(0, 10)
        let sampleValues = test[0]['sample_values']
        slicedSampleValues = sampleValues.slice(0, 10)
        var trace1 = {
            x: slicedSampleValues,
            y: slicedOtuIds.toString(),
            type: 'bar',
            orientation: 'h'
        };
        var data = [trace1]
        Plotly.newPlot('bar', data);

        var trace2 = {
            x: otuIds,
            y: sampleValues,
            mode: 'markers',
            marker: {
                size: sampleValues,
                color: otuIds
            }
        };
        var data = [trace2]
        Plotly.newPlot('bubble', data)

        var trace3 = {

        }
    };
    
});
