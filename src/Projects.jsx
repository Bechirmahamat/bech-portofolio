import { FaGithub } from "react-icons/fa";
import Title from "./components/Title";
import { projects } from "./data";
import { TbWorldWww } from "react-icons/tb";

const Projects = () => {
    return (
        <section id={"projects"} className="py-24">
            <div className="static-width">
                <Title text={"Web Creations"} />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
                    {projects.map((item) => {
                        return (
                            <article
                                href={item.url}
                                key={item.id}
                                className="rounded-md bg-white shadow-sm hover:shadow-md"
                            >
                                <div className="">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="w-full max-h-80 object-cover rounded-t-md "
                                    />
                                </div>
                                <div className="px-6 py-8">
                                    <h2 className="font-semibold text-lg mb-5 capitalize">
                                        {item.title}
                                    </h2>
                                    <p className="text-slate-500 text-md">
                                        {item.text}
                                    </p>
                                    <div className="flex gap-2 items-center mt-3">
                                        <a href={item.url}>
                                            <TbWorldWww className="h-9 w-9 text-slate-600 hover:text-slate-900" />
                                        </a>
                                        <a
                                            href={item.url}
                                            className="link-icon "
                                        >
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default Projects;
