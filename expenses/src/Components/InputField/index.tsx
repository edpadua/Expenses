

interface Props {
    value: string,
    type: string,
    placeholder: string,
    onChange: (value: string) => void,
    label?: string
}

function InputField({ value, type, placeholder, onChange, label }: Props) {
    return (  
        <>
            <label className="font-bold">{label}</label>
            <input
                value={value} type={type} onChange={(e) => onChange(e.target.value)}
                className="w-1/4 placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder={placeholder}
            />
        </>
    )
}

export default InputField
