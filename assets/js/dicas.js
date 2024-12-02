const gModal = document.querySelector(".galeria-modelagem")
const imgModal = document.querySelector(".galeria-modelagem img")

function closerGaleria(){
    gModal.style.visibility = "hidden"
    imgModal.style.transform = "scale(0)"

}

function openGaleria(src){

    gModal.style.visibility = "visible"
    imgModal.style.transform = "scale(1)"
    imgModal.src = src
}

