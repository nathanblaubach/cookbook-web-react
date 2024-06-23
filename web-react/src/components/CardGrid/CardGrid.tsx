import React from 'react';
import { Link } from 'react-router-dom';
import './CardGrid.css';

export type CardContent = {
  id: number;
  link: string;
  title: string;
  contentLines: Array<string>;
};

export type CardGridProps = {
  cards: CardContent[];
};

export function CardGrid({ cards }: CardGridProps): React.JSX.Element {
  return (
    <div className="cards">
      {
        cards.map(card => (
          <Link className='card-link' key={card.id} to={card.link}>
            <div className='card'>
              <h2>{card.title}</h2>
              { card.contentLines.map((line, i) => <p key={i}>{line}</p>) }
            </div>
          </Link>
        ))
      }
    </div>
  );
}
