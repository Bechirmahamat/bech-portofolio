const Fouter = () => {
    const Year = new Date().getFullYear();
    return (
        <footer className="bg-slate-900 py-12">
            <div className="static-width text-center">
                <p className="text-slate-200">
                    &copy; {Year}
                    <span className="text-emerald-500"> Bech dev</span>. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
};
export default Fouter;
