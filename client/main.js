const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const motivateBtn = document.getElementById("motivateButton")
const quotesBtn = document.getElementById("quotesButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            alert(res.data)
            
    });
};
const getMotivate = () => {
    axios.get("http://localhost:4000/api/motivate/")
        .then(res => {
            alert(res.data)
            
    });
};
const getQuotes = () => {
    axios.get("http://localhost:4000/api/quotes/")
        .then(res => {
            alert(res.data)
            
    });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
motivateBtn.addEventListener('click', getMotivate)
quotesBtn.addEventListener('click', getQuotes)