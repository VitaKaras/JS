var slider = {
    slides: ['img/bg1.jpg','img/bg1.jpg','img/bg1.jpg'],
    text: ['branding have another definition', 'I have another definition of branding','it`s just a joke ;)'],
    frame:0,
    textid:0,
    set: function(image, text) {
        document.getElementById("home").style.backgroundImage = "url("+image+")";
        document.getElementById("sldrText").innerHTML = text;
    },
    init: function() {
        this.set(this.slides[this.frame], this.text[this.textid]);
    },
    left: function() {
        this.frame = (this.frame - 1 + this.slides.length) % this.slides.length;
        this.textid = (this.textid - 1 + this.text.length) % this.text.length;
        this.set(this.slides[this.frame], this.text[this.textid]);
    },
    right: function() {
        this.frame = (this.frame + 1) % this.slides.length;
        this.textid = (this.textid + 1) % this.text.length;
        this.set(this.slides[this.frame], this.text[this.textid]);
    }
};
window.onload = function() {
    slider.init();
    setInterval(function() {
        slider.right();
    },3000);
};


window.addEventListener('mouseover', function(e){
    target = e.target;
    if(target.classList.contains('scale')){
        target.style.transform = "scale(1.1, 1.1)";
        target.style.transition = 'all 0.3s ease';
    }
});

window.addEventListener('mouseout', function(e){
    target = e.target;
    if(target.classList.contains('scale')){
        target.style.transform = "none"
    }
});

