import Card from "../Card/Card";


function Cards(props) {
  const {characters } = props
   
  return (
    <div>
      {
         characters.map(({id,name,species,gender,image})=>{
            return <Card 
               key={id}
               name= {name}
               species={species}
               gender={gender}
               image={image}
               onClose={props.onClose}
            /> 
            
         })
      }
   
      
    </div>
  );
}
export default Cards