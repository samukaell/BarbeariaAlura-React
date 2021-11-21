import cabelo from '../../assests/images/cabelo.jpg'
import barba from '../../assests/images/barba.jpg'
import cabeloBarba from '../../assests/images/cabelo+barba.jpg'
import {StyledServicos} from './styles'

const Servicos =()=>{
    return (
        <StyledServicos>
            <ul class="produtos">
            <li>
                <h2>Cabelo</h2>
                <img src={cabelo}/>
                <p class="produto-descrisao">Na tesoura ou na máquina, como o cliente preferir</p>
                <p class="produto-preco">R$ 25,00</p>
                
            </li>
            <li>
                <h2>Barba</h2>
                <img src={barba}/>
                <p class="produto-descrisao">Corte e desenho profissional de barba</p>
                <p class="produto-preco">R$ 18,00</p>
            </li>
            <li>
                <h2>Cabelo + Barba</h2>
                <img src={cabeloBarba}/>
                <p class="produto-descrisao">Pacote completo cabelo e barba</p>
                <p class="produto-preco">R$ 35,00</p>
            </li>
        </ul>
        </StyledServicos>
    );
}

export {Servicos};