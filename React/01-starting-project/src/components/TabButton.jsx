export default function TabButton({children}){
    function handleClick(){
        console.log(`megg lett nyomva a ${children} gomb`)
    }
    return(
        <li>
            <button onClick={handleClick}>
                {children}
            </button>
        </li>
    );
}