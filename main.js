// number buttons 
const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers[i] = document.querySelector(`.btn-${i}`).addEventListener('click', () => input(`${i}`));
}

// operation buttons 
const btnAdd = document.querySelector('.btn-add').addEventListener('click', () => input('+'));
const btnSubtract = document.querySelector('.btn-subtrac').addEventListener('click', () => input('-'));
const btnMultiply = document.querySelector('.btn-multiply').addEventListener('click', () => input('*'));
const btnDivide = document.querySelector('.btn-devide').addEventListener('click', () => input('/'));
const btnEqual = document.querySelector('.btn-equal').addEventListener('click', () => input('='));

// other buttons
const allClear = document.querySelector('.btn-ac').addEventListener('click', () => input('AC'));
const clear = document.querySelector('.btn-c').addEventListener('click', () => input('C'));
const plusMinus = document.querySelector('.btn-plusMinus').addEventListener('click', () => input('plusMinus'));
const percen = document.querySelector('.btn-percen').addEventListener('click', () => input('percen'));
const comma = document.querySelector('.btn-comma').addEventListener('click', () => input('comma'));

// keyboard input
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case '0':
      input(0);
      break;
    case '1':
      input(1);
      break;
    case '2':
      input(2);
      break;
    case '3':
      input(3);
      break;
    case '4':
      input(4);
      break;
    case '5':
      input(5);
      break;
    case '6':
      input(6);
      break;
    case '7':
      input(7);
      break;
    case '8':
      input(8);
      break;
    case '9':
      input(9);
      break;
    case '+':
      input('+');
      break;
    case '-':
      input('-');
      break;
    case '/':
      input('/');
      break;
    case '*':
      input('*');
      break;
    case '%':
      input('percen');    
      break;
    case '.':
      input('comma');
      break;
    case '=':
      input('=')
      break;
    case 'Enter':
      input('=')
      break;
    case 'Backspace':
      input('C');
      break;
  }
});

const input = (gain) => {
  let screenValue = document.querySelector('.screen').innerText;
  
  if (screenValue == 0 || screenValue == 'Error') {
    if (gain == 'AC' || gain == 'C' || gain == 'percen') {
      document.querySelector('.screen').innerText = '0';
    }
    else if (gain == 'comma') {
      if (screenValue[screenValue.length-1] != '.') {
        const temp = screenValue + '.';
        document.querySelector('.screen').innerText = temp;
      }
      else {
        document.querySelector('.screen').innerText = screenValue;
      }
    }
    else if (gain == 'plusMinus') {
      if (screenValue[0] != '-') {
        document.querySelector('.screen').innerText = "-" + screenValue;
      }
      else {
        document.querySelector('.screen').innerText = screenValue.slice(1);
      }
    }
    else if (!(gain == '+' || gain == '-' || gain == '*' || gain == '/' || gain == '=')) {
      if (screenValue === '0.') {
        document.querySelector('.screen').innerText = "0." + gain;
      }
      else {
        document.querySelector('.screen').innerText = gain;
        console.log('Hello');
      }
    }
  }
  else {
    // ganti operator saat udah ada operatornya
    if ( (screenValue[screenValue.length-1] == '+' && gain == '+') || (screenValue[screenValue.length-1] == '-' && gain == '-') || (screenValue[screenValue.length-1] == '*' && gain == '*') || (screenValue[screenValue.length-1] == '/' && gain == '/')) {
      return;
    }
    if ( screenValue[screenValue.length-1] == '+' && (gain == '-' || gain == '*' || gain == '/') ) {
      const temp = screenValue.slice(0,-1);
      document.querySelector('.screen').innerText = temp + gain;
    }
    else if ( screenValue[screenValue.length-1] == '-' && (gain == '+' || gain == '*' || gain == '/') ) {
      const temp = screenValue.slice(0,-1);
      document.querySelector('.screen').innerText = temp + gain;
    }
    else if ( screenValue[screenValue.length-1] == '*' && (gain == '+' || gain == '-' || gain == '/') ) {
      const temp = screenValue.slice(0,-1);
      document.querySelector('.screen').innerText = temp + gain;
    }
    else if ( screenValue[screenValue.length-1] == '/' && (gain == '+' || gain == '*' || gain == '-') ) {
      const temp = screenValue.slice(0,-1);
      document.querySelector('.screen').innerText = temp + gain;
    }
    // others
    else {
      try {
        switch (gain) {
          case '=':
            if ( screenValue[screenValue.length-1] == '+' || screenValue[screenValue.length-1] == '-' || screenValue[screenValue.length-1] == '*' || screenValue[screenValue.length-1] == '/' ) {
              // const temp = screenValue.slice(0,-1);
              // document.querySelector('.screen').innerText = calculation(temp);
              return;
            }
            else {
              document.querySelector('.screen').innerText = calculation(screenValue);
            }
            break;
          case 'AC':
            document.querySelector('.screen').innerText = '0';
            break;
          case 'C':
            if (screenValue.length == 1) {
              document.querySelector('.screen').innerText = '0';
            }
            else {
              document.querySelector('.screen').innerText = screenValue.slice(0, -1);
            }
            break;
          case 'comma':
            if (screenValue[screenValue.length-1] != '.') {
              const temp = screenValue + '.';
              document.querySelector('.screen').innerText = temp;
            }
            break;
          case 'plusMinus':
            if (screenValue[0] != '-') {
              document.querySelector('.screen').innerText = "-" + screenValue;
            }
            else {
              document.querySelector('.screen').innerText = screenValue.slice(1);
            }
            break;
          case 'percen': 
            if ( screenValue[screenValue.length-1] == '+' || screenValue[screenValue.length-1] == '-' || screenValue[screenValue.length-1] == '*' || screenValue[screenValue.length-1] == '/' ) {
              const temp = screenValue.slice(0,-1);
              document.querySelector('.screen').innerText = temp / 100;
            }
            else {
              document.querySelector('.screen').innerText = screenValue / 100;
            }
            break;
          default:
            document.querySelector('.screen').innerText = screenValue + gain;
        }
      } 
      catch (error) {
        document.querySelector('.screen').innerText = "Error";
      }
    }
    
  }
};

const calculation = (gain) => {
  return eval(gain);
};