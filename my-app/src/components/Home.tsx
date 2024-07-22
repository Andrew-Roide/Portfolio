
export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <main className="flex flex-grow items-center justify-center text-center p-4">
          <div className="italic">
            <h1 className="text-customGrey text-4xl sm:text-7xl font-bold mb-4">
              Andrew John Roide
            </h1>
            <p className="text-customGrey text-lg sm:text-xl font-medium max-w-3xl indent-40">
              - A Lifelong Enthusiast Turning Curiosity into Craftsmanship as a
              <span className="text-customBlue text-2xl"> Full Stack Web Developer</span>
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
