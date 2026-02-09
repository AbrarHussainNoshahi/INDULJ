import styled from "styled-components";

const Button = styled.button`
    color: white;
    position: relative;
    & svg{
        width: 20px;
        height: 20px;
    }

`


function ButtonIcon({children, border = false, onClick, className=''}) {
  return (
    <Button onClick={onClick} className={`px-0.5 py-0.5 md:px-1.5 md:py-1.5 rounded cursor-pointer ${border ? 'border border-white' : ''} ${className}`}>
        {children}
    </Button>
  )
}

export default ButtonIcon