export default function Gallery() {

  const photos = [
    "/pics/ft13.jpg",
    "/pics/ft18.jpg",
    "/pics/ft16.jpg",
    "/pics/ft17.jpg",
    "/pics/ft20.jpg",
    "/pics/ft19.jpg",
  ]

  return (
    <>
    <section>
      
    </section>
      <section className="px-6 py-20">

      <div className="grid">
        <h1 className="text-5xl font-light tracking-widest  mb-10 text-gray-400">
        fotografia • luz • expressão
      </h1>
      </div>
<div className="grid md:grid-cols-3 gap-4">

  {photos.map((src, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-xl aspect-square"
    >

      <img
        src={src}
        className="
          w-full h-full
          object-cover
          transition duration-500
          hover:scale-110
          hover:brightness-110
        "
      />

    </div>
  ))}

</div>

      </section>

      <section className="py-20 text-center px-6">

        <h2 className="text-2xl text-[#d6b8fc] mb-4">
          Sobre
        </h2>

        <p className="max-w-xl mx-auto text-gray-400">
          A minha fotografia explora luz, identidade e momentos silenciosos.
          Cada imagem é uma história capturada no tempo.
        </p>

      </section>
    </>
  )
}