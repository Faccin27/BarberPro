export default function Hero(){
    return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                Bem vindo a sua barbearia.
            </h1>
            <p className="text-xl md:tex-2xl">
                Homem também cuida do visual, por que estilo é questão de atitude.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300">
                Reserve já!
            </button>
        </div>
    </section>
    )
}