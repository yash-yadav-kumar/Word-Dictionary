// searchinput
// searchbtn

const dictionary = (word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7a26599d19msh96ef807130289f3p1c7cc4jsnfae673ab2578',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }    
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {
            
            wordheading.innerHTML = "Meaning of: " + response.word;
            definition.innerHTML = response.definition.replace("2.", "<br>2").replace("3.", "<br>3").replace("4.", "<br>4");
        
        })
        .catch(err => console.error(err));
}

searchbtn.addEventListener("click", (e)=>{
    e.preventDefault()
    dictionary(searchinput.value)
})

reset.addEventListener("click", (a)=>{
    wordheading.innerHTML= "Your word will appear here";
    definition.innerHTML = "Welcome to the dictionary app! Type your favourite word in the searchbar at the top right and you will see the meaning here!";
})