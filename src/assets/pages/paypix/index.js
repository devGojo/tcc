import './index.scss'
import { Link } from 'react-router-dom'
import smile from "../../image/bad-yellow 2.png"
import slogan from "../../image/yellow bad 1.png"
import logo3 from "../../image//pngtree-vector-magnifying-glass-icon-png-image_889405.png"
import logo4 from "../../image/image 2.png"
import logo5 from "../../image/image 63.png"
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

import logo19 from"../../image/png-transparent-adhesive-tape-barricade-tape-police-police-tape-angle-police-officer-text (1).png"
import sufwhite from "../../image/sufgangwhite.png"
import dunklow from"../../image/dunklow 2.png"

function Paypix() {
    return (

    <header>
       <div className='principal'>

        <div className="cabecalho">
        <div className="imgesquerda">
          <img src={smile} />
          <img src={slogan} />
        </div>

        <div className="text">
          <h2> NEWS </h2>
          <h2> SHOP </h2>
          <h2> BRANDS </h2>
        </div>

        <img className="lupa" src={logo3} />
        <img className="lupa1" src={logo5} />

        <h2 className="tex2"> Minha conta <br></br> Conecte-se </h2>

        <img className="lupa" src={logo4} />
        <h2 className="tex2"> Carrinho <br></br> R$ 0,00 BRL </h2>

        <div className="ff">
          <div className="finalcabecalho"></div>
          <div className="finalcabecalho"></div>
          <div className="finalcabecalho"></div>
        </div>
                </div>
      </div>
    </header>

  
      
    );
  }
  
  export default Paypix;