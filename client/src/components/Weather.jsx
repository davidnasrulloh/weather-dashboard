import React from 'react'

const Weather = ({ cities, handleSelectCity }) => {
	return (
		<div className='w-[60%] mx-auto flex justify-center items-center'>
			<h2 className='my-3 w-[40%] font-semibold text-xl ml-12'>Current Wather</h2>
			<select onChange={handleSelectCity} className='block appearance-none w-full bg-gray-500 border border-gray-500 py-3 px-4 pr-8 rounded-lg leading-tight text-white'>
				{
					cities.length > 0 && cities.map((city) => <option key={city}>{city}</option>)
				}
			</select>
		</div>
	)
}

export default Weather