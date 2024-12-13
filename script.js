const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const image = document.querySelector(".image")
const feedback = document.querySelector(".feedback")

const users = [
    {
        name: 'Tanya Sinclair ',
        role: 'UX Engineer',
        message:"'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future'",
        image: 'images/image-tanya.jpg',
    },
    {
        name: 'John Tarkpor',
        role: 'Junior Front-end Developet',
        message: 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible.',
        image: "images/image-john.jpg",
    }
]
console.log(users);
// console.log(users.length);

//  check the active slide 
let slide = 0; 
//  writing the sliders functionality 

const navigations = function (){
    if(slide > users.length-1){
        slide = 0
    }
    image.innerHTML = `<img src="${users[slide].image}"  width="100%" /> `
    feedback.innerHTML = `   <img src="images/pattern-quotes.svg" alt="" />
        <p> ${users[slide].message} </p>
        </p>
         <h4 class="name">
          ${users[slide].name} <span class="role"> ${users[slide].role}</span>
        </h4>` 
        slide++
}
navigations();

prevBtn.addEventListener('click', navigations)
 nextBtn.addEventListener('click', navigations)