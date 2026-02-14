
function PageContainer({children, className=''}) {
  return (
    <div className={`mx-auto max-w-350 px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </div>
  )
}

export default PageContainer