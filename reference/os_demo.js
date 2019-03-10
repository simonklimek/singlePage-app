const os = require('os');

// Platform
console.log(os.platform());

// CPU Architecure
console.log(os.arch());

// CPU Core info -> return the object with info about each core
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());