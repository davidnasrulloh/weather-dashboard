import React from 'react'

const AddCity = ({handleSubmit, handleInputChange, newCity}) => {
	return (
		<form onSubmit={handleSubmit} className='px-8 pt-6 pb-8 mb-4'>
			<input 
				type="text" 
				className='shadow border rounded-full w-3/5 py-2 px-6 text-gray-600 leading-tight mr-2'
				placeholder='Add your city here' 
				onChange={handleInputChange} 
				value={newCity} />
			<button 
				className='w-1/5 bg-teal-700 hover:bg-teal-900 text-white py-2 px-3 ml-2 rounded-full'
				type='submit'>
					Add City
			</button>
		</form>
	)
}

export default AddCity