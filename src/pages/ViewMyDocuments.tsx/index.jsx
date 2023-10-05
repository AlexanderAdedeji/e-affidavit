import React from 'react'
import { useLocation } from 'react-router-dom'
import HomeNavHeader from '../Home/subComponent/HomeNavHeader'
import AttestedDocuments from './views/AttestedDocuments'
import PaidDocuments from './views/PaidDocuments'
import SavedDocuments from './views/SavedDocuments'

const ViewMyDocuments = () => {

    const location = useLocation()
  return (
    <div>
        <HomeNavHeader/>

        <div>
            {location.state.status.toLowerCase() === 'saved' && <SavedDocuments id={location.state.id}/>}
            {location.state.status.toLowerCase() === 'paid' && <PaidDocuments id={location.state.id}/>}
            {location.state.status.toLowerCase() === 'attested' && <AttestedDocuments id={location.state.id}/>}
        </div>
    </div>
  )
}

export default ViewMyDocuments