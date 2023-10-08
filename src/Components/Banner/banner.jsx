
// https://i.ibb.co/6md9kxH/2111-w015-n001-617-B-p15-617.jpg
const Banner = () => {
    return (
        <div className="h-[300px] mb-4 md:mb-12 lg:mb-16  md:min-h-screen py-4 rounded bg-white">
            <div className="h-[300px] md:h-screen  bg-cover bg-center   bg-[url('https://i.ibb.co/RCqwB68/banner-4.jpg')] md:bg-[url('https://i.ibb.co/ySCMzqx/banner-2.jpg')] lg:bg-[url('https://i.ibb.co/TKxzbyH/1198.jpg')]">
                <div className="hero-overlay bg-black bg-opacity-50 ">
                    <div className="flex w-full h-full text-center justify-center items-center border ">

                        <h1 className="font-special font-semibold text-white text-3xl md:text-4xl lg:text-7xl ">
                            Crafting Your Perfect Wedding Day
                            With Elegance, Expertise, and Love
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;