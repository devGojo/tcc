import './index.scss';
import { Link } from 'react-router-dom';

import logo1 from "../../image/bad-yellow 2.png"
import logo2 from "../../image/yellow bad 1.png"
import logo3 from "../../image//pngtree-vector-magnifying-glass-icon-png-image_889405.png"
import logo4 from "../../image/image 2.png"
import logo5 from "../../image/profi.png"


import logo6 from "../../image/SUF COLLAGE 1.png"
import logo7 from "../../image/CONFIRA A COLEÇÃO.png"


import logo8 from "../../image/image 3.png"
import logo9 from "../../image/image 4.png"
import logo10 from "../../image/image 5.png"

import logo11 from "../../image/image 7.png"
import logo12 from "../../image/image 8.png"

import logo13 from "../../image/D_NQ_NP_787723-MLB50018200486_052022-O.webp"
import logo14 from "../../image/image 60.png"

import logo15 from "../../image/Connector line.png"
import logo16 from "../../image/Connector line (1).png"

import logo17 from "../../image/image 32.png"

import logo18 from "../../image/bad-yellow 1.png"

import logo19 from "../../image/png-transparent-adhesive-tape-barricade-tape-police-police-tape-angle-police-officer-text (1).png"
import logo20 from "../../image/image 164.png"
import logo21 from "../../image/image 168.png"
import logo22 from "../../image/image 169.png"

import logo23 from "../../image/45406.png"
import logo24 from "../../image/54324.png"




function Cadastro() {
    return (
        <main>
            <header>
                <img src={logo1} />
                <img src={logo2} />
            </header>
            <section>
                <div className='conteudocadastro'>
                    <div className='loginzin'>
                        <p>Crie sua Conta</p>
                    </div>
                    <div className='domo'>
                        <p>Nome:</p> <input className='inpu3' type="text" name="name type ahead" id="email_type_ahead" ></input>
                        <p>Telefone:</p> <input className='inpu4' type="(number)" name="tel type ahead" id="email_type_ahead" ></input>
                        <p>CPF:</p> <input className='inpu5' type="text" name="email type ahead" id="email_type_ahead" ></input>
                        <p>Email:</p> <input className='inpu1' type="text" name="email type ahead" id="email_type_ahead" ></input>
                        <p>Senha:</p><input className='inpu2' type='password' autoComplete='username'></input>
                    </div>
                    <button class="ui-button ui-button--primary ui-button--full-width ui-button--size-large  captcha__submit" type="submit" name="commit" data-disable="true" data-bind-disabled="captchaDisabled" define="{localClass: new CaptchaStateHandler($context, {
                              v2Completed: true,
                              v3EnterpriseCompleted: false,
                              formCompleted: true,
                            })}" enable_submit_onload="true">Cadastrar-se</button>
                    <div className='tchouameni'>

                        <Link to ="/login">

                        Já tem uma conta? Clique aqui!      

                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
}

export default Cadastro;
