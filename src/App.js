import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';


function Food({name, pic}) 
{
  return<h1>i like {name} picture is <img src = {pic}></img></h1>;
}

const foodILike = [
  {
    name: "A",
    image: "https://cdn.pixabay.com/photo/2018/03/28/00/31/winter-3267925_960_720.jpg"
  },
  {
    name: "B",
    image: "https://cdn.pixabay.com/photo/2020/10/27/18/56/girl-5691576_960_720.jpg"
  }
]

function renderName(dish)
{
    return <Food name = {dish.name} pic = {dish.image}/>
}

function App() {
  return (
    <div className="App">
      <h1></h1>
      {foodILike.map(renderName)}
    </div>
  );
}

export default App;
