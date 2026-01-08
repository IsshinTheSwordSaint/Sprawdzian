import logo from './logo.svg';
import './App.css';
import IngredientList from './components/IngredientList';
import RecipeTitle from './components/RecipeTitle';
import StepsList from './components/StepsList';

const Recipe = {
  title:"Przepis na pitce",
  rating:"4.1",
  reviews:"670",
  ingredients:['6 kilo mango','7 kilo musztardy',
  'i do pieca'],
  steps:['Pokrój mango','Dodaj musztardę',
         'Włóż do pieca']
}

function App() {

  return (
    <>
    <img src={logo} className='App-logo'></img>
    <div id='conteiner'>
    
      <RecipeTitle title={Recipe.title} rating={Recipe.rating} reviews={Recipe.reviews}/>
      <IngredientList ingredients={Recipe.ingredients}/>
      <StepsList steps={Recipe.steps}/>
    </div>
    </>
  );
}

export default App;
