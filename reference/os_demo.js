const os = require("os");

// platform --------------------------------
console.log(os.platform()); //win32

// CPU Arch --------------------------------
console.log(os.arch());

// CPU Arch --------------------------------
console.log(os.cpus());

// Memory --------------------------------
console.log(os.freemem());
console.log(os.totalmem());

// Home dir --------------------------------
console.log(os.homedir());

// Up time --------------------------------
console.log(os.uptime());
