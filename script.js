const convertBtn = document.querySelector('.convert-button');
const URLinput = document.querySelector('.URL-input');



convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});



const sendURL = (URL) => {
    fetch(`http://localhost:8000/download?URL=${URL}`, {
        method:'GET'
    }).then(res => res.json())
    .then(json => console.log(json));
}

