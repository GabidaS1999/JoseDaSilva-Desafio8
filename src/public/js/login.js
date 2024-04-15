
const form = document.getElementById('loginForm');

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form)

    const obj = {}

    data.forEach((value, key) => obj[key] = value);

    fetch('/api/jwt/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(result => {
        if (result.status === 200) {
            result.json()
                .then ( json=> {
                    console.log(json);
                    console.log("Cookie generada");
                    console.log(document.cookie)
                    alert("Login realizado con exito")
            })
            window.location.replace('/products')
        }
    }
    )
})