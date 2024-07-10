import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        setErro(false); // Reiniciar o estado de erro ao iniciar a busca
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 1000);
            })
            .catch(e => {
                setEstaCarregando(false);
                setErro(true);
                console.error('Fetch error:', e);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando && <h1>Carregando...</h1>}

            {!estaCarregando && erro && (
                <h2>Erro ao procurar o usuário, procure novamente</h2>
            )}

            {!estaCarregando && !erro && (
                <ul className={styles.list}>
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
    );
};

export default ReposList;
