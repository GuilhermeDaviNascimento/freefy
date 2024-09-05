import lupa from '../svgs/navbar/Icon-1.svg'
import playlist from '../svgs/navbar/Icon-3.svg'
import upload_musica from '../svgs/navbar/Group 3.svg'
import casa from '../svgs/navbar/Icon.svg'
import usuario from '../svgs/navbar/Icon-2.svg'

function navbar () {
    return (
        <div className='d-flex justify-content-between b-grey'>
            <img src={lupa}  />
            <img src={playlist}  />
            <img src={upload_musica}  />
            <img src={casa}  />
            <img src={usuario}  />
        </div>
    )
}

export default navbar