import { NavLink } from 'react-router-dom';

export default function SideBar ({sideBarList}) {

   return (
      <div className="side-bar">
         {sideBarList.map((sideBar, index) => (

            <div key={index} className="side-bar__tab">
               <NavLink to={sideBar.path}>{sideBar.name}</NavLink>
            </div>

         ))}
      </div>
   )
}