
function PageContainer({children, className=''}) {
  return (
    <div className={`mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </div>
  )
}

export default PageContainer