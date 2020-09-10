function changeContent(contentFile){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `${contentFile}/index.xml`, true);
  xhr.onreadystatechange = function () {
    if(this.readyState !== 4) return;
    if(this.status !== 200) return;
    document.querySelector('#root').innerHTML = this.responseText;
  }
  xhr.send();
}

function changeStyle(styleFile) {
  const styleTag = document.querySelector('#mutable-style');
  styleTag.setAttribute('href', `${styleFile}/styles.css`);
}

function handleOnClick(whichDay){
  changeContent(whichDay);
  changeStyle(whichDay);
}

handleOnClick('dia02');