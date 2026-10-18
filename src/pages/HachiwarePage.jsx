import { useEffect, useRef, useState } from 'react'
import PinkButton from '../components/PinkButton.jsx'
import SingingHachiware from '../components/SingingHachiware.jsx'
import LetterSection from '../components/LetterSection.jsx'
import arrowLeft from '../assets/images/arrow_left.svg'
import chiikawaScared from '../assets/images/chiikawa_scared.png'

export default function HachiwarePage({ onBack }) {
  const [showLetter, setShowLetter] = useState(false)
  const letterRef = useRef(null)

  useEffect(() => {
    if (showLetter) {
      letterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [showLetter])

  return (
    <main className="min-h-dvh bg-blush">
      <div className="mx-auto flex max-w-[402px] flex-col items-center px-[25px] pt-[30px] pb-[112px]">
        <div className="w-full pb-[60px]">
          <PinkButton
            onClick={onBack}
            aria-label="Back"
            className="rounded-[153px] px-[20px] py-[10px]"
          >
            <img src={arrowLeft} alt="" className="block size-[25.6px]" />
          </PinkButton>
        </div>

        <h2 className="w-full pb-[30px] font-sniglet text-[30px] leading-[normal] text-cream">
          hachiware wants to
          <br />
          sing for you!
        </h2>

        <SingingHachiware />

        <h2 className="w-full pt-[240px] pb-[30px] font-sniglet text-[30px] leading-[normal] text-cream">
          chiikawa has...
          <br />
          something to show you..?
        </h2>

        <button
          type="button"
          onClick={() => setShowLetter(true)}
          aria-expanded={showLetter}
          aria-label="Open Chiikawa's surprise"
          className="aspect-[330.45/294.35] w-full max-w-[330.45px] shrink-0 cursor-pointer"
        >
          <img src={chiikawaScared} alt="" className="size-full object-cover" />
        </button>

        {showLetter && (
          <div ref={letterRef} className="w-full">
            <LetterSection />
          </div>
        )}
      </div>
    </main>
  );
}
