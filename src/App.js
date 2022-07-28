import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
    };
  }

  verifyTrunfo = () => {
    const { cardList } = this.state;
    const arrayCardList = cardList.map((item) => item.cardTrunfo);
    if (arrayCardList.includes(true)) {
      this.setState({ hasTrunfo: true });
    }
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardList,
    } = this.state;

    const currentCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    cardList.push(currentCard);

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });

    this.verifyTrunfo();
  }

  formsRequired = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const zero = 0;

    if (cardName.length <= zero
      || cardDescription.length <= zero
      || cardImage.length <= zero
      || cardRare.length <= zero
    ) {
      return false;
    }
    return true;
  }

  attrFieldRules = () => {
    let { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    cardAttr1 = Number(cardAttr1);
    cardAttr2 = Number(cardAttr2);
    cardAttr3 = Number(cardAttr3);
    const totalAllAttributes = 210;
    const maxAttribute = 90;
    const minAttribute = 0;

    if (cardAttr1 > maxAttribute
      || cardAttr2 > maxAttribute
      || cardAttr3 > maxAttribute) {
      return false;
    } if (cardAttr1 < minAttribute
      || cardAttr2 < minAttribute
      || cardAttr3 < minAttribute) {
      return false;
    } if (cardAttr1 + cardAttr2 + cardAttr3 > totalAllAttributes) {
      return false;
    }
    return true;
  }

  buttonOK = () => {
    const isSaveButtonEnabled = this.attrFieldRules() && this.formsRequired();
    this.setState({ isSaveButtonDisabled: !isSaveButtonEnabled });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.buttonOK());
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      cardList,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <hr />
        <h3>Carta para adicionar:</h3>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <hr />
        <h3>Baralho Trybe Trunfo</h3>
        <div>
          { cardList.map((card, index) => (
            <div key={ index }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
            </div>
          )) }
        </div>
      </div>
    );
  }
}

export default App;
