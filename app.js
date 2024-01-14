let header = document.getElementsByTagName('header')[0]
let sliders_imgs = document.querySelectorAll('.projects-list div div img')
let left_buttons = document.querySelectorAll('.left_button')
let right_buttons = document.querySelectorAll('.right_button')
let ltuc_images =[
    'assets/images/LTUC_website/coming_soon2.svg'
]
let lifeShare_images =[
    'assets/images/LifeShare/ls1.jpg',
    'assets/images/LifeShare/ls2.jpg',
    'assets/images/LifeShare/ls3.jpg',
    'assets/images/LifeShare/ls5.jpg',
]
let filteristic = [
    
    'assets/images/Filteristic/filteristic1.jpg',
    'assets/images/Filteristic/filteristic2.jpg',
    'assets/images/Filteristic/filteristic3.jpg',
    'assets/images/Filteristic/filteristic4.jpg',
]
let projects_images=[ltuc_images,lifeShare_images,filteristic]
class Slider{
    constructor(slider_img,button_left,button_right,images){
        this.slider_img = slider_img
        this.button_left = button_left
        this.button_right = button_right
        this.images=images
        this.index = 0
    }
    showAndHideArrows(){

        if(this.images.length ==1){
            this.button_left.classList.add('hide')
            this.button_right.classList.add('hide')

        }
        else if (this.index==0){
            this.button_left.classList.add('hide')
        }
        
        else if (this.index==this.images.length-1){
            this.button_right.classList.add('hide')
        }
        else{
            this.button_left.classList.remove('hide')
            this.button_right.classList.remove('hide')
        }
    }
    leftScroll(){
        this.index --;
        this.slider_img.src = this.images[this.index]
        this.showAndHideArrows()
    }
    rightScroll() {
        this.index ++;
        console.log('slider', this.index);
        this.slider_img.src = this.images[this.index];
        this.showAndHideArrows();
    }

    activateSlider(){
        this.showAndHideArrows()
        this.button_left.addEventListener('click',this.leftScroll.bind(this))
        this.button_right.addEventListener('click',this.rightScroll.bind(this))
    }
}
let sliders = new Array(sliders_imgs.length)
// console.log(sliders_imgs);
for (i=0;i<sliders_imgs.length;i++){
    // console.log(sliders_imgs[i]);
    sliders[i] = new Slider(sliders_imgs[i],left_buttons[i],right_buttons[i],projects_images[i])
    sliders[i].activateSlider()
}
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