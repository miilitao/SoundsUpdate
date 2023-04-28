const bancoDeDados = [
  {
    user: 'gabriel',
    id: 1,
    content: 'post'
  }
]

const buttonAudio2 = new Audio();
buttonAudio2.src = "/sound/ES_Button Press 2 - SFX Producer.mp3";
const input = document.getElementById('input-tasks');
const button = document.querySelector('button[class="input-button"]');
const form = document.querySelector('form');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
  buttonAudio2.play();
})
//guardar dentro do bando de dados e também da nossa lista.

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newItem = {
    user: 'fernando',
    id: Date.now(),
    content: input.value
  }
  createElement(newItem);
});

function createElement(item){
  list.insertAdjacentHTML('afterbegin', `<li class="li" id='${item.id}'> <input class="checkbox-button" type="checkbox"> <span contenteditable>${item.content}</span> 
  <button class='excluir' id=${item.id}>Excluir</button> </li>`);

  bancoDeDados.push(item);
  input.value = '';
}

function removeItem(itemId) {
  const item = document.getElementById(itemId);
  if(confirm('Deseja realmente excluir essa tarefa?'))
  item.remove();

  const index = bancoDeDados.findIndex(item => item.id === itemId); // remover o item do banco de dados
  if (index !== -1) {
    bancoDeDados.splice(index, 1);
  }
}

//Não entendi muito bem essa parte.. O evento não foi chamado em nenhum local, só serviu para a condição.
list.addEventListener('click', (event) => {
  if (event.target.classList.contains('excluir')) {
    const itemId = event.target.getAttribute('id');
    removeItem(itemId);
  }
});
