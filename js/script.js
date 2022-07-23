var typed = new Typed(".typing", {
    strings: ["Web Developer", "Passionate Coder", "Competitive Programmer", "Athirst Learner"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})


const nav = document.querySelector(".nav"), navList = nav.querySelectorAll("li"), totalNavList = navList.length;
const allSection=document.querySelectorAll(".section");
const totalSection=allSection.length;
for (let i = 0; i < totalNavList; i++) {
    // console.log(navList[i]);
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("back-section");
            }
           navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
    })

}
function showSection(element){
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
        
    }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");
}

// mail
