import _ from 'lodash';
import printMe from './print';

function component(): Node {
    const elem = document.createElement('div');
    const btn = document.createElement('button');

    btn.innerHTML = "click bro!";
    btn.onclick = () => (console.log("printMe"));
    elem.innerHTML = _.join(['Hello', 'webpack'], ' ');
    elem.appendChild(btn);

    return elem;
}

let elem = component();
document.body.appendChild(elem);

if (module.hot) {
    module.hot.accept('./print', function() {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(elem);
        elem = printMe();
        document.body.appendChild(elem);
    })
}