let model = {
    inputValue: '',
    inputValueColor: '',
    data: [
        {text: 'red', color: '', editMode: 'false',},
        {text: 'red', color: '', editMode: 'false',},
        {text: 'red', color: '', editMode: 'false',},
    ]
    
}

function changeColor(index) {
    if (mode.data[index].editMode == 'true') return;
    model.data[index].color = 'red';
    updateView()
}

function editData(index) {
    model.data[index].editMode = 'true';
    updateView();
}

function saveData(index) {
    model.data[index].text = model.inputValue;
    model.data[index].color = model.inputValueColor;
    model.data[index].editMode = 'false';
    updateView();
}

