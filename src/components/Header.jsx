import Navbar from "./Navbar"


const Header = () => {
  return (
    <div 
        className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden" 
        style={{backgroundImage: "url('/header_img.png')"}}
        id='Header'
    >
        <Navbar/>
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
          <h2 className="text-5xl sm:text-7xl md:text-[70px] inline-block max-w-3xl font-semibold pt-24  ">Explore homes that fit your dreams</h2>
          <div className=" mt-16 space-x-6">
            <a href="#Projects" className="border border-white px-8 py-3 rounded bg-white/20 backdrop-blur-md hover:bg-cyan-600 transition-colors duration-400">Projects</a>
            <a href="#Contact" className="border border-white px-8 py-3 rounded bg-white/20 backdrop-blur-md hover:bg-cyan-600 transition-colors duration-400">Contact-us</a>
          </div>
        </div>
    </div>
  )
}

export default Header