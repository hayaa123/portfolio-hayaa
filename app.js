let header = document.getElementsByTagName('header')[0]

let headerActivation =()=>{
    header.classList.add('active')
}
let headerDeactivation = ()=>{
    header.classList.remove('active')

}


window.addEventListener("scroll",(e)=>{
    if (window.scrollY>50){
        headerActivation()
    }
    else{
        headerDeactivation()
    }
    console.log(window.scrollY)
})