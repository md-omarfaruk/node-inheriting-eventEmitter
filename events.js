const EventEmitter = require('node:events');

class MyEvents extends EventEmitter {
    customFunction = () => {
        this.emit('firstInheritEvent')
    }
}

module.exports = MyEvents;