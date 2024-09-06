import Carrossel from '../carrossel'

export default function NossaEquipe(){
    return(
        <div>
            <h1 className='flex items-center justify-center text-laranja text-5xl h-10 md:h-56 font-bold'>A EQUIPE</h1>
            <div className='flex flex-col justify-center items-center'>
                <Carrossel/>
            </div>
        </div>
    )
}