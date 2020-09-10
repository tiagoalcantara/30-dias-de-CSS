function handleContentChange(contentFile){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `${contentFile}/index.xml`, true);
  xhr.onreadystatechange = function () {
    if(this.readyState !== 4) return;
    if(this.status !== 200) return;
    document.querySelector('#root').innerHTML = this.responseText;
  }
  xhr.send();
}

function handleStyleChange(styleFile) {

  const styleTag = document.querySelector('#mutable-style');
  styleTag.setAttribute('href', `${styleFile}/styles.css`);
}

function handleSelectedMenuItem(index){
  const previouslySelected = document.querySelector('.selected');
  previouslySelected.classList.remove('selected');

  const newSelected = document.querySelector(`ul li:nth-child(${index}) button`)
  newSelected.classList.add('selected');
}

function handleTitleChange(title){
  const titleElement = document.querySelector('h1');
  titleElement.textContent = title;
}

function handleOnClick(whichDay, title){
  const formattedNumber = new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2, maximumFractionDigits: 0}).format(whichDay);
  const formattedDay = `dia${formattedNumber}`;
  const formattedTitle = `Dia ${formattedNumber} - ${title}`;

  handleTitleChange(formattedTitle);
  handleSelectedMenuItem(whichDay);
  handleContentChange(formattedDay);
  handleStyleChange(formattedDay);
}

handleOnClick(1, 'Texto animado em onda');