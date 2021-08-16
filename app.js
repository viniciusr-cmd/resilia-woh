var resp

function pergunta(e1, e2, certa, link) {
  resp = prompt("Selecione 1, 2 ou 3")
  while(resp != certa){    
    if(resp == e1 || resp == e2){
      alert("RESPOSTA ERRADA, VOCÊ SUCUMBE A MALDIÇÃO DOS DEUSES ANCIÕES")
      alert('GAMEOVER')     
      restart()
      break
    }    
    resp = prompt("Por favor, Selecione 1, 2 ou 3")
  }  

  if (resp == certa) {
    location.replace(`${link}.html`);
    
  }
}

function nextStage(arq) {
  location.replace(`${arq}.html`)
}

function restart() {
  location.replace("../index.html")
}

function perguntaSelec(r1, r2, r3){
  resp = prompt("Selecione 1, 2 ou 3")

  if (resp === '1') {
    location.replace(`${r1}.html`)
  }
  else if (resp === '2') {
    location.replace(`${r2}.html`)
  }
  else if (resp === '3') {
    location.replace(`${r3}.html`)
  }

  else {
    alert('Por favor, Selecione 1, 2 ou 3')
  }
}