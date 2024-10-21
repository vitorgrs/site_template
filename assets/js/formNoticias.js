const chipContainer = document.querySelector(".chip-container");
    
function createChip(name){
    const chip = document.createElement("div");
    //chip element
    chip.classList.add("chip")
    //chip avatar element
    const chipName = document.createElement("div"); 
    chipName.classList.add("chipText");
    chipName.textContent = name; 
    const closeIcon = document.createElement("div"); 
    closeIcon.classList.add("close-icon"); 
    closeIcon.textContent = "x"; 
    closeIcon.addEventListener( 
        "click", 
        function () { 
            chip.remove(); 
        }); 
    chip.appendChild(chipName); 
    chip.appendChild(closeIcon); 
    chipContainer.appendChild(chip);
}

const addChipInput = document.getElementById("addChip")

addChipInput.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        event.preventDefault();
        const name = addChipInput.value.trim();
        if (name !== ""){
            createChip(name);
            addChipInput.value = "";
        }
    }
})

const chipContainer1 = document.querySelector(".chip-container1");

function createChip1(name){
    const chip1 = document.createElement("div");
    //chip element
    chip1.classList.add("chip1")
    //chip avatar element
    const chipName1 = document.createElement("div"); 
    chipName1.classList.add("chipText");
    chipName1.textContent = name; 
    const closeIcon1 = document.createElement("div"); 
    closeIcon1.classList.add("close-icon"); 
    closeIcon1.textContent = "x"; 
    closeIcon1.addEventListener( 
        "click", 
        function () { 
            chip1.remove(); 
        }); 
    chip1.appendChild(chipName1); 
    chip1.appendChild(closeIcon1); 
    chipContainer1.appendChild(chip1);
}

const addChipInput1 = document.getElementById("addChip1")

addChipInput1.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        event.preventDefault();
        const name = addChipInput1.value.trim();
        if (name !== ""){
            createChip1(name);
            addChipInput1.value = "";
        }
    }
})

    //TODO: Isso não pode ficar assim
    const apiNotUrl = "http://localhost:3000/submitNoticias";


    formNoticias = document.getElementById("form_noticia");
    inputfoto = document.getElementById("ImagemPost");
    
    if (formNoticias){
        formNoticias.addEventListener("submit", (e) =>{
            e.preventDefault();
            formData = new FormData(formNoticias);
            console.log(formData);

            const chipsTags = document.getElementsByClassName('chip');
            const chipsAutor = document.getElementsByClassName('chip1');
            
            var result = Object.keys(chipsTags).map((key) => [chipsTags[key]]);
            var resultAutor = Object.keys(chipsAutor).map((key) => [chipsAutor[key]]);
            
            //TODO: REFATORAR CÓDIGO

            result.forEach(elem => {
                text = elem[0]['innerText'];
                //Regex para lidar com a quebra de linha das tags
                text = text.split(/[\r\n]/g)[0];
                //data.chip.push(text);
                formData.append("tags", text);
            })

            resultAutor.forEach(elem => {
                text = elem[0]['innerText'];
                //Regex para lidar com a quebra de linha das tags
                text = text.split(/[\r\n]/g)[0];
                //data.chip.push(text);
                formData.append("autores", text);
            })

            console.log(formData);

            const requestOptions = {
                method: 'POST',
                body: formData,
            };

            fetch(apiNotUrl, requestOptions)
            .then(response => {
                if (!response.ok){
                    throw new Error('Erro ao chamar API');
                }
                return response.json();
            })
        })
    }
