<<<<<<< HEAD
const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const catBtn = document.getElementById("change-cat");
const catImg = document.getElementById("cat");

const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    }
    catch(e){
        console.log(e.message);
    }
    
};

const loadImg = async () =>{
    const catImg = document.getElementById("cat");
    catImg.src = await getCats();
}

catBtn.addEventListener("click", loadImg);

loadImg();



//OUTRA FORMA DE SE FAZER
/*
const getCats = async () => {
        const data = await fetch(BASE_URL)
        .then((result) => result.json())
        .catch((err) => console.log(err.message));

        return data.webpurl;
    }
    catch(e){
        console.log(e.message);
    }
    
};
=======
const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const catBtn = document.getElementById("change-cat");
const catImg = document.getElementById("cat");

const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    }
    catch(e){
        console.log(e.message);
    }
    
};

const loadImg = async () =>{
    const catImg = document.getElementById("cat");
    catImg.src = await getCats();
}

catBtn.addEventListener("click", loadImg);

loadImg();



//OUTRA FORMA DE SE FAZER
/*
const getCats = async () => {
        const data = await fetch(BASE_URL)
        .then((result) => result.json())
        .catch((err) => console.log(err.message));

        return data.webpurl;
    }
    catch(e){
        console.log(e.message);
    }
    
};
>>>>>>> 4e625aae086b8411738f69ec976a616c78c94dda
*/