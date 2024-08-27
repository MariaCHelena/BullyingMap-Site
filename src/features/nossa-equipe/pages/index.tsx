import sol from '../../../../public/sol.png'
import Carrossel from '../carrossel'

export default function NossaEquipe(){
    return(
        <div className='relative mx-[10%]'>
            <img className='absolute top-0 right-0 w-56 h-56' src={sol} alt="Sol" />
            <h1 className='flex items-center justify-center text-laranja text-[48px] h-56 font-bold'>NOSSA EQUIPE</h1>
            <Carrossel/>
        </div>
    )
}