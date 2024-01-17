import supabase from "../config//supabaseClient.js";
import { useEffect, useState } from "react";

import SmoothieCard from "../components/SmoothieCard.js";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);

  const handleDelete = (id)=>{
    setSmoothies(prevSmoothie => {
      return prevSmoothie.filter(sm => sm.id !== id)
    })
  }
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("Supa").select("*");
        //  console.log(data)
        if (error) {
          throw new Error("Couldn't fetch data");
        }
        setSmoothies(data);
        setFetchError(null);
      } catch (error) {
        // console.error(error.message);
        setFetchError("Couldn't fetch data");
        setSmoothies(null);
      }
    };

    fetchData();
  }, []);

  // console.log(smoothies);

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {smoothies && (
        <div className="smoothies">
          {/* order by button */}
          {smoothies.map((smoothie,i)=> (
            <div className="smoothie-grid" key={i}>
                  <SmoothieCard  smoothie={smoothie} 
                   onDelete={handleDelete}
                  />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
