import { useState, useEffect } from "react"

const Formulario = () => {

    let [materiaA, setMateriaA]= useState(0)
    let [materiaB, setMateriaB]= useState(0)
    let [materiaC, setMateriaC]= useState(0)
    let [nome, setNome] = useState('');


    useEffect(() => {
        console.log("O componente iniciou")

        return () => {
            console.log("O componente finalizou")
        }
    }, [])

    useEffect(() => {
        console.log("O estado nome mudou")
    },[nome]) // update

    const alteraNome = (evento) => {

        setNome(estadoAnterior => {

            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3
        if (media >= 7){
            return (
                <p>Olá {nome}, foi aprovado</p>
            )
        } else {
            return(
            <p>Olá {nome}, não foi aprovado</p>
        )
        }
    }

    return (
        <form>
            <ul>
            {[1,2,3,4,5].map(item =>(
                <li>{item}</li>
            ))}
            </ul>
            <input type="text" placeholder="Nome do aluno" onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
        
    )

    
}
export default Formulario