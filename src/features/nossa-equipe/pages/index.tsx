import sol from '../../../../public/sol.png'
import Carrossel from '../carrossel'

export default function NossaEquipe(){
    return(
        <div>
            <div className='relative mx-4'>
                <img className='absolute top-center right-0 w-1/5 h-w-1/5 xl:w-56 xl:h-56 hidden md:block' src={sol} alt="Sol" />
                <h1 className='flex items-center justify-center text-laranja text-4xl h-10 md:h-56 font-bold my-10'>NOSSA EQUIPE</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Carrossel/>
            </div>
        </div>
    )
}