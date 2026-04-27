export default function SubGallery() {
  const photos = [
      "/pics/ft9.jpg",
      "/pics/ft2.jpg",
      "/pics/ft4.jpg",
      "/pics/ft11.jpg",
      "/pics/ft3.jpg",
      "/pics/ft6.jpg",
      "/pics/ft7.jpg",
      "/pics/ft5.jpg",
      "/pics/ft8.jpg",
      "/pics/ft1.jpg",
      "/pics/ft10.jpg",
      "/pics/ft14.jpg",
      "/pics/ft15.jpg",
      "/pics/ft12.jpg",
  ]

  return (
    <section className="px-6 py-24">

      <h1 className="text-4xl text-[#d6b8fc] mb-10 tracking-widest">
        Sub-Galeria
      </h1>

      <div className="grid md:grid-cols-3 gap-4">

        {photos.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl">
            <img
              src={src}
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}

      </div>

    </section>
  )
}