import React from 'react'

import Card from './Card'

const cardList = [
  {
    img: 'https://obs.line-scdn.net/0hLFM3D0tXE2lwSgBaxKBsPiMYEwYDJgwhFHAMWQFUP1BeClJLPFhACFY5TEVYf1BPUCQreFNWRSlcc1NKTy5bBlVMUgIcLgI4HisMDFFDTBxdeVw-GC0MWg/f1024_1024_90',
    title: 'サラベス ルミネ新宿店',
    description:
      'ニューヨークの朝食の女王、新宿ルミネのサラベスでお洒落朝食🥞\n' + '朝から並んでた！けど間違いない美味しさ❤︎',
    link: 'https://place.line.me/reviews/6554a4a685a4cb0028371346',
  },
  {
    img: 'https://obs.line-scdn.net/0h2OGgKceibWB6Hn5T8ucSNylMbQ8JcnIoHiRyUAsAMFNSL14yR34-AltpQExSLl0yWnBVBV4CQSJfXV4wNgwgdVYZLAsWenxlQn4qAFYeMRVXLSI3FioqUg/f1024_1024_90',
    title: '田舎鮨本陣',
    description: '茅ヶ崎の美味しいお寿司屋さん❤︎\n' + 'ここのお寿司はネタもシャリも大きくて量も味も大満足！',
    link: 'https://place.line.me/reviews/655485290bb4f400281a510b',
  },
  {
    img: 'https://obs.line-scdn.net/0h5gFwLWbiakh7Dnl7zNUVHyhcaicIYnUAHzR1eAoQRn8jTV0YQ2k5WywINWRTPC8eW2AlWlcSPXpSPl5uNBxWLS4NKyMXansZFW91LF4IPT1WPSUfE2gjfA/f1024_1024_90',
    link: 'https://place.line.me/reviews/6554b9e2867ccd002847e09e',
    title: 'RITUEL CAFE ルミネ新宿店',
    description:
      '新宿ルミネのケーキ屋さん❤︎\n' + '美味しそうなケーキがショーケースにいっぱい並んでてテンション上がる！',
  },
  {
    img: 'https://obs.line-scdn.net/0h_rrpTpuuAF1PCSlJSgp_CnFbADI8ZR8VKzMfbT4XJhEUV0IIcG9QYCtfXmVhakcMd28KOjhZCW41PEI/f1024_1024_90',
    link: 'https://place.line.me/reviews/64e35f157ae1580028e33c6f',
    title: 'Ms market delicatessen & diner',
    description:
      '池袋でもりもりサラダが食べられるお店🥗\n' +
      'その日のメニューから好きなものを選べて、気分によって組み合わせが変えられるから自分好みのランチが食べられる❤︎',
  },
]
export default function App() {
  return (
    <div className="App">
      <main>
        <div className={'container'}>
          {cardList.map((card, index) => {
            const { img, title, description } = card
            return <Card key={index} index={index} img={img} title={title} description={description} />
          })}
        </div>
      </main>
      <footer>
        <div className={'footer_row'}>
          <span>Made by</span>
          <a className={'external_link'} href={'https://daewoongkim.com/'}>
            Daewoong Kim
          </a>
        </div>
        <div className={'footer_row'}>
          <span>Image Source</span>
          <a className={'external_link'} href={'https://place.line.me/'}>
            Line Place
          </a>
        </div>
        <div className={'footer_row'}>
          <span>Reference</span>
          <a className={'external_link'} href={'https://github.com/webtutorialsw/css_sliding_cards'}>
            Stunning HTML & CSS Card Animation
          </a>
        </div>
      </footer>
    </div>
  )
}
