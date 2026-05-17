


export const  Component = ()=>{


    return(

        <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div
        className="h-[90vh] bg-cover bg-center flex items-center px-10 mb-7"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1400&auto=format&fit=crop')",
        }}
      >
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Unlimited Movies,
            <br />
            TV Shows & More
          </h1>

          <p className="text-zinc-300 mb-6 text-lg">
            Explore trending movies, top-rated films, and save your favorites.
          </p>

          <button className="bg-red-500 px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-red-600 transition">
            Explore Now
          </button>
        </div>
      </div>
    </div>
    )
}