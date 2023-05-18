interface Props {
  absolute: boolean
}
function Footer ({ absolute }: Props): JSX.Element {
  return (
    <footer className={`${absolute ? 'absolute' : ''} bottom-0 z-10 mt-8 flex w-full flex-col justify-center bg-gradient-to-t from-black to-slate-800 p-7 text-left text-slate-100`}>
      <span className='text-center'>© 2023 <a href='https://www.linkedin.com/in/thales-sz/' className='hover:underline'>Thales Chagas™</a></span>
    </footer>
  )
}

export default Footer
