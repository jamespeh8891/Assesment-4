module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = [
            "A soft voice may be awfully persuasive.",
             "Adventure can be real happiness.",
              "Good news will come to you by mail.",
               "He who knows he has enough is rich.", 
               "It takes courage to admit fault.",
            ];
      
        
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
},

        getMotivate: (req, res) => {
    const motivate = [
        "Never give up",
         "You will acheive what you work for",
          "Be yourself, dont compare yourself to others",
           "Fight for what you want",
          
     ];
  
    
    let randomIndex = Math.floor(Math.random() * motivate.length);
    let randomMotivate = motivate[randomIndex];
  
    res.status(200).send(randomMotivate);
},

getQuotes: (req, res) => {
    const quotes = [
        "Nothing is impossible. The word itself says Im possible!",
         "Success is not final, failure is not fatal: it is the courage to continue that counts.",
          "You define your own life. Dont let other people write your script",
           "You dont always need a plan. Sometimes you just need to breathe, trust, let go and see what happens",
          
     ];
  
    
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuotes = quotes[randomIndex];
  
    res.status(200).send(randomQuotes);
},
}
