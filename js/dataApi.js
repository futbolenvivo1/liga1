let texto = document.getElementById('testimonio');

// MÉTODO PARA OBTENER POSTS
function getTables() {
    console.log("Tabke")
        fetch(`https://sis.fpf.org.pe/fixture/api/liga/tabla/listar?id_competencia=1&id_periodo=3&id_fase=181`)
        .then((resp) => {
            console.log("Ramos")
            return resp.json();
        }).catch((error) => {
            console.log('ERROR: ', error);
        });
}

getTables();