interface PersonProps {
    id?: number;
    foto?: string;
    nome: string;
    codNome: string;
    funcao: string;
    descricao: string;
    linkLattes: string;
    onClick?: (nome:string, codNome:string, funcao:string, descricao:string, linkLattes:string, index:number) => void;
    select?: boolean;
}

const DescMember = ({nome, codNome, funcao, descricao, linkLattes}: PersonProps) => {


    
    return <div className="flex flex-col justify-start w-11/12 mx-12">
        <h3 className="text-azul font-bold text-2xl md:text-start">{codNome}</h3>
        <h4 className="text-azul text-xl italic md:text-start">{nome}</h4>
        <h4 className="text-azul text-xl italic md:text-start">{funcao}</h4>
        <p className=" text-preto text-base sm:text-lg md:text-justify lg:w-9/12 xl:w-full">{descricao}</p>
        <a className="text-laranja text-lg md:text-start" href={linkLattes} target="__blank">LINK LATTES</a>
</div>
}

export default DescMember