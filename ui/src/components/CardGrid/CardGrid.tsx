import React from 'react';
import { Link } from 'react-router-dom';
import './CardGrid.css';

export type CardContent = {
  id: number;
  link: string;
  title: string;
  contentLines: string[];
};

export type CardGridProps = {
  cards: CardContent[];
};

export function CardGrid({ cards }: Readonly<CardGridProps>): React.JSX.Element {
  return (
    <div className="cards">
      {
        cards.map(card => (
          <Link className='card-link' key={card.id} to={card.link}>
            <div className='card'>
              <h2>{card.title}</h2>
              { card.contentLines.map((line, index) => <p key={`${card.id}-${index}`}>{line}</p>) }
            </div>
          </Link>
        ))
      }
    </div>
  );
}
