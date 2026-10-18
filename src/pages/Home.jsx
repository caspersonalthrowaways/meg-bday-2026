import PinkButton from '../components/PinkButton.jsx'
import chiikawa from '../assets/images/chiikawa.png'
import speechBubble from '../assets/images/speech_bubble.svg'

export default function Home({ onStart }) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-between gap-10 bg-blush py-20">
      <h1 className="text-center font-cherry text-[84.184px] leading-none text-cream">
        happy
        <br />
        birthday
        <br />
        meg!
      </h1>

      <div className="relative">
        <img src={chiikawa} alt="Chiikawa" className="h-[203px] w-[174px] object-cover" />
        <div className="absolute top-[-19px] left-[174px] h-[58.315px] w-[64px]">
          <div className="absolute inset-[-0.43%_-0.39%]">
            <img src={speechBubble} alt="" className="block size-full max-w-none" />
          </div>
        </div>
      </div>

      <PinkButton onClick={onStart} className="rounded-[18px] px-[50px] py-[10px]">
        <span className="font-cherry text-[32px] leading-[normal] whitespace-nowrap text-cream">
          start!
        </span>
      </PinkButton>
    </main>
  )
}
