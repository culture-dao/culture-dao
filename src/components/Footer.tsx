export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='flex flex-col gap-8 justify-center items-center py-24'>
      <div className='text-6xl'>🌍</div>
      <div className='flex flex-col text-center md:flex-row md:text-left'>
        <p>&#169; Culture DAO {year}</p>
        <div className='mx-2 hidden md:block'>{' - '}</div>
        <div className='my-1 md:hidden'></div>
        <p>Reimagining Blockchain Communities</p>
      </div>
    </footer>
  )
}
