// import { allProducts } from '../images'
import product1 from '../images/product-1.jpg';
import product2 from '../images/product-2.jpg';
import product3 from '../images/product-3.jpg';
import sweet1 from '../images/sweet3.jpg';
import sweet2 from '../images/sweet-2.jpg';
import sweet3 from '../images/sweet-3.jpg';
import aganyi from '../images/aganyi.jpg';
import amala from '../images/amala1.jpg';
import chickenPie from '../images/chicken-pie.jpg';
import chickenChips from '../images/chickenNchips.jpg';
import chineseRice from '../images/chinese-rice.jpg';
import eggPancake from '../images/egg-pancake.jpg';
import frnc from '../images/fried-rice-and-chicken.jpg';
import frnt from '../images/fried-rice-and-turks.jpg';
import glgs from '../images/grilled-lemon-grass=shrimps.jpg';
import jrnc from '../images/jollof-and-chicken.jpg';
import jrnt from '../images/jollof-and-turks.jpg';
import macaroni from '../images/macaroni-meatball.jpg';
import pancakes from '../images/pancakes.jpg';
import pyam from '../images/pundedyam1.jpg';
import semo1 from '../images/semo1.jpg';



const initialItemState = {
    items : [
        {
            img: product1,
            alt: 'Pizza',
            name: 'Supreme Pizza',
            desc:
              'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
            price: 19,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: product2,
            alt: 'Pizza',
            name: 'Hawaiian Paradise',
            desc:
              ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
            price: 16,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: product3,
            alt: 'Pizza',
            name: 'Veggie Overload',
            desc:
              ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
            price: 14,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: sweet2,
            alt: 'Donuts',
            name: 'Doughlicious',
            desc:
              'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
            price: 9,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: sweet3,
            alt: 'Ice Cream',
            name: 'Caramel Wonder',
            desc:
              'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick',
            price: 12,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: sweet1,
            alt: 'Brownie',
            name: 'Brownie Bunch',
            desc:
              'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 9,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: aganyi,
            alt: 'Aganyi Beans and Bread',
            name: 'Aganyi Beans and Bread',
            desc:
              'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 4,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: amala,
            alt: 'Amala',
            name: 'Hot soft Amala',
            desc:
              'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 11,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: chickenPie,
            alt: 'Chicken Pie',
            name: 'Freshly baked Chicken Pie',
            desc:
              'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 10,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: chickenChips,
            alt: 'Chicken and Chips',
            name: 'Grilled Chicken Wings and Chips',
            desc:
              'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 7,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: chineseRice,
            alt: 'Chinese Rice',
            name: 'Chinese Rice',
            desc:
              'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 19,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: eggPancake,
            alt: 'Egg Pancakes',
            name: 'Egg Pancakes',
            desc:
              'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 8,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: frnc,
            alt: 'Fried Rice and Chicken',
            name: 'Hot Fried Rice and Chicken',
            desc:
              'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 9,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: frnt,
            alt: 'Fried Rice and Turkey',
            name: 'Hot Fried Rice and Turkey',
            desc:
              'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 19,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: glgs,
            alt: 'Grilled Lemon Grass Shrimps',
            name: 'Grilled Lemon Grass Shrimps',
            desc:
              'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 20,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: jrnc,
            alt: 'Jollof Rice and Chicken',
            name: 'Hot Jollof Rice and Chicken',
            desc:
              'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 21,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: jrnt,
            alt: 'Jollof Rice and Turkey',
            name: 'Hot Jollof Rice and Turkey',
            desc:
              'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 21,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: macaroni,
            alt: 'Macaroni Meatball',
            name: 'Macaroni Meatball',
            desc:
              'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 11,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: pancakes,
            alt: 'Pancakes',
            name: 'Tasty Pancakes',
            desc:
              'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 4,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: pyam,
            alt: 'Pounded Yam',
            name: 'Asorted Pounded Yam and Soup',
            desc:
              'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 50,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
          {
            img: semo1,
            alt: 'Semo',
            name: 'Semovita and Soup',
            desc:
              'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 50,
            button: 'Add to Cart',
            quantity: 1,
            total: 1
          },
        
    ],
    features: [
      {
        img: sweet2,
        alt: 'Donuts',
        name: 'Doughlicious',
        desc:
          'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
        price: 9,
        button: 'Add to Cart',
        quantity: 1,
        total: 1
      },
      {
        img: sweet3,
        alt: 'Ice Cream',
        name: 'Caramel Wonder',
        desc:
          'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick',
        price: 12,
        button: 'Add to Cart',
        quantity: 1,
        total: 1
      },
      {
        img: sweet1,
        alt: 'Brownie',
        name: 'Brownie Bunch',
        desc:
          'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
        price: 9,
        button: 'Add to Cart',
        quantity: 1,
        total: 1
      }
    ]
}

const itemsReducer = (state = initialItemState, action) => {
    return state
}

export default itemsReducer
