import React, { useState} from "react";
import './styles.css'
import Card from "./componets/Card";
import data from "./data"
import SearchBar from "./componets/SearchBar";

function App() {
 
  const mergedData = data.map((item) => ({
    ...item,
    skills: [item.role, item.level, ...item.languages, ...item.tools]
  }));

  const [isClicked, setClicked]= useState(false);//to hide and show the seacch bar
  const [filterArray, setFilterArray]= useState([]);
  const [filterData, setFilterData]= useState(mergedData)
  const [selectedSkills, setSelectedSkills] = useState([]);
  
  const validJobs = (item) => {

    for (var filter of filterArray) {
      if (!item.skills.includes(filter)) {
        return false;
      }
    }
    return true;
  };

  const handleFiltered = (skill) => {
    let filtered=[]
    if (!selectedSkills.includes(skill)) {
      
      filtered = mergedData.filter((item) =>
       item.skills.includes(skill) &&
        validJobs(item) 
      );
      setSelectedSkills([...selectedSkills, skill]);
      setFilterData(filtered);
      setClicked(true)
      setFilterArray((prev)=> [...prev,skill]);

  };
}



  const Clear=(e)=>{
    setFilterData(mergedData);
    setClicked(false);
    setFilterArray([])
    setSelectedSkills([])
  }

const handleDelete=(skill)=>{
  if((filterArray.length-1) <1) {
          Clear();
  }
  else{
    try {
      
    const newArray = filterArray.filter((key) => key !== skill);
        setFilterArray(newArray);
        console.log("delete "+ newArray);
        setSelectedSkills(newArray);
    } 
    catch (error) {
      console.log(error);
    }


  }
      
}
  
  return (
    <div className="App">
    <header>Ephratah Porte Job Listing</header>
  
    <div className="cardDiv">
    { (isClicked) && <SearchBar clearAction={Clear} selectedSkills={filterArray} deleteAction={handleDelete} />}

    {filterData.map(item=>{
      return <Card 
      key={item.id}
      logo={require(`${item.logo}`)}
      company={item.company}
      new={(item.new ===true) && "New!"}
      featured={(item.featured ===true) && "Featured"}
      newID={(item.new ===true)? "newly": "hide"}
      featID={(item.featured ===true)? "feature" : "hide"}
      position={item.position}
      click={handleFiltered}
      postedAt={item.postedAt}
      contract={item.contract}
      location={item.location}
      skills={item.skills}

      />

    })}
    </div>
    </div>
  );
}

export default App;
