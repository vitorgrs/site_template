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

    //TODO: Isso não pode ficar assim
    const apiProjUrl = "http://localhost:3000/submit";


    formProjeto = document.getElementById("form_projeto")

    
    if (formProjeto){
        formProjeto.addEventListener("submit", (e) =>{
            e.preventDefault();
            formData = new FormData(formProjeto);
            const data = {
                'proj_titulo' : formData.get('proj_titulo'),
                'proj_subtitulo': formData.get('proj_subtitulo'),
                'grupo_projeto': formData.get('grupo_projeto'),
                'filefoto': formData.get('filefoto'),
                'link_projeto': formData.get('link_projeto'),
                'desc_projeto': formData.get('desc_projeto'),
                'chip': [] 
            }

            const chips = document.getElementsByClassName('chip');
            
            var result = Object.keys(chips).map((key) => [chips[key]]);

            result.forEach(elem => {
                text = elem[0]['innerText'];
                //Regex para lidar com a quebra de linha das tags
                text = text.split(/[\r\n]/g)[0];
                data.chip.push(text);
            })

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };

            fetch(apiProjUrl, requestOptions)
            .then(response => {
                if (!response.ok){
                    throw new Error('Erro ao chamar API');
                }
                return response.json();
            })
        })
    }