module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

   


}

module.exports = {
    getfortune: (req, res) => {
        const fortune = ['A soft voice may be awfully persuasive.', 'Adventure can be real happiness.', 'Good news will come to you by mail.', 'He who knows he has enough is rich.', 'It takes courage to admit fault.'];
      
        
        let randomIndexTwo = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndexTwo];
      
        res.status(200).send(randomFortune);
}

}

module.exports = {
    getInsp: (req, res) => {
        const fortune = ['The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty', 'Either you run the day or the day runs you.', 'He who conquers himself is the mightiest warrior.'];
      
        
        let randomIndexThree = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndexThree];
      
        res.status(200).send(randomFortune);
}

}

module.exports = {
    getMotivate: (req, res) => {
        const fortune = ['Practice like youve never won. Perform like youve never lost.', 'Never give up', 'Just do it'];
      
        
        let randomIndexFour = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndexFour];
      
        res.status(200).send(randomFortune);
}

}

module.exports = {
    getGoals: (req, res) => {
        const fortune = ['Finish what need to get done', 'Stay Positive ', 'Work Hard'];
      
        
        let randomIndexFive = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndexFive];
      
        res.status(200).send(randomFortune);
}

}
