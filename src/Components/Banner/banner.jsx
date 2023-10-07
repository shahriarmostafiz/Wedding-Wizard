const banner_img = 'https://i.ibb.co/TKxzbyH/1198.jpg'
// https://i.ibb.co/6md9kxH/2111-w015-n001-617-B-p15-617.jpg
const Banner = () => {
    return (
        <div className="min-h-screen py-4 rounded">
            <div className="h-screen  bg-cover bg-[url('https://i.ibb.co/TKxzbyH/1198.jpg')]">
                <div className="hero-overlay bg-black bg-opacity-50 ">
                    <div className="flex w-full h-full text-center justify-center items-center border ">

                        <h1 className="font-special font-semibold text-white text-2xl md:text-3xl lg:text-7xl ">
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