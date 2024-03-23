const Layout = ({children}) => {
    return ( 
        <div className="d-flex flex-column justify-content-center align-items-center bg-hero">
            {children}
        </div>
    );
}
 
export default Layout;