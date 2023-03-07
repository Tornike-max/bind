
const pool = {
    question:'what is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2:Rust', '3:C++'],

    answers: new Array(4).fill(0),

    registerNewAnswer: function() {
        let answer = Number(prompt(`${this.question} \n ${this.options.join('\n')}`));
        console.log(answer);

        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
        console.log(this.answers)
    }
}

pool.registerNewAnswer()
document.querySelector('.poll').addEventListener('click', pool.registerNewAnswer.bind(pool))


let lufthansa = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],

    book: function(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    },
}

lufthansa.planes = 300
lufthansa.buyPlane = function(){
    console.log(this)

    this.planes++; 
    console.log(this.planes)
}

document.querySelector('.buy').
addEventListener('click', lufthansa.buyPlane.bind(lufthansa))