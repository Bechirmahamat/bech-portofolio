import Title from "./components/Title";
import { skills } from "./data";

const Skills = () => {
    return (
        <section id="skills" className="my-20">
            <div className="static-width">
                <Title id={"skills"} text={"Tech Stack"} />
                <div className="grid gap-5 md:grid-cols-2  lg:grid-cols-3 ">
                    {skills.map((item) => {
                        return (
                            <article key={item.id} className="">
                                <p className="mb-5">{item.icon}</p>
                                <h3 className="font-semibold text-md my-2">
                                    {item.title}
                                </h3>
                                <p className="leading-loose text-slate-500">
                                    {item.text}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default Skills;
