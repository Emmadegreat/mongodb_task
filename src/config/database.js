const mongoose = require("mongoose");
const {config} = require('dotenv');
config()

async function connect(uri) {
    try {
        mongoose.connect(uri || process.env.MONGO_DB_LOCAL);
        console.log('connected to mongodb');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connect;

/*function Prime(number) {
    for (i = 0; i < number.length; i++) {
        while (number%i == 0) {
            console.log(process.stdout(i + "*"));
            number = number / i;
        }

    }
}
Prime();
boolean flag = false;
    for (int i = 2; i <= num / 2; ++i) {
      // condition for nonprime number
      if (num % i == 0) {
        flag = true;
        break;
      }
    }*/
function my_upcase(aBc) {
    return aBc.toUpperCase();
}
my_upcase();