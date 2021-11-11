//Obtener elementos del html
const inputNombre = document.querySelector(".input-nombre");
const btnAgregar = document.querySelector(".btn-agregar");
const btnVaciar = document.querySelector(".btn-vaciar");
const tareas = document.querySelector(".contenido-tareas");
const formulario = document.querySelector(".formulario");
const opcion = document.querySelectorAll(".input-radio");
const contenidoInput = document.querySelector(".contenido-input")
const tarea = document.querySelector(".tarea");
const tareaFlex = document.querySelector(".tarea-flex");
const btnBorrar = document.querySelector(".i-dlt")

//preventDefault
formulario.addEventListener('submit', e => e.preventDefault())

btnAgregar.addEventListener('click', ()=>{
    validarForm()
    vaciarInputs()
})

btnVaciar.addEventListener('click', ()=>{
    vaciarInputs()
})

const nuevaTarea = () =>{

    const textoTarea = inputNombre.value;

    const barra = document.createElement('div');
    
    opcion.forEach(e => {
        if(e.checked && e.classList.contains("opcion-1")){
            barra.classList.add("barra", "barra-alta")
        }else if(e.checked && e.classList.contains("opcion-2")){
            barra.classList.add("barra", "barra-regular")
        }else if(e.checked && e.classList.contains("opcion-3")){
            barra.classList.add("barra", "barra-baja")
        }
    })
    
    const tarea = document.createElement('div');
    tarea.className = "tarea"
    tarea.textContent = textoTarea
    tarea.appendChild(barra)
    
    tarea.addEventListener('click', ()=>{
        if(tarea.classList.contains("realizado")){
            tarea.classList.remove("realizado")
        }else{
            tarea.classList.add("realizado")
        }
    })

    const tareaFlex = document.createElement('div');
    tareaFlex.className = "tarea-flex";
    tareaFlex.appendChild(tarea)
    tareaFlex.appendChild(eliminarTarea())
    

    tareas.appendChild(tareaFlex)

}

const vaciarInputs = ()=>{
    inputNombre.value = "";
    opcion.forEach(e => e.checked = false)
}


const validarForm = ()=>{
    if(inputNombre.value == ""){
        const alerta = document.createElement('p')
        alerta.className = "p-danger"
        alerta.textContent = "Por favor, ingrese una tarea."
        contenidoInput.appendChild(alerta)
        setTimeout(()=>{
            alerta.remove()
        }, 2500)
    }else{
        nuevaTarea()
    }
}

const eliminarTarea = ()=>{
    const btnDlt = document.createElement("i");
    btnDlt.classList.add("fas", "fa-trash-alt", "i-dlt")
    btnDlt.addEventListener('click', e => {
        const item = e.target.parentElement;
        tareas.removeChild(item)
    })
    return btnDlt;
}
