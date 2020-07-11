const compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
const trace = x => { console.log(x); return x; }

const prop = propriedade => objeto => objeto[propriedade];
const setSrc = imgElement => value => imgElement.src = value;
const responseToJson = res => res.json();

const propMessage = prop('message')
const setSrcForDogImg = setSrc(document.getElementById('dog'));

fetch('https://dog.ceo/api/breeds/list/all').then(responseToJson).then(console.log);


fetch('https://dog.ceo/api/breed/retriever/golden/images/random')
  //.then(trace)
  .then(responseToJson)
  //.then(trace)
  .then(propMessage)
  //.then(trace)
  .then(setSrcForDogImg)
  //.then(trace)
  

const propSprites = prop('sprites');
const propSpritesFrontDefault = prop('front_default');

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(responseToJson)
  .then(propSprites)
  .then(propSpritesFrontDefault)
  .then(setSrc(document.querySelector('#poke')))
  .then(console.log)
























// const csv = "teste; 20; teste@teste.com";
// const data = csv.split(';'); //["teste", " 20", " teste@teste.com"]
// const cleanData = data.map(item => item.trim());//["teste", "20", "teste@teste.com"]
// console.log(cleanData);


// const compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

// const split = char => text => text.split(char);
// const map = func => arr => arr.map(func);

// const trim = text => text.trim();
// const splitSemiColon = split(';');
// const splitLineBreak = split('\n');

// const splitAndMapTrim = compose(console.log,map(trim),splitSemiColon);

// const promise = new Promise((resolve, _) => { resolve("teste; 20; teste@teste.com")});
// promise
//   .then(splitSemiColon)
//   .then(map(trim))


// const promise2 = new Promise((resolve, _) => { resolve("teste; 20; teste@teste.com")});
// promise2
//   .then(splitAndMapTrim)