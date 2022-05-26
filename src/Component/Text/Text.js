import React from 'react'
import './index.scss'

const Text = ({ text }) => {
	return (
		<>
			{text.map((item, index) => {
				return (
					<article key={index}>
						<p>{item}</p>
					</article>
				)
			})}
		</>
	)
}

export default Text
