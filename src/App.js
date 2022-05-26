import React, { useState } from 'react'
import './index.scss'
import Text from './Component/Text/Text'
import data from './db/data'

const App = () => {
	const [count, setCount] = useState('')
	const [text, setText] = useState([])

	const handleChange = (e) => {
		setCount(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		let amount = parseInt(count)
		if (count <= 0) {
			amount = 1
		}
		if (count >= 24) {
			amount = 24
		}
		setText(data.slice(0, amount))
	}
	return (
		<section className='container'>
			<h3>Tired of boring ipsum?</h3>
			<form className='form' onSubmit={handleSubmit}>
				<label htmlFor='amount'>Paragraph : </label>
				<input
					type='number'
					id='amount'
					value={count}
					onChange={handleChange}
				/>
				<button className='btn'>Generate</button>
			</form>
			<Text text={text} />
		</section>
	)
}

export default App
