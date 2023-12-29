import React from "react";
import Header from "../components/header";
import { useNavigate } from "react-router";

function Profile() {
  const navigate = useNavigate()

  React.useEffect(() => {
   if (!dataUser) {
     navigate("/")
    }
   }, [])

    const [dataUser, setDataUser] = React.useState(
        JSON.parse(localStorage.getItem("profile"))
      );


return(
    <>
      <div className="bg-[#f8f7f7] ">
    <div className="bg-white shadow shadow-md shadow-gray-400">
    <Header/>
    </div>
        <div className="wrap2border p-10 m-10">
          <div className="container mx-auto border rounded-t-[10px] bg-[#5E50A1] h-[100px] flex justify-center pt-12">
            <img
              src={dataUser.image}
              alt="avatar"
              className="absolute w-[100px] h-[100px] rounded-full"
            />
          </div>
          <div className="container mx-auto border bg-[#FFFFFF]">
            <div className="mt-[80px] grid grid-col-q justify-center">
              <div className="text-center text-[22px] text-[bold]">
                {/* <p>{data.fullname}</p> */}
              </div>
              <div className="text-center text-[14px]  pt-[10px]">
                {/* <p>{data.role}</p> */}
              </div>

              <div className="flex justify-center gap-2 pt-[10px]">
                <div className="img-map pt-[3px]">
                  <img src="/map.png" alt="map" className="h-[16px] w-[16px]" />
                </div>
                <div className="text-center text-[14px] text-[#9EA0A5]">
                  <p>Pekanbaru</p>
                </div>
              </div>

              <div className="pt-[10px] text-[14px] text-center text-[#9EA0A5]">
                <p>{dataUser.email}</p>
              </div>

              <div className="pt-[10px] text-[14px] text-center text-[#9EA0A5]">
                <p>Siswa Program SBMPTN</p>
              </div>
            </div>

            <div className="mt-6 grid grid-col-1 justify-center">
             
                <button
            
                  className="border border-4 border-cyan-500 bg-cyan-500 w-[120px] md:w-[297px] h-[40px] md:h-[50px] p-1 text-[white] rounded-[5px]"
                >
                  EDIT PROFILE
                </button>
             
            </div>

            <div className="mt-6 grid grid-col-2 justify-center">
              <div className="text-center text-[22px] text-[bold]">
                <p>Program Kursus</p>
              </div>
            </div>

            <div className="flex justify-center mt-[10px] mb-[50px]">
              <div className="w-[300px] grid justify-items-center md:flex md:flex-wrap md:justify-center md:gap-2">
                {["Training Intensif","Seleksi SBMPTN"].map((item, key) => (
                  <button
                    key={key}
                    className="border-2 p-1 bg-[#FBB01799] w-[150px] mt-[15px] md:mt-[5px] mb-[10px] rounded-[4px] border-[#FBB01799]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
)
}


export default Profile;
