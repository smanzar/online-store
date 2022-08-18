import Header from "./Header";
const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className="main-body py-5">
        {children}
      </div>
    </>
  )
}

export default Layout;