
interface Person {
firstName: string;
lastName: string;
age: number;
address:Address
isAlive?: boolean;
}

interface Address {
    country:string;
    houseNo:number;
}

export const ObjectListerals = () => {
  
  const person: Person = {
      age: 22,
      firstName: "Yhonattan",
      lastName: "Zambrano",
      isAlive:true,
      address: {
          country: "Venezuela",
          houseNo: 0
      }
  }
  
    return (
   <>
   <h3>Objetos Literales</h3>
   
   {/* {person} No se permite agregar objetos de manera directa*/}
        <pre>
   {JSON.stringify(person, null ,2)}
        </pre>
   </>
  )
}
