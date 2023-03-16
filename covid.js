
import './covid.css';

const covid = () => {
  const getcovidData = async () =>{
    try{
      const res = fatch ('https://api.covid19india.org/data.json');
      res.json();
    }catch (err){
console.log(err);
    }

  } 
  useEffect(()=>{
    getcovidData();
  },[]); return (
    <>
    <ul>
       <h1> Live</h1>
      <h2> covid-19 coronavirus tracker</h2>
      <li className = "card">
        <div className ="card__main">
          <div  className = "card__inner">
            <p className = "card__name"><span>our</span>COUNTRY</p>
            <p className="card__total card__small">INDIA</p>
          </div>
        </div>     
         </li>
        </ul>
    </>
  )
}

export default covid
