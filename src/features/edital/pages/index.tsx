import arvore from '../images/arvore.png'

const EditalPage = () => {
    return<div className=" flex flex-col items-center h-auto gap-16 md:mx-36 mt-5">
        <div className='flex flex-col justify-start gap-3 px-16'>
            <h1 className=" text-laranja text-4xl font-bold">EDITAL</h1>
            <h2 className="text-azul text-lg font-bold">COTAÇÃO PÚBLICA DE PREÇOS NO 001/2024</h2>
            <p className="text-preto font-medium text-justify">Projeto Bullyingmap 2.0 – Gamificação Ativa para o Enfrentamento à Intimidação Sistemática (Bullying) Nas Escolas (Chamada 04/2023 Tech Learning – Vinculada ao Edital 10/2023 – Programa FAPDF Learning da Fundação de Apoio à Pesquisa do Distrito Federal – FAP-DF).</p>
            <p className="text-preto font-medium">Para ler o edital completo, <a className="underline" href="https://bullyingmap.com/wp-content/uploads/2024/08/Edital-Cotacao-precos-bullying-map-final.pdf" target="__blank">acesse</a>.</p>
        </div>
        <img className='top-0 right-0  w-2/3 sm:w-2/3 md:w-3/5 lg:w-2/5' src={arvore} alt="Arvore" />
    </div>
}

export default EditalPage