import _ from 'lodash';
import './style.css';
import MyImage from './roadmap.png';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  let image = new Image();
  image.src = MyImage
  element.appendChild(image);

  return element;
}

document.body.appendChild(component());