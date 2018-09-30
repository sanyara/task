import React, { Component } from "react";
import ReactDOM from "react-dom";

const CardProperties = props => {
  return <li className="card__property">{props.item}</li>;
};

const CardDescription = props => {
  if (props.isSelected && props.isAvailable) {
    return <p className="card__description">{props.description}</p>;
  } else if (!props.isAvailable) {
    return (
      <p className="card__description">Печалька, {props.subname} закончился.</p>
    );
  } else {
    return (
      <p className="card__description">
        Чего сидишь? Порадуй котэ,{" "}
        <a href="#" onClick={props.onClick}>
          купи
        </a>
        .
      </p>
    );
  }
};
const CardTopText = props => {
  if (!props.isSelectedHover) {
    return <span className="card__top">{props.topText}</span>;
  } else {
    return <span className="card__top">Котэ не одобряет?</span>;
  }
};

class Card extends Component {
  constructor(props) {
    super(props);
    this.toggleSelectHandler = this.toggleSelectHandler.bind(this);
    this.state = {
      isSelected: false,
      isSelectedHover: false
    };
  }

  toggleSelectHandler(e) {
    e.preventDefault();
    if (this.props.available) {
      this.setState(prevState => ({ isSelected: !prevState.isSelected }));

      if (this.state.isSelected) {
        this.setState({
          isSelectedHover: false
        });
      }
    }
  }

  handleHoverLeave(e) {
    if (this.state.isSelected) {
      this.setState({
        isSelectedHover: false
      });
    }
  }

  handleHoverEnter(e) {
    if (this.state.isSelected) {
      this.setState({
        isSelectedHover: true
      });
    }
  }

  makeStateClassName(className) {
    let cardClassName = className + " ";
    if (this.props.available) {
      if (this.state.isSelected) {
        cardClassName += className + "--selected ";
      }
      if (this.state.isSelectedHover) {
        cardClassName += className + "--hover-after-select";
      }
    } else {
      cardClassName += className + "--disabled ";
    }

    return cardClassName;
  }

  render() {
    return (
      <div className={this.makeStateClassName("card")}>
        <div
          className={this.makeStateClassName("card__tile")}
          onClick={this.toggleSelectHandler}
          onMouseEnter={e => this.handleHoverEnter(e)}
          onMouseLeave={e => this.handleHoverLeave(e)}
        >
          <CardTopText
            topText={this.props.topText}
            isSelectedHover={this.state.isSelectedHover}
          />
          <h2 className="card__title">
            <span className="card__title-text">{this.props.name}</span>
            <span className="card__title-subtext">{this.props.subname}</span>
          </h2>
          <ul className="card__properties">
            {this.props.properties.map((item, i) => {
              return <CardProperties key={i} item={item} />;
            })}
          </ul>
          <div className="card__picture">
            <img
              src={this.props.image}
              alt={this.props.name + " " + this.props.subname}
            />
          </div>
          <div className="card__weight">
            <span className="card__weight-value">{this.props.weight}</span>
            <span className="card__weight-measure">кг</span>
          </div>
        </div>
        <CardDescription
          isSelected={this.state.isSelected}
          isAvailable={this.props.available}
          description={this.props.description}
          subname={this.props.subname}
          onClick={this.toggleSelectHandler}
        />
      </div>
    );
  }
}
export default Card;
