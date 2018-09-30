import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import image from "../assets/img/cat.png";

const items = [
  {
    id: 1,
    topText: "Сказочное заморское яство",
    name: "Нямушка",
    subname: "с фуа-гра",
    properties: ["10 порций", "мышь в подарок"],
    image: image,
    weight: "0,5",
    description: "Печень утки разварная с артишоками.",
    available: true
  },
  {
    id: 2,
    topText: "Сказочное заморское яство",
    name: "Нямушка",
    subname: "с рыбой",
    properties: ["40 порций", "2 мыши в подарок"],
    image: image,
    weight: "2",
    description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    available: true
  },
  {
    id: 3,
    topText: "Сказочное заморское яство",
    name: "Нямушка",
    subname: "с курой",
    properties: ["100 порций", "5 мышей в подарок", "заказчик доволен"],
    image: image,
    weight: "5",
    description: "Филе из цыплят с трюфелями в бульоне.",
    available: false
  }
];

class Cards extends Component {
  render() {
    return (
      <div className="cards">
        {items.map((item, i) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    );
  }
}
export default Cards;
