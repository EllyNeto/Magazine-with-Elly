export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      {/* linha 1 */}
      <div className="absolute top-[10%] whitespace-nowrap animate-marquee text-[120px] font-bold text-[#d6b8fc]/10">
        ELLYNETO ELLYNETO ELLYNETO ELLYNETO
      </div>

      {/* linha 2 (invertida) */}
      <div className="absolute top-[30%] whitespace-nowrap animate-marquee-reverse text-[120px] font-bold text-[#d6b8fc]/10">
        ELLYNETO ELLYNETO ELLYNETO ELLYNETO
      </div>

      {/* linha 3 */}
      <div className="absolute top-[50%] whitespace-nowrap animate-marquee text-[120px] font-bold text-[#d6b8fc]/10">
        ELLYNETO ELLYNETO ELLYNETO ELLYNETO
      </div>

      {/* linha 4 */}
      <div className="absolute top-[70%] whitespace-nowrap animate-marquee-reverse text-[120px] font-bold text-[#d6b8fc]/10">
        ELLYNETO ELLYNETO ELLYNETO ELLYNETO
      </div>

      {/* linha 5 */}
      <div className="absolute top-[90%] whitespace-nowrap animate-marquee text-[120px] font-bold text-[#d6b8fc]/10">
        ELLYNETO ELLYNETO ELLYNETO ELLYNETO
      </div>

    </div>
  )
}