import _ from 'lodash';
import './style.css';

function component(): Node {
    const elem = document.createElement('div');
    elem.innerHTML = _.join(['Hello', 'webpack'], ' ');
    elem.classList.add('tes');
    return elem;
}

document.body.appendChild(component());