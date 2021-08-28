import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import env from "react-dotenv";
import Grid from "../components/grid";

function Home({searchValue}) {

 const [recipe,setRecipe] = useState([]);
 


 useEffect( () =>{
        console.log(searchValue);
        getRecipe();
  // setRecipe([{title:searchValue,calories:40,image:logo},{title:"money",calories:40,image:logo},{title:"money",calories:40,image:logo},{title:"money",calories:40,image:logo},{title:"money",calories:40,image:logo},{title:"money",calories:40,image:logo},{title:"money",calories:40,image:logo},{title:"money",calories:40,image:logo},{title:"money",calories:40,image:logo}]);

 }, [searchValue]);

const getRecipe = async ()=> {

  try{
    const response = await fetch(
      `${env.REACT_APP_API_URL}?type=public&q=${searchValue}&app_id=${env.REACT_APP_API_ID}&app_key=${env.REACT_APP_API_KEY}`
      );
    const data = await response.json();
    setRecipe(data.hits);
    console.log(process.env);
  }
  catch(e){
    console.log(process.env);
    console.log("issues with api");
    console.error(e);
  }
     
}
 
  return (
<Container fluid className="mt-3 mb-3">
<Row xs={1} md={3} className="g-6 ">
{Array.from(recipe).map((recipes,idx) => (

     <Grid title={recipes.recipe.label}
     calories={recipes.recipe.calories}
      image={recipes.recipe.image} 
      ingredients={recipes.recipe.ingredients} />
  ))}
</Row> 
</Container>  
  );
}

export default Home;
