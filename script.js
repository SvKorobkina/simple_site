
const AddElephant = () => {
    const elephant = document.querySelector('.main2-img');
    const input_1 = document.getElementById('input_1');
    var n = input_1.value;
    for (let i = 0; i < n; ++i) { 
        const newElephant = document.createElement('img');
        newElephant.setAttribute('src', 'image/elephant.png');
        newElephant.classList.add('elephant');
        elephant.append(newElephant);
    }  
   
}

const DelElephant = () => {
    const input_1 = document.getElementById('input_1');
    var n = input_1.value;
    
    for (let i = 0; i < n; ++i) { 
        const elephant = document.querySelector('.elephant');
        elephant.remove();
    }  
    
}

const cloneFirstElement = () => {
    const element = document.getElementById('1r');
    const cloneElement = element.cloneNode(true);
    const elements = document.querySelector('.main1');
    elements.after(cloneElement)
}

const ShowText = () => {
    const input_2 = document.getElementById('input_2');
    const paragraph = document.getElementById('text');
    paragraph.textContent = input_2.value;
    //Заносим вводимые данные в объект
    const user = {
        text: ''
    }
    user.text = input_2.value;
    console.log('Ваш текст: ' + user.text)
}

const AddForest = () => {
    const forest = document.querySelector('.main3-forest');
    const newForest = document.createElement('img');
    newForest.setAttribute('src', 'image/forest.png');
    newForest.classList.add('forest');
    forest.append(newForest);  
}



