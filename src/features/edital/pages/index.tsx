import arvore from '../images/arvore.png'

const EditalPage = () => {
    return<div className="relative flex flex-col items-center h-screen gap-16 my-10 w-full 2xl:px-36">
        <div className='flex flex-col justify-start gap-3 px-10'>
            <h1 className=" text-laranja text-4xl font-extrabold">EDITAL</h1>
            <h2 className="text-azul text-lg font-bold">COTAÇÃO PÚBLICA DE PREÇOS NO 001/2024</h2>
            <p className="text-preto font-medium text-start lg:w-8/12">Projeto Bullyingmap 2.0 - Gamificação Ativa para o Enfrentamento à Intimidação Sistemática (Bullying) Nas Escolas (Chamada 04/2023 Tech Learning - Vinculada ao Edital 10/2023 - Programa FAPDF Learning da Fundação de Apoio à Pesquisa do Distrito Federal - FAP-DF).</p>
            <a className="text-laranja font-medium underline" href="https://bullyingmap.com/wp-content/uploads/2024/08/Edital-Cotacao-precos-bullying-map-final.pdf" target="__blank">Edital 10/2023</a>
            <a className="text-laranja font-medium underline" href="https://bullyingmap.com/wp-content/uploads/2024/09/RETIFICACAO-DA-COTACAO-PUBLICA-DE-PRECOS-BULLYING-MAP.pdf" target="__blank">Retificação do Edital 10/2023</a>
            <a className="text-laranja font-medium underline" href="https://bullyingmap.com/wp-content/uploads/2024/09/Edital-Cotacao-precos-bullying-map-RETIFICADO.pdf" target="__blank">Edital 10/2023 retificado</a>
            <a className="text-laranja font-medium underline" href="https://bullyingmap.com/wp-content/uploads/2024/09/COMUNICADO-COTACAO-PUBLICA-DE-PRECOS-BULLYING-MAP.pdf" target="__blank">Comunicado Cotação Pública de Preços - Bullying Map</a>
            <a className="text-laranja text-lg font-medium underline" href="https://bullyingmap.com/wp-content/uploads/2024/09/RESULTADO-PRELIMINAR-COTACAO-PUBLICA-BULLYING-MAP.pdf" target="__blank">Resultado preliminar do Edital 10/2023</a>
        </div>
        <img className='absolute top-[90%] left-[63%] w-36 sm:w-48 sm:top-[85.5%] md:top-[91%] md:left-[67%] ' src={arvore} alt="Arvore" />
    </div>
}

export default EditalPage