let category=[["electronics","jewelery","men's clothing","women's clothing"]]
function Header() {
  return( 
  <>
  <header className='bg-green-400 py-4 text-center text-white'>
    <h1 className='text-4xl font-bold'>My Header</h1>
  </header>
  <nav className="text-center gap-4 p-3 bg-green-200 space-x-9 ">
    <a href="">Home</a>
    <a href="">about</a>
    {category.map(a=><a href="">{a}</a>)}
    <a href="">contact</a>
  </nav>
  </>
)
}
export default Header