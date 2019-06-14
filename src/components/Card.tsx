import React, { FunctionComponent } from 'react';

type CardProps = {
  title: string,
  content: string
}

const Card: FunctionComponent<CardProps> = ({title, content}) => <div>
  <h2>{title}</h2>
  <p>{content}</p>
</div>

export default Card;