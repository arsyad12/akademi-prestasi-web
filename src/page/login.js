import axios from "axios"; //import axios
import React from "react";

function Login() {
  const [urlAuth, setUrlAuth] = React.useState(undefined);

  const getURLOauth = async () => {
    try {
      const hitGoogleAuth = await axios
        .get("https://api.goprestasi.com/api/login/google")
        .then((res) => {
          setUrlAuth(res.data.url);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {}
  };

  

  React.useEffect(() => {
    getURLOauth();
  }, []);

  return (
    <div className="Parent h-full border bg-cyan-400">
      <div className="container mx-auto my-10">
        <div className="m-10 flex justify-center">
          <img className="md:w-80 md:h-14" src="/img/logo.png" alt="logo" />
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center border border-cyan-400 bg-cyan-400 w-full   md:w-1/2 shadow-lg shadow-cyan-600">
            <div className="grid grid-rows-1 m-10 w-80 text-cyan-900">
              <div className=" grid grid-cols-1">
                <label className="mr-10">Email</label>
                <input className="p-2 rounded outline-none" type="text"></input>
              </div>

              <div className=" grid grid-cols-1 mt-4 text-cyan-900">
                <label className="mr-10">Password</label>
                <input className="p-2 rounded outline-none" type="text"></input>
              </div>

              <div>
                <button className="w-full mt-5 border border-solid border-cyan-500 bg-cyan-500 text-center text-white p-3">
                  Login
                </button>
              </div>

              <div className="text-center mt-6 text-cyan-900">
                <p>Or SignIn Using</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <a
                  href={urlAuth}
                  className=" w-15 h-15 mt-5 border border-solid border-cyan-500 bg-cyan-500 text-center text-white p-3 rounded-full flex justify-center"
                >
                  <img
                    className="h-6 w-6 rounded-full"
                    src="/img/google.png"
                    alt="googlepicture"
                  />
                </a>
                <a
                  href="https://twitter.com/login"
                  className=" w-15 h-15 mt-5 border border-solid border-cyan-500 bg-cyan-500 text-center text-white p-3 rounded-full flex justify-center"
                >
                  <img
                    className="h-6 w-6 rounded-full"
                    src="/img/x.png"
                    alt="xpicture"
                  />
                </a>
                <a
                  href="https://id-id.facebook.com"
                  className=" w-15 h-15 mt-5 border border-solid border-cyan-500 bg-cyan-500 text-center text-white p-3 rounded-full flex justify-center"
                >
                  <img
                    className="h-6 w-6 rounded-full"
                    src="/img/fb.png"
                    alt="fbpicture"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
