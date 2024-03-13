export default function ColorSwitch({
    onChangeColor
}) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onChangeColor()
        }}>
            Change color
        </button>
    );
}
//10-responding-to-events - Challenge 2 of 2: Wire up the events
