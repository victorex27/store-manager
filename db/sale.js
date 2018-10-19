"use strict"
var sales = [
  {"id":1,
    "product":[
      {"id":1,
        "name":"apple" ,
        "price": "150",
        "quantity": "2000"
      },
      {"id":2,
        "name": "mango",
        "price": "100",
        "quantity": "1000"
      },
      {"id":3,
        "name": "apricot",
        "price": "1000",
        "quantity": "4"
      }
    ],
    "user":"charles",
    "date":"2010-10-09 11:10:59" 
  },
  {"id":2,
    "product":[
       {"id":1,
        "name":"apple",
        "price": "150",
        "quantity": "2000"
      },
      {"id":2,
        "name": "mango",
        "price": "100",
        "quantity": "1000"
      }
    ],
    "user":"charles",
    "date":"2010-10-09 11:11:59"
  },
  {"id":3,
    "product":[
      {"id":1,
        "name":"apple" ,
        "price": "150",
        "quantity": "2000"
      }
    ],
    "user":"amaobi",
    "date":"2010-1-09 1:09:59" 
  }
];

module.exports = function(){

  return sales;
};