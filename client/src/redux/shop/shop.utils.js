export const filterPedalsByCategory = (pedals, item) => {
    let pedalArray = Object.keys(pedals).map(key => pedals[key])
    // console.log(test)
    // console.log(item)
    
    let filteredArray = pedalArray
    .filter((element) => 
    element.items.some((subItem) => subItem.category === item))
//     .map(element => {
//     let newElt = Object.assign({}, element); // copies element
//     return newElt.items.filter(subItem => subItem.category === item);
//   });
  
    return(
        filteredArray
    )
}