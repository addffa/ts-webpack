export default function printMe(): Node {
    const elem = document.createElement('div');
    const btn = document.createElement('button');

    btn.innerHTML = "click bro sis!";
    btn.onclick = () => (console.log("printMe update..."));
    elem.innerHTML = "from print";
    elem.appendChild(btn);

    return elem;
}