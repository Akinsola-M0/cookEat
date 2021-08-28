import {Container,Card,Button} from "react-bootstrap";
import {useEffect,useState} from "react";
import env from "react-dotenv";
import './css/what.css';



function What(){
const [recipe,setRecipe] = useState([]);
const [randValue,setRandValue] = useState([]);
const [randomNumber,setRandomNumber] = useState([]);
const [showIngredients, setShowIngredients]= useState(false);
const [rnd,setRnd] = useState('chicken');
 

const getRnd = () => {
    setRnd(randValue[Math.floor(Math.random() * 8)]);

}

const handleShowIngredients = () => setShowIngredients(!showIngredients);


useEffect( () =>{


  console.log(showIngredients);
    setRandomNumber(Math.floor(Math.random()*recipe.length));
   setRandValue(['rice','beans','sugar','coconut','pork','salmon','berries']);     
     getRecipe();
   
    },[rnd]);


const getRecipe = async ()=> {

        try{
          const response = await fetch(
            `${env.REACT_APP_API_URL}?type=public&q=${rnd}&app_id=${env.REACT_APP_API_ID}&app_key=${env.REACT_APP_API_KEY}`
            );
          const data = await response.json();
          setRecipe(data.hits);
          console.log(data.hits);
          console.log(rnd);
        }
        catch(e){
          console.log("issues with api");
          console.error(e);
        }
    } 
   
return(
      <>

        {
            recipe.map((recipes,index) => {
          
                if(index===randomNumber)
                {
                    return (
                        <>

            <Container fluid className="" style={
                            {
                            minHeight:'160vh' ,
                            backgroundImage: `url(${recipes.recipe.image})`,
                            backgroundRepeat:'no-repeat',
                            backgroundPosition:'center',
                            backgroundSize:'cover'
                            }}>
                            
            </Container>       
             <div className="choice">
                
                    <Card className="card">
                      <Card.Img variant="top" src={recipes.recipe.image} />
                      <Card.Body>
                        <Card.Title className="sourcefont">{recipes.recipe.label}</Card.Title>
                        <Card.Text className="firafont">
                          <p> 
                            calories :  {recipes.recipe.calories}
                            </p> 
            
                      <p onClick={handleShowIngredients} style={{color:'red', cursor:'pointer'}}>Click here ...</p>
                        {showIngredients ? (<p className="firafont">{recipes.recipe.ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
               ))}</p>) : ''}    
                        </Card.Text>
                        <Button onClick={getRnd} variant="primary" className="ml-0" style={{width:'200px'}}>See something else</Button>
                      </Card.Body>
                      </Card>
            </div>
             </>
              );
              
               
                }
                else{
                    return null;
                }
            })
        }

      </>
);

}


export default What;
