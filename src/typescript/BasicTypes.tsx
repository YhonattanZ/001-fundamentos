
export const BasicTypes = () => {
  
  const name= 'Fernan';
  const age = 22;
  const isActive = true;
  const powers = ['React','ReactNative','NojeJS','Flutter'];

//   powers.push('NextJS') con push puedo agregar mas valores

    return (
   <>
   <h3>Tipos basicos</h3>
   {name} {age} {isActive ? 'true' : 'false'}
   <br />
    {powers.join(', ')}
   </>
  )
}
