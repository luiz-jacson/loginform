import React from "react";
import { useState } from "react";
import { Navigate, Route, useNavigate, useParams } from "react-router-dom";
import '../styles/principal.css'

export default props => {
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');
    const parametros = useParams({});
    const navigate = useNavigate();
    const Dados = async (event) => {
        console.log(user);
        return (
            navigate("/login")
        )
    }

    return (
        <div className="principal">
            <form action="submit" onSubmit={(data) => Dados(data)}>
                <div className="title">
                    <h1>Login</h1>
                </div>
                <div className="campoUser">
                    <h2>Usuário</h2>
                    <input type="text" placeholder="Usuário" name="usuario" onChange={(e) => setUser(e.target.value)}></input>
                </div>
                <div className="campoSenha">
                    <h2>Senha</h2>
                    <input type="text" placeholder="Senha" name="senha" onChange={(e) => setSenha(e.target.value)}></input>
                </div>
                <a href="mobile://detran.se" target="_blank" rel="noreferrer">Logar</a>
            </form>
        </div>
    )
}
