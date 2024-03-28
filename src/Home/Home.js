import React from 'react';
import './Home.css';
import FoodItem from '../Items/Items';
import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useState } from 'react';

import Buttons from '../ButtonItems/ButtonItems'

const FoodItems = [
  {
    id: "1",
    Name: "Curd Rice",
    Price: 110,
    Image: "https://i.ibb.co/QjpjKxf/Curd-Rice.jpg",
    Rating: "4.5",
    Type: "Lunch"
  },
  {
    id: "2",
    Name: "Chicken Biryani",
    Price: 150,
    Image: "https://i.ibb.co/2s5FwJF/Double-Masala-Chicken-Dum-Biryani-Recipe-Homemade-chicken-Dum-Biryani-How-to-make-Chicken-Dum-Biryan.jpg",
    Rating: "4.8",
    Type: "Lunch"
  },
  {
    id: "3",
    Name: "Masala Dosa",
    Price: 70,
    Image: "https://i.ibb.co/ts65vq1/Crisp-Masala-Dosa-Bliss-of-Cooking.jpg",
    Rating: "4.2",
    Type: "Breakfast"
  },
  {
    id: "4",
    Name: "Thums Up",
    Price: 20,
    Image: "https://i.ibb.co/QfTzHTC/71h7-T4jsgz-L.jpg",
    Quantity: "200 ML",
    Type: "Beverages"
  },{
    id: "5",
    Name: "Idly",
    Price: 50,
    Image: "https://i.ibb.co/ZdY7Jkq/Podi-idli-is-a-quick-and-easy-snack-from-South-India.jpg",
    Rating: 4.3,
    Type: "Breakfast"
  },
  {
    id: "6",
    Name: "Limka",
    Price: 20,
    Image: "https://i.ibb.co/17ZTWBp/250-ml-contains-no-alcohol-carbonated-lemon-flavor-limca-cold-drink-967.jpg",
    Quantity: "200 ML",
    Type: "Beverages"
  },
  {
    id: "7",
    Name: "Kinley",
    Price: 20,
    Image: "https://i.ibb.co/stG32H6/story-1.png",
    Quantity: "1 ltr",
    Type: "Beverages"
  },
  {
    id: "8",
    Name: "Sprite",
    Price: 20,
    Image: "https://i.ibb.co/5TywcF9/61-Gr-Mn-Z1-AOL.jpg",
    Quantity: "250 ML",
    Type: "Beverages"
  }, {
    id: "9",
    Name: "Maaza",
    Price: 20,
    Image: "https://i.ibb.co/km4Md8Q/main-qimg-2344c8341be011ec0ee412cce02e00a7.jpg",
    Quantity: "250 ML",
    Type: "Beverages"
  },
  {
    id: "10",
    Name: "Coca Cola",
    Price: 20,
    Image: "https://i.ibb.co/0tbLF0n/e68401d7-19f2-4cf8-937d-06c3120e3251.png",
    Quantity: "250 ML",
    Type: "Beverages"
  },
  {
    id: "12",
    Name: "7 Up",
    Price: 20,
    Image: "https://i.ibb.co/W6mq19D/7-Up-lemon-lime.webp",
    Quantity: "250 ML",
    Type: "Beverages"
  },
  {
    id: "13",
    Name: "Pepsi",
    Price: 20,
    Image: "https://i.ibb.co/S7hC615/a08dba39ed38ea93134061df154629c5.jpg",
    Quantity: "250 ML",
    Type: "Beverages"
  },
  {
    id: "14",
    Name: "Mirinda",
    Price: 20,
    Image: "https://i.ibb.co/B3MhvMk/poulami-sharma-poulami-sharmas-art-zone-37.jpg",
    Quantity: "250 ML",
    Type: "Beverages"
  },
  {
    id: "15",
    Name: "String",
    Price: 20,
    Image: "https://i.ibb.co/jy2Mwn6/product-jpeg-500x500.webp",
    Quantity: "250 ML",
    Type: "Beverages"
  },
];

const Types=[
    "Breakfast","Lunch","Beverages"
]

const Home = () => {
    const [foodType,setfoodType]=useState("Breakfast")

    

  if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyDkVPLheZScmw82NOb6Hen0ywyJHJ9Zs8I",
        authDomain: "restomenu-b798e.firebaseapp.com",
        databaseURL: "https://restomenu-b798e-default-rtdb.firebaseio.com",
        projectId: "restomenu-b798e",
        storageBucket: "restomenu-b798e.appspot.com",
        messagingSenderId: "317392282082",
        appId: "1:317392282082:web:c378fb0aee3d1bfdac99bb"
    });
  }

  const database = firebase.database();

  const updateInServer = async (item) => {
    const URL = "https://restomenu-b798e-default-rtdb.firebaseio.com/data/items.json";
    try {
      const posting = await axios.post(URL, item);
      console.log(posting);
      alert('Item Added Successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const erase = async (id) => {
    const itemsRef = database.ref('data/items');
    itemsRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        if (item.id === id) {
          childSnapshot.ref.remove();
         alert("Item Deletes Successfully")
        }
      });
    });
  };
const UpdateType=(N)=>{
    setfoodType(N)
}

const FinelInfo=FoodItems.filter((each)=>each.Type===foodType)
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <div className='Banner'>
            <div>     <h1>Ideal Kitchen</h1>
      <h3>Update Your Menu...</h3>
      <div className='Row'>
        {Types.map((each)=><Buttons ButtonName={each} NewType={UpdateType} isActive={foodType===each}/>)}
      </div>
      </div>
 
      <img src="https://i.gifer.com/ID5G.gif" alt="Chef Logo"/>
      
      </div>
      <button className='Orders'> Check Your Orders</button>
      <div className='FoodItem Top'>
       
        {FinelInfo.map((each) => (
          <FoodItem Details={each} key={each.id} Adding={updateInServer} Remove={erase} />
        ))}
      </div>
    </div>
  );
}

export default Home;
