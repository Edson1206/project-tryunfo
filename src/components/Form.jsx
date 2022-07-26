import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <div>
          Nome
          <input
            data-testid="name-input"
            type="text"
            name="name"
            required
          />
        </div>
        <div>
          Descrição
          <input
            data-testid="description-input"
            type="textarea"
            name="description"
          />
        </div>
        <div>
          Attr01
          <input
            data-testid="attr1-input"
            type="number"
          />
        </div>
        <div>
          Attr02
          <input
            data-testid="attr2-input"
            type="number"
          />
        </div>
        <div>
          Attr03
          <input
            data-testid="attr3-input"
            type="number"
          />
        </div>
        <div>
          Imagem
          <input
            data-testid="image-input"
            type="text"
          />
        </div>
        <div>
          Raridade
          <select
            data-testid="rare-input"
            name="rarity"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </div>
        <div>
          <label htmlFor="tryunfo">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              name="super"
              id="tryunfo"
            />
            Super Trybe Trunfo
          </label>
        </div>
        <div>
          <button
            data-testid="save-button"
            type="submit"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
