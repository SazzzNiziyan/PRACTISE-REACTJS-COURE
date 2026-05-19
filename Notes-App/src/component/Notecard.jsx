import React from 'react'

const Notecard = (/*{cardData , onDelete}*/ props) => {
    // console.log(props)
    return (
        <div>
            <div className='flex relative justify-center h-60 w-50'>
                <img className='md:h-60 rounded-2xl h-40 drop-shadow-2xl sepia-20' src="https://t4.ftcdn.net/jpg/00/08/75/25/360_F_8752509_KZ2N2wnK28L0HyIcU8gKB3PRj6o5xlO7.jpg" alt="" />
                <h1 className='absolute wrap-break-word overflow-hidden font-extrabold max-h-10 pt-2 md:text-3xl text-lg left-10 text-black  font-(family-name:--font-heading)'> {/*cardData.title*/ props.title} </h1>
                <p className='absolute wrap-break-word overflow-hidden max-h-60  text-sm md:text-base w-34 pt-10 pl-6 md:w-full md:pt-13 md:pl-10'>{/*cardData.details*/ props.details}</p>
                <button onClick={/*onDelete*/props.onDelete}
                    className='bg-red-900 h-10 w-30 absolute bottom-4 left-12 rounded text-amber-50 active:scale-90'>Delete</button>
            </div>
        </div>
    )
}

export default Notecard