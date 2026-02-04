
function Button(){

    const handleClick = (e) => e.target.textContent = 'Clicked!';

    return(

        <button onDoubleClick={(e) => handleClick(e)}>Click ME!</button>

    );

}

export default Button;