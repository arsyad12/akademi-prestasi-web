import axios from "axios"; //import axios
import React from "react";
import { useNavigate } from "react-router";

function GetData() {
 const navigate = useNavigate()
  const [dataUser,setDataUser] = React.useState([]);
  const [tokenAuth,setTokenAuth] = React.useState(undefined);

  localStorage.setItem("token",tokenAuth)
  localStorage.setItem("profile",JSON.stringify(dataUser))

  const getData =async()=>{
    try {
        const urls = window.location.href.replace("http://localhost:3000", "https://api.goprestasi.com")
        const data = await axios.get(urls)
        .then(res => {
            setDataUser(res?.data?.user)
            setTokenAuth(res?.data?.authorization?.token)
        })
        .catch(err => {
            console.error(err); 
        })
        
    } catch (error) {
        
    }
        
  }

  React.useEffect(() => {
    getData()
    navigate("/")
  }, []);

  return (
    <div className="Parent h-dvh border bg-cyan-400">
      <div className="container mx-auto my-10">
        
        <div className="head text-center">
          <h1 className="text-3xl font-bold text-cyan-900">
          {dataUser.name}
          </h1>
          <img className="flex justify-center" src={dataUser.image}/>
          <h5>{dataUser.email}</h5>
        </div>
      
      </div>
    </div>
  );
}

export default GetData;
