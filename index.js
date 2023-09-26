

function getAmount() {
    fetch('https://www.equaldex.com/issue/non-binary-gender-recognition', {
        method: 'GET',
        mode: "cors",
        headers: {
            origin: "https://nof0xgvn.github.io"
        }
    }).then((resp) => {console.log(resp); resp.text()}).then(data => {
        console.log(data);
        const parser = new DOMParser();
        let doc = parser.parseFromString(data, 'text/html');
        let amount = doc.querySelector('h2, b').innerHTML;
        console.log(amount);

        document.getElementById("amount").text = amount;
    })
}

getAmount();