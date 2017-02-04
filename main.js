var test = document.querySelector('.circle-red');
test.style.width = "40px"
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  var numToDouble = answerPTagWithValue.textContent;
  var doubleNum = numToDouble * 2;
  answerPTagWithValue.innerHTML = doubleNum
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3

  var changeColor = document.querySelector('#circle-bw');
  var changeColor = window.getComputedStyle(getColor);

  if (changeColor.style.background === "white") {
    changeColor.style.background = 'black';
  } else {
    changeColor.style.background = 'white';
  }

})
var isIncreasing = true;
document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var growCircleEl = document.querySelector('.circle-red');
  var newWidth = growCircleEl.style.width;
  var widthNum = parseInt(newWidth);

  var nextWidth = 0;
  if (isIncreasing) {
    nextWidth = widthNum * 2;
    growCircleEl.style.width = nextWidth + 'px';
    growCircleEl.style.height = nextWidth + 'px';
  } else {
    nextWidth = widthNum / 2;
    growCircleEl.style.width = nextWidth + 'px';
    growCircleEl.style.height = nextWidth + 'px';
  }

if (nextWidth >= 320) {
    isIncreasing = false;
} else if (nextWidth <= 40) {
    isIncreasing = true;
}
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5

// select all the <li> elements under #user-list
// loop over <li> elements
// check the .className on the domElement to see if it has a value of
//    'active'
// if the Dom element has a class of 'active', we need to append to a large string
// When finished with iteration inject large string
// as .innerHTML to #user-list  (list-container)

// Exercise Demo'd by Travis Hubbard


  var userListEls = document.querySelectorAll('#user-list li');
  var userListContainerEl = document.querySelector('#user-list');

  var htmlStr = '';

  forEach (userListEls, function(domE, index, theArray){
      if(domE.className === 'active') {
          htmlStr += '<li class="active">active user</li>'
        }
})
userListContainerEl.innerHTML = htmlStr
})





document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6

  var switchBox = document.querySelectorAll('.square');
  var switchBoxEl = document.querySelector('#reverse-squares .answer-box')
  for ( var i = switchBox.length - 1 ; i >= 0; i-- ) {
    switchBoxEl.appendChild(switchBox[i])
}
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var switchText = document.querySelectorAll('#tasks li')
  var switchTextEl = document.querySelector('#tasks li')

  for (var i = 0; i < switchText.length; i++){
    var splitString = switchText[i].innerHTML.split('')
    var reverseString = splitString.reverse()
    var newString = reverseString.join('')
    switchText.innerHTML = newString
  }


})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
