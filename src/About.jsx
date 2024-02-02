import Title from "./components/Title";
import img from "./assets/About.svg";

const About = () => {
    return (
        <section id="about" className="bg-white">
            <div className="static-width py-24   grid  md:grid-cols-2 gap-8">
                <div className="grid place-items-center">
                    <img src={img} alt="" className=" w-80 md:w-80 " />
                </div>
                <div className="mt-3">
                    <Title id={1} text={"Code And Coffee"} />
                    <p className="text-slate-500">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sint maiores itaque doloribus asperiores dolorum
                        quas voluptates distinctio, porro beatae quam provident
                        libero animi totam, praesentium voluptatem corrupti
                        dignissimos ipsum accusantium!
                    </p>
                </div>
            </div>
        </section>
    );
};
export default About;
