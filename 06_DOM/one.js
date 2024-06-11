// document.getElementById('title')
// <h1 id=​"title" class=​"heading">​DOM Learning​</h1>​

// document.getElementById('title').id
// 'title'

// document.getElementById('title').class
// undefined

// document.getElementById('title').className
// 'heading'

// document.getElementById('title').getAttribute
// ƒ getAttribute() { [native code] }

// document.getElementById('title').getAttribute('id')
// 'title'

// document.getElementById('title').getAttribute('class')
// 'heading'

// document.getElementById('title').setAttribute('class', 'test')
// undefined

// document.getElementById('title').setAttribute('class', 'test heading')
// undefined

// document.getElementById('title')
// <h1 id=​"title" class=​"heading">​DOM Learning​</h1>​

// const title = document.getElementById('title')
// undefined

// title
// <h1 id=​"title" class=​"heading">​DOM Learning​</h1>​

// title.style.backgroundColor = "green"
// 'green'

// title.style.padding = "15px"
// '15px'

// title.style.borderRadius = "11px"
// '11px'

// *******Add Content********

// title.textContent    // gives all text content also hidden one
// 'DOM Learning'

// title.innerHTML     // gives HTML tags also
// 'DOM Learning'

// title.innerText       // gives only visible text
// 'DOM Learning'

// document.querySelector('h2')
// <h2>​lorem ipsum dolor sit​</h2>​

// document.querySelector('#title')
// <h1 id=​"title" class=​"heading">​…​</h1>​

// document.querySelector('.heading')
// <h1 id=​"title" class=​"heading">​…​</h1>​

// document.querySelector('input[type="password"]')
// <input type=​"password" name id>​

// document.querySelector('ul')
// <ul>​…​</ul>​

// const myul = document.querySelector('ul')
// undefined

// myul.querySelector('li')
// <li>​…​</li>​

// const turnGreen = myul.querySelector('li')
// undefined

// turnGreen.style.backgroundColor = "green"
// 'green'

// turnGreen.style.padding = "10px"
// '10px'

// turnGreen.innerText
// 'one'

// turnGreen.innerText = "five"
// 'five'

//*********QuerySelectorAll************

// document.querySelectorAll('li')
// NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeList

// const tempLIList = document.querySelectorAll('li')
// undefined

// tempLIList    // nodelist is different from array
// NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object

// const myArr = [1, 2, 3, 4]
// undefined
// myArr
// (4) [1, 2, 3, 4]0: 11: 22: 33: 4length: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object

// tempLIList[1].style.color = 'green'
// 'green'

// const myH1 = document.querySelectorAll('h1')
// undefined

// myH1
// NodeList [h1#title.heading]

// myH1[0].style.color = "green"
// 'green'

// tempLIList
// NodeList(3) [li, li, li]

// tempLIList.forEach(function(l) {
//     l.style.backgroundColor = "green"
// })
// undefined

// document.getElementsByClassName('list-item')
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

// const tempClassList = document.getElementsByClassName('list-item')
// undefined

// tempClassList            // HTML collection different from Node-list
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

// Array.from(tempClassList)      // converted into an array
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]

// const myConvertedArray = Array.from(tempClassList)
// undefined

// myConvertedArray.forEach(function(li) {
//     li.style.color = "orange"
// })

