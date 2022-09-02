const adviceId = document.getElementById('advice-id');
const adviceElement = document.querySelector('.advice');
const button = document.querySelector('.button--random');

const d = async () => {
    const apiUrl = 'https://api.adviceslip.com/advice';
    const resp = await fetch( apiUrl, {cache: 'no-cache'});

    return resp;
}

const getFecthAdvice = async () => {
    button.addEventListener('click' , async (e) => {
        e.preventDefault();     

        const resp = await d();
        const { slip } = await resp.json(); 

        adviceId.innerHTML = `#${slip.id}`;
        adviceElement.innerHTML = `${slip.advice}`;
    })

}

getFecthAdvice();
