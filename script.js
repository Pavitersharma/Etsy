    let login = document.querySelector(".login")
    // let closebtn = document.querySelector(".closeBtn")

function close_page(){
console.log("working")
    login.style.display = "none"

}

function loginopen(){

    login.style.display = "block"
}
 let angledown = document.querySelector(".angledown")
 function angleopen(item) {
    const nextItem = item.nextElementSibling
    nextItem.style.display = "none";
 }
 