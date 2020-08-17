import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputList, setInputList] = useState([
    {
    firstName: "",
    lastName: "",
  }
  ]);

  const handleChange = (e,index) => {
    console.log(index,"index")
    const {name , value} = e.target
    const list = [...inputList];
    // console.log(list,"list")
    // console.log(list[index][name],"--------------")
    list[index][name] = value;
    // console.log(list)
    setInputList(list)
    // setInputList({
    //   ...inputList,
    //   [name] : value
    // })
    
  };
 
  const add = () => {
   const list = [...inputList];
  //  console.log(list)
   list.push({firstName : '' , lastName: ''})
   setInputList(list)
  }

  const remove = (index) => {
    console.log(index,"---")
    const list = [...inputList];
    //where index means for ex index = 0 then index will be 0 
    // 1 means remove 1 element in that particlur index
    list.splice(index,1)
    setInputList(list)
  }
  console.log(inputList.length,"inputList")
  return (
    <div className="App">
     {inputList.length && inputList.map((item,i) => {
      //  console.log(i,"iiiiiiiiii");
       
       return (
        <div key={i} className="box">
        {/* <p>{item.firstName}</p> */}
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          className="mr10"
          value={item.firstName}
          onChange={e => handleChange(e,i)}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          className="mr10"
          value={item.lastName}
          onChange={e => handleChange(e,i)}
        />
        {inputList.length !== 1 && <input type="button" value="remove" className="mr10" onClick={() => remove(i)}/>}
        {inputList.length -1 === i && <input type="button" value="add" style={{cursor:"pointer"}} onClick={add} />}
      </div>)
     })}
     
    </div>
  );
}

export default App;
