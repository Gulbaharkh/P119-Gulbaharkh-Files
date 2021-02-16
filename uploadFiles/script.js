let uploadFile = document.getElementById('upload')

uploadFile.onclick = function(){
    this.nextElementSibling.click()
}

uploadFile.nextElementSibling.onchange = function(ev){
    
    for (const item of ev.target.files) {
        // console.log(item);
        let reader = new FileReader()
        reader.onloadend= function(ev){
            // console.log(ev.target.name);
            // console.log(ev.target.type);
            // console.log(ev.target.result);
            // console.log(ev.target.size);
            // console.log(table.lastElementChild);

            table.lastElementChild.innerHTML+=`<tr><td><img src="${ev.target.result}" alt="" width="200" height="200"> </td><td>${item.name}</td><td>${item.size}</td><td>${item.type}</td></tr>`
        }

        reader.readAsDataURL(item)
        table.classList.remove('d-none')
        removeAll.classList.remove('d-none')
        
        let td = document.createElement('td')
        td.innerHTML = item + '<i class="fas fa-times"></i>'

        // document.querySelectorAll(".fa-times").forEach(items => {
        //     items.addEventListener('click', ev => {
        //         ev.target.remove();
        //     })
        // })
    }
    
}

let table = document.getElementById('table')
let removeAll = document.getElementById('removeAll')
let dropArea = document.querySelector(".drop-area")

removeAll.onclick=function(){
    table.lastElementChild.innerHTML=''
    uploadFile.nextElementSibling.value = ''
    table.classList.add('d-none')
    removeAll.classList.add('d-none')
}

dropArea.ondragover= function(ev){
    ev.preventDefault()
}
 
dropArea.ondrop = function(ev){
    ev.preventDefault()
    console.log(ev.dataTransfer.files);

    for (const item of ev.dataTransfer.files) {
        console.log(item);
        let reader = new FileReader()
        reader.onloadend= function(ev){

            table.lastElementChild.innerHTML+=`<tr><td><img src="${ev.target.result}" alt="" width="200" height="200"> </td><td>${item.name}</td><td>${item.size}</td><td>${item.type}</td></tr>`
        }

        reader.readAsDataURL(item)
        table.classList.remove('d-none')
        removeAll.classList.remove('d-none')
    }
}