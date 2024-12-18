import React from 'react'
import MembersPage from '../MembersComps/MembersPage'
import MoviesPage from '../MoviesComps/MoviesPage'
import AddEditMovie from '../MoviesComps/AddEditMovie'
import AddEditMember from '../MembersComps/AddEditMember'
import { Route , Routes } from 'react-router-dom'


const PageTransfer = () => {
  return (
    <div>
      <Routes>
        <Route path='/MembersPage' element={<MembersPage/>}></Route>
        <Route path='/' element={<MoviesPage/>}></Route>
        <Route path="/AddEditMovie" element={<AddEditMovie />} />
        <Route path='/AddEditMovie/:id' element={<AddEditMovie/>}></Route>
        <Route path="/AddEditMember" element={<AddEditMember />} />
        <Route path='/AddEditMember/:id' element={<AddEditMember/>}></Route>
      </Routes>
    </div>
  )
}

export default PageTransfer