
function adviceFunction() {
    axios.get('	https://api.adviceslip.com/advice')
        .then((response) => {
            let text = response.data.slip.advice;
            let id = response.data.slip.id;

            document.getElementById('advice').innerHTML = `"${text}"`;
            document.getElementById('advice-id').innerHTML = `ADVICE #${id}`
        })
        .catch((e) => {
            console.log(e)
        })
}
