import { links } from "../data";

const Navbar = () => {
    return (
        <div className="bg-emerald-100 ">
            <nav className="flex flex-col static-width sm:flex-row sm:items-center  py-3">
                <div className="logo">
                    <h1 className="font-bold text-3xl mr-10">
                        Web<span className="text-emerald-800">Dev</span>
                    </h1>
                </div>
                <div className=" flex gap-4 capitalize text-md mt-1 ">
                    {links.map((link) => {
                        return (
                            <a
                                key={link.id}
                                href={link.href}
                                className="hover "
                            >
                                {link.text}
                            </a>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
