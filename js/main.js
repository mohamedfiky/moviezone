const arrowsRt = document.querySelectorAll(".arrow-rt");
const arrowsLeft = document.querySelectorAll(".arrow-left");
const movie_lists = document.querySelectorAll(".movie-list");


arrowsRt.forEach((arrow, i) =>{


    const moviesCount = movie_lists[i].querySelectorAll(".movie").length;

        // console.log(moviesCount);

    let moviesInScreen = Math.floor(window.innerWidth / 300)

    let limitX = (moviesCount - moviesInScreen ) * 300 ;

    // console.log(limitX);
    

    let leftArrow = movie_lists[i].parentNode.querySelector(".arrow-left");


    arrow.addEventListener("click", ()=>{

       let matrex = window.getComputedStyle(movie_lists[i]).getPropertyValue("transform");

        //console.log(matrex);

       let mxArr = matrex.split(", ");

        //console.log(mxArr);

       let transXNum = parseInt(mxArr[4]); // رقم 5 فى الماتركس هو ال ترانسليت إكس 

        //console.log(transXNum);


        if(-limitX <= transXNum){

            movie_lists[i].style.transform = `translateX(${transXNum - 300}px)`;

            leftArrow.style.display = "block" ;


        }else{

            movie_lists[i].style.transform = `translateX(${0}px)`;

            leftArrow.style.display = "none" ;

        }

    })

}); 

///////////////////////////////////////////////////////////////////////////////////////

arrowsLeft.forEach((arrow, i) =>{

    let leftArrow = movie_lists[i].parentNode.querySelector(".arrow-left");
    

    arrow.addEventListener("click", ()=>{

        let matrex = window.getComputedStyle(movie_lists[i]).getPropertyValue("transform");

        // console.log(matrex);
 
        let mxArr = matrex.split(", ");
 
       //  console.log(mxArr);
 
         let transXNum = parseInt(mxArr[4]); // رقم 5 فى الماتركس هو ال ترانسليت إكس 
 
    
       movie_lists[i].style.transform = `translateX(${transXNum + 300}px)`;

       // console.log(transXNum);

       // console.log(movie_lists[i].style.transform);  // not number 
       
        if(transXNum >= 1){  // number more than 0 just to show empty black space before removing arrow .

            leftArrow.style.display = "none" ;
            
            movie_lists[i].style.transform = `translateX(${0}px)`;

       }

    })
});



/////////////////////////////////////////////////////////////////////////////////////

const ball = document.querySelector(".toggle-ball");
const otherItems = document.querySelectorAll(".nav-bar .navbar-container,.nav-bar .navbar-container .profile .toggle, .nav-bar .navbar-container .profile .toggle .toggle-ball, .side-bar, .container, .nav-bar .navbar-container .menu-bar .toggle-menu ul, .footer")

ball.addEventListener("click", ()=>{
    otherItems.forEach(item =>{
        item.classList.toggle("light");
    })
});


/////////////////////////////////////////////////////////////////////////////////////

const menuBar = document.querySelector(".menu-bar");
const toggleMenu = document.querySelector(".toggle-menu");


menuBar.addEventListener("click", ()=>{

    toggleMenu.classList.toggle("open");

});


/////////////////////////////////////////////////////////////////////////////////////


function getData(){

    let myRequist = new XMLHttpRequest();

    myRequist.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           let moviesObject = JSON.parse(this.responseText)
            console.log(moviesObject);
            console.log(moviesObject[3].title); // quiz app شوف الدرس رقم 44 فى ال 
        }
    }
    
    myRequist.open("GET", "movies.json", true);
    myRequist.send();
};

 getData();



