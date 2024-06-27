/* eslint-disable react/prop-types */
const Input = ({ name, type, placeholder, handleInputChange }) => {

    return (
        <label
            htmlFor={name}
            className='block grid-cols-1'
        >
            <span className={`text-neutral-500 block`}>
                {name}
            </span>
            <input
                type={type} name={name} id={name}
                placeholder={placeholder}
                className={`px-4 py-2 bg-white placeholder:text-neutral-400/60
                border border-neutral300/75 focus:border-[#14a44e76] focus:ring-[#14a44e76]
                focus:ring-1 focus:outline-none rounded-lg w-[100%]`}
                onChange={handleInputChange}
            />
        </label>
    )
}

export default Input