import 'regenerator-runtime/runtime'

const title = document.querySelector('.card__title');
const text = document.querySelector('.card__text');
const btn = document.querySelector('.card__icon');

const url = 'https://api.adviceslip.com/advice'
    
const fetchData = () => {
  const fetchPromise = fetch(url);
fetchPromise.then( response => {
  const jsonPromise = response.json();
  jsonPromise.then( json => {
    show(json)
  });
});
}


const show = (data) => {
  title.textContent = `#${data.slip.id}`
  text.textContent = data.slip.advice
}
fetchData()
btn.addEventListener('click', ()=>{
  fetchData()
})
