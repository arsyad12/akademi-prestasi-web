function Home() {
  return (
    <div className="Parent border bg-cyan-400">
      <div className="container mx-auto my-10">
        <div className="border border-indigo-600">
          <h1 className="text-3xl font-bold text-center">
            Akademi Prestasi Indonesia
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="flex justify-center border mt-10 w-1/2">
            <div className="grid grid-rows-1">
              <div className=" grid grid-cols-2 text-center">
                <label className="mr-10">Email</label>
                <input className="p-1 rounded" type="text"></input>
              </div>

              <div className="grid grid-cols-2 text-center mt-3">
                <label className="mr-10">Password</label>
                <input className="p-1 rounded" type="text"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
