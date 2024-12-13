const Person = {
    name : {
      FirstName: 'Abhay',
      LastName: 'Shinde',
    },
    Phone_no: 9999,
    City: 'Kolhapur',
    prifiles: ['Linkedin','twitter','Leetcode'],
    PrintAll : (value) =>console.log(value),
    PrintProfiles : () =>{
      Person.prifiles.map(
        profile => console.log(profile)
      )
  }
}
const abhay = {name: 'abhay',
   surname : 'shinde'}

export default function ThirdComponent()
{
    return(
    <div className="ThirdComponent">
        ThirdComponent Person Printing:
        {Person.name.FirstName}
        {Person.name.LastName}
        {Person.PrintAll(Person.City)}
        {Person.PrintProfiles()}
    </div>
    )
  
}

