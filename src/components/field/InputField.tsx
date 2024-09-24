import React from 'react'

type Props = {
    id: string;
    label: string;
    placeholder: string;
    type?: string;
    value?: string;
    isSearchbar?: boolean;
    height?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props: Props) => {
    return (
        <div className={`flex ${props.height ? `h-${props.height}` : "h-8" } items-center border border-gray-primary bg-white rounded-xl overflow-hidden shadow-md`}>
            <img src="src/assets/svg/search.svg" alt="search" className={`${props.isSearchbar ? "pl-2" : "hidden"}`} />
            <input
                type={props.type ?? "text"}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder ?? "Type for ..."}
                className="mx-2 w-full outline-none text-sm text-gray-primary mr-1"
            />
        </div>
    );
};


export default InputField