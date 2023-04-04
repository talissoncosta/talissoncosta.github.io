
fetchNewAdvice()

function fetchNewAdvice() {
  fetch('https://api.adviceslip.com/advice').then(function (response) {
    return response.json();
  }).then(function (data) {
    const { slip: { id, advice }} = data
    setAdiviceTitle(`ADVICE #${id}`)
    setAdviceContent(advice)
    removeLoader()
  
  }).catch(function (err) {
    console.warn('Something went wrong.', err);
  
    setAdiviceTitle("Sorry, something went wrong!")
    setAdviceContent("Worrying, anger, complaining, denial, or any of the infinite other ways we try to circumvent pain when things go wrong won't change the situation.")
    
    removeLoader();
  });
}

function removeLoader() {
  document.getElementById('btn-action').disabled = false
  document.getElementById('loader').style.display = 'none'
}

function addLoader() {
  document.getElementById('btn-action').disabled = true
  document.getElementById('loader').style.display = 'block'
}

function setAdiviceTitle(text) {
  document.getElementById('advice-title').innerHTML = text
}

function setAdviceContent(text) {
  document.getElementById('advice-content').innerHTML = text
}

function removeCurrentAdvice() {
  document.getElementById('advice-title').innerHTML = ''
  document.getElementById('advice-content').innerHTML = ''
}

document.getElementById('btn-action').addEventListener('click', function() { 
  addLoader()
  removeCurrentAdvice()
  fetchNewAdvice() 
});
