import React from 'react'

interface Props {
  index: number
  img: string
  title: string
  description: string
}
export default function Card({ index, img, title, description }: Props) {
  const id = `c-${index}`

  return (
    <>
      <input type={'radio'} name={'slide'} id={id} />
      <label htmlFor={id} className={'card'} style={{ backgroundImage: `url(${img})` }}>
        <div className={'row'}>
          <div className={'icon'}>{index + 1}</div>
          <div className={'description'}>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </label>
    </>
  )
}
