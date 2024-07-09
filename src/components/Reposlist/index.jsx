import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson)
                }, 1000)
            })
    }, [nomeUsuario])

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (

            <ul className={styles.list}>
                {/* {repos.map(repositorio => ( */}
                {repos.map(({ id, name, language, html_url }) => (
                    <li className={styles.list__item} key={id}>
                        <div className={styles.list__name}>
                            <b>Nome: </b> {name}
                        </div>
                        <div className={styles.list__language}>
                            <b>Linguagem: </b> {language}
                        </div>
                        <a className={styles.list__link} target="_blank" href={html_url}>Visitar no Github</a>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default ReposList;