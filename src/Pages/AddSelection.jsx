import Button from '../Components/Button.jsx';

function selectCategory(style) {
    const options = ["Movie", "Actor", "User", "Projection", "Ticket"];
    return (
        <>
            <div className={style}>
                {options.map((option, index) => (
                    <Button key={index} option={option} />
                ))}
            </div>
        </>
    )
}