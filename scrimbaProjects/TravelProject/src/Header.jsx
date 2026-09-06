
export default function Header(){
   return(

        <nav className="nav-container">
            <div className="logo-img">
                <img src="/travel-logo.jpg" alt="" />
                <h2>Travel Agency</h2>
            </div>
            <ul className="nav-links">
                <a className="nav-items" href="">Home</a>
                <a className="nav-items" href="">About</a>
                <a className="nav-items" href="">Contacts</a>
            </ul>
        </nav>
   ) 
}