import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';


function App() {
  var titulo = <p className='titulo'>Generador de tarjetas perzonalizadas</p>
  var copy = <small className="copyrigth">Copyrigth &copy; 2021 | Diseñado y Desarrollado por: <a
  class="autor" href="tel:+953659803">Juan J. Huiza</a></small>;

  var burbujas = <svg className='burbuja1' viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <path fill="#2a2a2a" d="M38,-25.3C50.9,-14,64.3,1.9,63.4,18C62.6,34.1,47.3,50.4,28.2,60.3C9,70.1,-14,73.6,-33.3,65.7C-52.6,57.7,-68.2,38.4,-68.9,20.1C-69.6,1.7,-55.6,-15.7,-41.6,-27.2C-27.7,-38.8,-13.8,-44.5,-0.7,-44C12.5,-43.4,25,-36.7,38,-25.3Z" transform="translate(70 90)" />
  </svg>

var burbujas2 = <svg className='burbuja2' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path fill="#1d1e20af" d="M38,-25.3C50.9,-14,64.3,1.9,63.4,18C62.6,34.1,47.3,50.4,28.2,60.3C9,70.1,-14,73.6,-33.3,65.7C-52.6,57.7,-68.2,38.4,-68.9,20.1C-69.6,1.7,-55.6,-15.7,-41.6,-27.2C-27.7,-38.8,-13.8,-44.5,-0.7,-44C12.5,-43.4,25,-36.7,38,-25.3Z" transform="translate(100 100)" />
</svg>
 
  const[linea1,setLinea1] = useState('');
  const[linea2,setLinea2] = useState('');
  const[imagen,setImagen] = useState('');

  const onChangeLinea1=function(evento){
    setLinea1(evento.target.value)
  }

  const onChangeLinea2=function(evento){
    setLinea2(evento.target.value)
  }

  const onChangeImagen=function(evento){
    setImagen(evento.target.value)
  }

  const onClickExportar=function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/jpg");
      var link = document.createElement('a');
      link.download = 'meme.jpg';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App contenedor">
    
    {titulo}
    {burbujas}
    {burbujas2}
    <select onChange={onChangeImagen}>
      <option value="" disabled selected>Seleccione</option>
      <option value="fiestas1">Fiestas 1</option>
      <option value="fiestas2">Fiestas 2</option>
      <option value="fiestas3">Fiestas 3</option>
      <option value="fiestas4">Fiestas 4</option>
      <option value="fiestas5">Fiestas 5</option>
      <option value="fiestas6">Fiestas 6</option>
      <option value="fiestas7">Fiestas 7</option>
    </select>

    <input onChange={onChangeLinea1} type="text" placeholder="Ingresar mensaje 1"/>
    <input onChange={onChangeLinea2} type="text" placeholder="Ingresar mensaje 2"/>
    <button onClick={onClickExportar}><span></span>Exportar</button>

    <div className="meme" id="meme">
        <span>{linea1}</span><br/>
        <span>{linea2}</span>
        <img src={'/tarjetaspersonalizadas/img/'+imagen+'.jpg'} alt='imagen'/>
    </div>
    {copy}
    </div>
  );
}

export default App;
