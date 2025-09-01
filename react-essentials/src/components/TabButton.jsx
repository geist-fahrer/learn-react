export default function TabButton({children, ...props}) {
    return (
        <li>
            <button {...props}>{children}</button>
        </li>
    )
}