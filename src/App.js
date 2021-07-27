import { useState } from 'react';
import Chart from "./Components/Chart"
import axios from "axios"
import './App.css';

function App() {

  const [data, setData] = useState({
    weight: "",
    height: ""
  });
  const [showChart, setShowChart] = useState(false);
  const [chartData, setchartData] = useState([]);
  console.log("note has", data);
  const handleData = (e) => {
    const { name, value } = e.target;
      setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };
  const ajaxcall=(e)=>{
    console.log("data in call is ",data)
    e.preventDefault();
    axios.post("http://localhost:7009/bmi-calculator",data)
  //   fetch(`http://localhost:7009/bmi-calculator/`, {
  //     method: "POST",
  //     body:data
  // })
  .then((data)=>{
    console.log("data us",data)
    setData({
      weight: "",
      height: ""
    });
  }).catch((err)=>{
    console.log("error",err)
  })
    }
    const callData=()=>{

 
      axios.get("http://localhost:7009/getChart")
    .then((data)=>{
      setchartData(data.data)
      setShowChart((prev)=>!prev)
    }).catch((err)=>{
      console.log("error",err)
    })
      }
  return (
    <>
    <div className="App">
      <div className="card">
       <h1>Enter your data</h1>
     <form>
     <input type="text" placeholder="Enter your weight in kg"  onChange={handleData} name="weight" value={data.weight}/>
       <input type="text" placeholder="Enter your weight in meters"  onChange={handleData} name="height" value={data.height} />
       <button type="submit" onClick={ajaxcall}>calculator</button>
     </form>
  
      </div>
    </div>
    <button className="fetch"  onClick={callData}>toggle chart</button>
    {showChart &&  <Chart datac={chartData} />}
   
    </>
  );
}

export default App;
