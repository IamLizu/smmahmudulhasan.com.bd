export default function Badge({ text = "", bgColor = "", textColor = "" }) {
    return (
        <>
            <span
                className={`rounded-md ${bgColor} px-2.5 py-0.5 mr-3 mb-3 text-sm font-medium ${textColor}`}
            >
                {text}
            </span>
        </>
    );
}
