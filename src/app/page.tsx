
import Cards from "@/components/cards";
import Grid from "@/components/grid";

import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
  <div className="mb-[100px]">
   
    
<Hero title={"New Arrival"}/>
   

    {/* <Grid  title={"T- WITH TAPE DETAILS"} price={"$120"} image={"/images/card1.png"}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      

    </Grid> */}

  <Cards title={"T-SHIRT WITH TAPE DETAILS"} $={"120"} image={"/images/card1.png"} altText={"t-shirt"} lineThrough={"$140"}/>
  
  </div>
  )
}
