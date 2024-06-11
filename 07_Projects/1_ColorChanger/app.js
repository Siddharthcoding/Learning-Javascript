const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach( function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
    })
} )

// another method

// buttons.forEach(function (button) {
//     button.addEventListener('click', (event) => {
//       switch (event.target.id) {
//         case 'grey':
//           body.style.backgroundColor = event.target.id;
//           break;
//         case 'white':
//           body.style.backgroundColor = event.target.id;
//           break;
//         case 'blue':
//           body.style.backgroundColor = event.target.id;
//           break;
//         case 'yellow':
//           body.style.backgroundColor = event.target.id;
//           break;
//         default:
//           body.style.backgroundColor = 'white';
//           break;
//       }
//     });
//   });
  