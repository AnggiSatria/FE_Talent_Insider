import React from 'react'
import Maps from '../../components/Maps Page/Maps'
import News from '../../components/Maps Page/News'
import SelectLocation from '../../components/Maps Page/SelectLocation'
import ShortProfile from '../../components/Maps Page/ShortProfile'
import "../../Assets/CSS/MapsResponsive.scss"

function MapsPage() {
  return (
    <div className='all'>
        <div className="Left">
            <ShortProfile/>
        </div>
        <div className="Main">
            <div className="Up">
                <SelectLocation/>
            </div>
            <div className="Down" >
                <Maps/>
            </div>
        </div>
        <div className="Right">
            <News/>
        </div>
    </div>
  )
}

export default MapsPage