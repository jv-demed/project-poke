export function TextInput({ children, type, info, setInfo, obj }){
    return(
        <label>
            <span>{children}</span>
            <input type={type} onChange={(e) => setInfo({
                ...obj,
                [info]: e.target.value
            })} />
        </label>
    )
}