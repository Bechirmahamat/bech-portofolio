import { FaGithub, FaLinkedin, FaTwitch, FaTwitter } from "react-icons/fa";
import img from "./assets/hero.svg";

const Hero = () => {
    return (
        <section className="bg-emerald-100 ">
            <div className="static-width py-24 grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                    <h1 className="text-5xl -tracking-wider font-bold mb-8">
                        Hi, I'm Bech
                    </h1>
                    <h2 className="text-slate-500 font-bold text-2xl">
                        Front-End Developer
                    </h2>
                    <p className="text-slate-600">
                        Turning Ideas Into Interactive Reality
                    </p>
                    <div className="flex gap-3 my-3">
                        <a href="" className="link-icon">
                            <FaGithub className=" " />
                        </a>
                        <a href="" className="link-icon">
                            <FaTwitter className=" " />
                        </a>
                        <a href="" className="link-icon">
                            <FaLinkedin className=" " />
                        </a>
                    </div>
                </div>
                <div className="hidden md:block">
                    <img className="w-60 md:w-80 lg:w-96" src={img} alt="" />
                </div>
            </div>
        </section>
    );
};
export default Hero;
