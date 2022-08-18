import Image from 'next/image'
const Searchbar = () => {
  return(
    <form className="d-flex searchbar">
      <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn search-btn" type="submit">
        <Image src="/images/search.png" alt="search" className='img-fluid' width="20" height="20" />
      </button>
    </form>
  )
}

export default Searchbar;