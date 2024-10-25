export const Forms = ({ children }) => {
    return (
        <main className="mt-8 flex justify-center">
            <section className="flex flex-col items-center justify-center bg-slate-100 w-full max-w-md p-8 rounded-xl shadow-lg">
                { children }
            </section>
        </main>
    )
}