import {StyledContato} from './styles';

const Contatos = () => {
  return (
    <StyledContato>
      <form>
            <label for="nomeSobrenome">Nome e sobrenome</label>
            <input type="text" id="nomeSobrenome" class="inputPadrao" placeholder="Samuel Alcântara" required/>
            <label for="email">Email</label>
            <input type="emial" id="email" class="inputPadrao" placeholder="alura@emil.com" required/>
            <label for="telefone">Telefone</label>
            <input type="tel" id="telefone" class="inputPadrao" placeholder="(DD) 98765-4321" required/>
            <label for="mensagem">Mensagem</label>
          
            <textarea id="mensagem" cols="70" rows="10" class="inputPadrao" placeholder="Eu sou careca" required/>

            <fieldset>
                <legend>Como prefere nosso contato</legend>
                <label for="radioEmail"><input id="radioEmail" type="radio" name="contato" value="email"/>Email</label>
                <label for="radioTelfone"><input id="radioTelefone" type="radio" name="contato" value="telefone"/>Telefone</label>
                <label for="radioWhatsapp"><input id="radioWhatsapp" type="radio" name="contato" value="whatsapp" checked/>Whatsapp</label>
            </fieldset>

            <label class="checkbox"><input type="checkbox" checked></input> Gostaria de receber nossas novidades por email?</label>
            <fieldset>
                <legend>Qual horario prefere ser atendido?</legend>
                <select >
                    <option >Manhã</option>
                    <option >Tarde</option>
                    <option >Noite</option>
                </select>
            </fieldset>

            <div >
                <input type="submit" value="Enviar formulário" class="enviar"/>
            </div>
      </form>

      <table>
        <thead>
          <tr>
            <th>Dia</th>
            <th>Horário</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Segunda</td>
            <td>8h ~ 20h</td>
          </tr>

          <tr>
            <td>Quarta</td>
            <td>8h ~ 20h</td>
          </tr>

          <tr>
            <td>Sexta</td>
            <td>8h ~ 20h</td>
          </tr>
        </tbody>
      </table>
    </StyledContato>
  );
};

export { Contatos };
