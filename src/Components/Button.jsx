

export default function Button(options) {
    return (
        <button className={options.className} onClick={options.onClick}>
            {options.text}
        </button>
    )
}