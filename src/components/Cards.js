import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Movies!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='FREE GUY: A bank teller discovers that he is actually an NPC inside a brutal, open world video game.'
              label='Comedy'
              path='/Movies'
            />
            <CardItem
              src='images/img-1.jpg'
              text='STAR WARS - THE FORCE AWAKENS : Thirty years after the Battle of Endor, a new threat has risen in the form of the First Order and...'
              label='Action/ Sci-Fi'
              path='/Movies'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='THE ASSASSIN:  A female assassin receives a dangerous mission to kill a political leader in eighth-century China.'
              label='Action/ History'
              path='/Movies'
            />
            <CardItem
              src='images/img-4.jpg'
              text='AVATAR: A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes...'
              label='Adventure/ Fantasy'
              path='/Movies'
            />
            <CardItem
              src='images/img-2.jpg'
              text='BEAUTY AND THE BEAST: A selfish Prince is cursed to become a monster for the rest of his life...'
              label='Family/ Fantasy'
              path='/Movies'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
