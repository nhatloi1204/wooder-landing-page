function Container({ children, className = '' }) {
  return (
    <div
      className={`
        w-full mx-auto 
        px-[15px]               
        sm:px-[28px]            
        max-w-full 
        md:max-w-[960px]        
        lg:max-w-[1196px]      
        ${className}
      `}
    >
      {children}{' '}
    </div>
  )
}

export default Container
