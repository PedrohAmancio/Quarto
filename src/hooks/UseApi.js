// importação do useState para crias as variáveis
import { useState, useEffect } from "react"

// Variável para url da api, vindo do arquivo .env
const url = import.meta.env.VITE_API_URL

export function getFuncionarios(){
    const [funcionarios, setfuncionarios] = useState([]) // criando a variável funcionarios, que vai armazenar os dados da api. O useState é um hook do react que permite criar variáveis de estado em componentes funcionais.

    // presciso para não chamar a api a todo o tempo. 
    // só roda uma vez.
    useEffect(() =>{
        async function fetchData(){
            try{
                const response = await fetch(url) //só volta quando tiver os dados
                const data = await response.json() // converte os dados para json
                setfuncionarios(data) // setando os dados na variável funcionarios
                console.log("Dados recebidos:", data)
            }
            catch(error){
                console.log("Erro ao buscar os dados:", error)
            }
        }
        fetchData() // chamando a função para buscar os dados
    // o array vazio significa que só vai rodar uma vez, quando o componente for montado
    }, [])

    return funcionarios
}

export function addFuncionario(funcionario ){
    async function fetchData(){
        try{
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(funcionario),
            })
            const data = await response.json()
            console.log("Usuario adicipando", data)
        }
        catch(error){
            console.log("Erro ao cadastrar funcionario:", error)
        }
    }
    fetchData()
}