import React from "react";
import Header from "../components/header";
import { useNavigate } from "react-router";
function Consultation() {
  const navigate = useNavigate()

  const [dataUser, setDataUser] = React.useState(undefined);

  React.useEffect(() => {
    setDataUser(JSON.parse(localStorage.getItem("profile")))
  }, [])
  
return(
    <>
    {dataUser?(
      <div className="bg-[#f8f7f7] ">
    <div className="bg-white shadow-md shadow-gray-400">
    <Header/>
    </div>
        <h1>Halo mau konsul</h1>
        </div>
        ):navigate("/")}
    </>
)
}


export default Consultation;
