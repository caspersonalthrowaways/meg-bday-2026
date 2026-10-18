import chiikawaComic from '../assets/images/chiikawa_comic.jpg'
import megkawa from '../assets/images/megkawa.png'

export default function LetterSection() {
  return (
    <section className="flex w-full flex-col">
      <h2 className="pt-[60px] pb-[30px] font-sniglet text-[30px] leading-[normal] text-cream">
        oh a really sappy letter
        <br />
        from your chud
        <br />
        roommate.........
      </h2>

      <div className="flex flex-col gap-[10px] overflow-clip rounded-[6px] border-2 border-cocoa bg-cream p-[16px] font-sniglet text-[16px] leading-[normal] text-cocoa">
        <div className="space-y-[1lh]">
          <p>hi meg</p>
          <p>hope you had a very chiikawa birthday</p>
          <p>
            you&apos;re a very important person in my life, and someone i trust a whole lot. you
            being my friend and roommate in this stage of my life feels a little like fate, and i
            really wouldn&apos;t have it any other way. and i hope we keep being friends for a very
            long time
          </p>
          <p>
            i want you to take the chiikawa values to heart and celebrate your small mundane
            accomplishments. cry when you&apos;re tired, then fall asleep. smile when you&apos;re
            happy
          </p>
        </div>

        <div className="py-[24px]">
          <img
            src={chiikawaComic}
            alt="Chiikawa comic"
            className="aspect-[492/406] w-full object-cover"
          />
        </div>

        <div className="space-y-[1lh]">
          <p>
            i hope you know you&apos;re cherished and valued by a lot of people, and that&apos;ll
            always be true for the rest of your life.

          </p>
          <p>-cas</p>
        </div>

        <div className="pt-[30px]">
          <img src={megkawa} alt="Megkawa" className="size-[97px] object-cover" />
          <p>you're not nothingburger..... youre awesomesauce..!!</p>
        </div>
      </div>
    </section>
  )
}
