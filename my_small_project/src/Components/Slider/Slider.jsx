import { useState, useEffect } from "react"
import "./slider.css"
function Slider(){

    let dataObj = {
   titles : [],
     image : [],
     description : [],
    }
    let [slideIndex, setSlideIndex] = useState(0)
    let [products1, setProduct] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(product=>setProduct(product.products)); 
    },[])


products1.forEach(product=>{
    dataObj.titles.push(product.title)
    dataObj.image.push(product.thumbnail)
    dataObj.description.push(product.description)
})

function PrevImg() {
    let newIndex = slideIndex - 1;
  
    if (newIndex < 0) {
      newIndex = dataObj.titles.length - 1;
    }
  
    setSlideIndex(newIndex);
  }
   
   
       function NextImg(){
          let newIndex= slideIndex+1
          console.log(newIndex)
      
           if(slideIndex>=dataObj.titles.length-1){
          newIndex=0
           }
           setSlideIndex(newIndex);
       }

        
    
    console.log(dataObj)
 
return(
    <div>

        <div className="great">
        <button onClick={PrevImg}>Previous</button>
        <div className="item">
<h1>{dataObj.titles[slideIndex]}</h1>
<img src= {dataObj.image[slideIndex]}></img>
<p> {dataObj.description[slideIndex]}</p>
</div>
<button onClick={NextImg}>Next</button>
</div>

    </div>
)
}

export default Slider