// Função que retorna uma Promise representando a operação assincrona
function pegaDados() {
    //Retorna uma Promisse que resolve quando a requisição fetch é bem sucedida.
    return fetch("https://api.github.com/users/jaineRodrigues")
        .then((res) => {
            //a resposta da requisição é retoenada como uma Promise resolvida

            //Aqui, a resposta esta sendo convertida para JSON e retornando o seu resultado
            return res.json();
        })
        .catch((error) => {
            //Se houver algum erro na requisição, a Promise é regeitada
            console.error("Erro na requisição", error);

            //Lança o erro novamente par que possa ser tratado por quem chama a função
            throw error;
        });
}
//=================================================================

//Função assincrona para chamar a função que retorna a Promise
(async function executaOeracaoAssincrona() {
    try {
        //Utiliza o await para esperar a conclusão da operação assincrona
        const result = await pegaDados();

        //apos a conclusõa da operação, imprime o resultado
        console.log("Dados obtidos na requisição:", result);
    } catch (error) {
        //Se ocorrer algum erro durante a requisição, o erro é capturado e tratado
        console.error("Erro ao obter os dados", error);
    }
})();
