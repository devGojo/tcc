import './index.scss';

import logo1 from "../../image/bad-yellow 2.png"
import logo2 from "../../image/yellow bad 1.png"
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
import logo20 from "../../image/image 164.png"
import logo21 from "../../image/image 168.png"
import logo22 from "../../image/image 169.png"

import logo23 from "../../image/45406.png"
import logo24 from "../../image/54324.png"
import logo25 from "../../image/61418.png"

function Consulta() {
  return (
<div className='principal'>
    <div className="cabecalhoo">
    <div className="imgesquerda">
      <img src={logo1} />
      <img src={logo2} />
    </div>

    <div className="text">
      <input type='text' placeholder='EX: HIGH COMPANY'/>
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
        <div className='high'>

           <div className='imagens'> 
                <img className='logo20' src={logo20} />
                <img className= 'logo21' src= {logo21}/>
                <img className='logo25' src= {logo22}/>
            </div>

            <div className='nomes' >
                <p className='cm1'> HIGH - Camiseta Lucky "Black" </p>
                <p className='cm2' > HIGH - Camiseta Fusion "White"</p>
                <p className='cm3' >  HIGH - Camiseta Tooled "Brown"</p>



            </div>

            <div className='nomes2'>

                <p className='cm4' > R$199,99 </p>
                <p className='cm5' > R$139,99 </p>
                <p className='cm6' > R$199,99 </p>


            </div>


            <div className='nomes3'>

                <p className='cm7' > Em até 8x de R$25,00 </p>
                <p className='cm8' > Em até 8x de R$17,50 </p>
                <p className='cm9' > Em até 8x de R$25,00 </p>

            </div>

           



        </div>

            <div className='edit'>
               
               <div className='esquerdaedit'>

                <img className='logo23' src={logo23}/>
                <img className='logo24' src={logo24}/>

               </div>
               
               <div className='meio'>  
                    <img className='logo232' src={logo23}/>
                    <img className='logo242' src={logo24}/>
                </div>
                
                <div className='direita'>
                    <img className='logo233' src={logo23}/>
                    <img className='logo243' src={logo24}/>
                </div>
            
            </div>
</div>  

  );
}

export default Consulta;
