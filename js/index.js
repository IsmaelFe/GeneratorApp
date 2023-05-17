function adviceFunction() {
  axios
    .get("	https://api.adviceslip.com/advice")
    .then((response) => {
      let text = response.data.slip.advice;
      let id = response.data.slip.id;

      let advice = document.querySelector("#advice");
      let adviceId = document.querySelector("#advice-id");

      advice.innerHTML = `"${text}"`;
      adviceId.innerHTML = `ADVICE #${id}`;
    })
    .catch((e) => {
      console.log(e);
    });
}
