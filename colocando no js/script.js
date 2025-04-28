
const objs = [
    {
        nome:'Pedro',
        idade:19,
        esta_trabalando:false,
        detalhes_profissao:{
            profissao:null,
            empresa:null
        },
        hobbies:['jogar', 'fazer codigo', 'fazer carinho em gatos']
    },
    {
        nome:'Falko',
        idade: 20,
        esta_trabalhando:true,
        detalhes_profissao:{
            profissao:'programador',
            empresa:'empresa X'
        },
        hobbies: ['andar a cavalo', 'fazer tiro a alvo']
    }
]

console.log(objs)

// JSON
// Converter um arquivo para JSON

const jsonData = JSON.stringify(objs)

console.log(jsonData)

// Converter JSON para objeto

const objData = JSON.parse(jsonData);

console.log(objData)

// Retorna o dado desejado do objeto usando a função map, no caso retornando o nome

objData.map((nomeDaLista) => {
    console.log(nomeDaLista.nome)
})
