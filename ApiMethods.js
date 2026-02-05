var urlBase = "https://proj-diegoback.onrender.com"

function cadastrar(nome, email, senha) {
    fetch(urlBase + "/aluno/create",
        {
            headers: {
                'Accept': "application/json",
                'Content-type': "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                nome: nome,
                email: email,
                senha: senha
            })
        }
    )
        .then(function (res) {
            const resposta = res.status;
            if (resposta == 20) {
                window.alert("Cadastro realizado com sucesso! ")
                redirecionar("StudentPage.html")
            }
        })
        .catch(function (res) { console.log(res.status) })
}

function login(matricula, senha) {
    fetch(urlBase + "/aluno/findAluno/" + matricula,
        {
            headers: {
                'Accept': "application/json",
                'Content-type': "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                matricula: matricula,
                senha: senha
            })
        }
    )
        .then(function (res) {
            const resposta = res.status;
            if (resposta == 20) {
                window.alert("Cadastro realizado com sucesso! ")
                redirecionar("StudentPage.html")
            }
        })
        .catch(function (res) { console.log(res.status) })
}



function redirecionar(nextPage) {
    setTimeout(function () {
        window.location.href = nextPage;
    }, 1500);
}