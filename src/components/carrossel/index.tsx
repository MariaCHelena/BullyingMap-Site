import { useState } from "react"
import membros from "../../mocks/membros"
import CardMember from "./cardMember"

export default function Carrossel(){
    const [select, setSelect] = useState<boolean>(false)

    interface PersonProps {
        id: number,
        nome: string;
        codNome: string;
        funcao: string;
        descricao: string;
        linkLattes: string;}

    const [membroTarget, setMembroTarget] = useState<PersonProps>({
        id: 0,
        nome: '',
        codNome: '',
        funcao: '',
        descricao: '',
        linkLattes: '',
    })

    const handleClick = (nome:string, codNome:string, funcao:string, descricao:string, linkLattes:string, id:number) => {
        if(id === membroTarget.id){
            setSelect(prev => !prev)
            setMembroTarget({
                id: id,
                nome: nome,
                codNome: codNome,
                funcao: funcao,
                descricao: descricao,
                linkLattes: linkLattes,
            })
        } else {
            setMembroTarget({
                id: id,
                nome: nome,
                codNome: codNome,
                funcao: funcao,
                descricao: descricao,
                linkLattes: linkLattes,
            })
        }
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 6; // Quantidade de itens para mostrar por vez

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= membros.length ? 0 : prevIndex + itemsToShow
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, membros.length - itemsToShow) : prevIndex - itemsToShow
    );
  };

    return<span>
        <div className="flex w-[100%]">
            <button onClick={goToPrev}>&lt;</button>
                {
                    membros.map((membro, index) =>
                        <div className={`w-[300px] h-[200px] flex flex-col ${(currentIndex === index) ? 'block' : 'hidden'} transition-transform `} key={index}>
                            <CardMember 
                                id={membro.id}
                                nome={membro.nome} 
                                foto={membro.foto} 
                                codNome={membro.codNome} 
                                linkLattes={membro.linkLattes} 
                                descricao={membro.descricao}
                                funcao={membro.funcao}
                                onClick={handleClick}/>
                        </div>
                    )
                }
            <button onClick={goToNext}>&gt;</button>
        </div>
        {
            select && <div className="flex flex-col">
                <h3>{membroTarget.codNome}</h3>
                <h4>{membroTarget.nome}</h4>
                <h4>{membroTarget.funcao}</h4>
                <p>{membroTarget.descricao}</p>
                <a href={membroTarget.linkLattes}>LINK LATTES</a>
            </div>
        }
    </span>
}