export default function Header() {
  return (
    <header className="h-[80px] bg-[#FFFFFF] shadow-[0_1px_2px_0_rgba(0,0,0,0.05]">
      <nav className="container mx-auto flex items-center h-full p-4 justify-between">
        <div className="flex gap-[31px] items-center">
          <img src="/logo.png" alt="logo" width={100} height={20} />
          <span className='text-[#4B5563] text-sm'>
            Express Ordering
          </span>
        </div>
      </nav>
    </header >
  )
}
