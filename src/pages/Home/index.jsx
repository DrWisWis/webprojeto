import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import api from "../../services/api";

function Home(){

    return(
           
        <div>
            <div class="slogan">
            <h1>Agende o sucesso do seu negócio</h1>
        </div>
        <div class="slogan-description">
            <p>Agende de forma eficaz, simples e inteligente, a IGE te proporciona tudo isso.</p>
        </div>
        <div class="cellphone-app">
        <div class="bordas">
        <div class="cellphone-content">
            <div class="cellphone-content-left">
                <img src="./src/assets/cellphone-app.png"/>
            </div>
            <div class="cellphone-content-right">
                <h1>Baixe o nosso app gratuitamente</h1>
                <p>Utilizando o app, você terá acesso ao nosso sistema!</p>
                    <button>
                        <a href="#">
                            <img src="./src/assets/disponivel-google-play-badge.png"/>
                        </a>
                        <a href="#">
                            <img src="./src/assets/disponivel-appstore-badge.png"/>
                        </a>
                    </button>
            </div>
        </div>
    </div>
</div>
<footer id="footer">
        <div class="contact-info">
            <div class="footer-brand">
                <a href="index.html"><img src="./src/assets/logo_white-sf.png" id="f-logo"/></a>
            </div>
            <p id="contato"><i class="bi bi-geo-alt"></i> R. Interna Grupo-Bandeirantes, 138</p>
            <p><i class="bi bi-telephone"></i> (11) 9999-9999</p>
            <p><i class="bi bi-envelope"></i> contato@ige.com</p>
        </div>
        <div class="links-container">
            <h4>Outros serviços</h4>
            <nav>
                <a href="#">Agendamento</a>
                <a href="#">IGE Premium</a>
                <a href="#">Afiliação</a>
            </nav>
        </div>
        <div class="links-container">
            <h4>Páginas</h4>
            <nav>
                <a href="#">Termos e condições</a>
                <a href="#">Política de privacidade</a>
                <a href="#">FAQ</a>
            </nav>
        </div>
        <div class="links-container">
            <h4 id="suporte">SUPORTE</h4>
            <div class="phone-number">
                <i class="bi bi-telephone"></i>
                <p>(11) 9999-9999</p>
            </div>
            <p class="phone-info">
                Contato para ajuda
            </p>
            <div class="social-networks">
                <p>Siga-nos:</p>
            </div>
            <div class="networks">
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-twitter"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
            </div>
        </div>
    </footer>
        </div>
        

    )

}

export default Home;

