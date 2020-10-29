let equals = (numbers) => {
  let result = [];
  console.log("Array:" + numbers);

  for (let i = 0; i < numbers.length-2; i++) {
      if ((numbers[i] > numbers[i+1] && numbers[i+1] < numbers[i+2]) || (numbers[i] < numbers[i+1] && numbers[i+1] > numbers[i+2])) {
          result.push(1);
      } else {
          result.push(0);
      }
  }

  return result;
};

randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));

console.log(equals(randomArray(10,9)));
//----------------------------------------------------------------------------------------------------------------------

let matrix = (numbers) => {
  let result = [], temp = [];
  let check = [1,2,3,4,5,6,7,8,9];
  let flag = true;


  for (let k = 0; k < numbers[0].length-2; k++) {
      for (let i = 0; i < 3; i++) {
          for (let j = k; j < k+3; j++) {
            temp.push(numbers[i][j]);
          }
      }

      for (let i = 0; i < check.length; i++) {
          if (temp.includes(check[i]) === false) {
            flag = false;
          }
      }

      if(flag) {
          result.push(true);
      } else {
          result.push(false);
      }
      flag = true;
      temp = [];
  }

  return result;

};

console.log(matrix([
    [1,2,3,2,7],
    [4,5,6,8,1],
    [7,8,9,4,5]
])
);
//----------------------------------------------------------------------------------------------------------------------

let format = (arr) => {
    let rules = ['LEFT','RIGHT','LEFT'], result = [];
    let limit = 16;
    let str = '';

    result.push(stars(limit));

    for (let i = 0; i < arr.length; i++) {
        str = arr[i].join(' ');

        if (str.length <= limit) {
            if (rules[i] === 'LEFT') {
                result.push(left(str, limit));
            } else {
                result.push(right(str, limit));
            }
        } else {
            for (let j = 0; j <= Math.trunc(str.length / limit); j++) {
                if (rules[i] === 'LEFT') {
                    result.push(left(str.substr(j*limit, limit), limit));
                } else {
                    result.push(right(str.substr(j*limit, limit), limit));
                }
            }
        }
    }

    result.push(stars(limit));
    return result;
};

let stars = (limit) => {
  let result = '';
  for (let i = 0; i < limit; i++) {
      result+='*';
  }
  return result;
};

let left = (str, limit) => {
    let result = '*';

    result += str;

    if (str.length < limit) {
        for (let i = str.length; i < limit; i++) {
            result += ' ';
        }
    }

    result += '*';

    return result;
};

let right = (str, limit) => {
    let result = '*';

    if (str.length < limit) {
        for (let i = 0; i < limit - str.length; i++) {
            result += ' ';
        }
    }

    result += str;
    result += '*';

    return result;
};

console.log(format([
    ["Привет","мир"],
    ["Акуэкукиотисиуати", "богиня", "океана"],
    ["Чальчиутликуэ"]
]));