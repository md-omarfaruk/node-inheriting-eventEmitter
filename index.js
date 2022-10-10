const MyEvents = require('./events');

const myEvent = new MyEvents();

myEvent.on('firstInheritEvent', () => {
    console.log('this is my first inherit event');
});

myEvent.customFunction();
