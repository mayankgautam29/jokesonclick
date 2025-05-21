let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
const dadJokes = async () => {
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get("https://icanhazdadjoke.com/",config);
    console.log(res.data.joke);
    h1.innerText = res.data.joke;
}
btn.addEventListener('click', () =>{
    dadJokes();
})