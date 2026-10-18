import PinkButton from '../components/PinkButton.jsx'
import SingingHachiware from '../components/SingingHachiware.jsx'
import arrowLeft from '../assets/images/arrow_left.svg'

export default function HachiwarePage({ onBack }) {
  return (
    <main className="min-h-dvh bg-blush">
      <div className="mx-auto flex max-w-[402px] flex-col items-center px-[25px] pt-[30px]">
        <div className="w-full pb-[60px]">
          <PinkButton onClick={onBack} aria-label="Back" className="rounded-[153px] px-[20px] py-[10px]">
            <img src={arrowLeft} alt="" className="block size-[25.6px]" />
          </PinkButton>
        </div>

        <h2 className="w-full pb-[30px] font-sniglet text-[30px] leading-[normal] text-cream">
          hachiware wants to
          <br />
          sing for you!
        </h2>

        <SingingHachiware />
      </div>
    </main>
  )
}
