
export default function Home() {
  return (
    <>
      <section id="home">
        <div className="flex flex-col h-screen">
          <main className="flex flex-grow items-center justify-center text-center p-4">
            <div className="text-customGrey">
              <h1 className="text-4xl sm:text-8xl font-bold mb-4 font-bilbo">
                Andrew John Roide
              </h1>
              <p className="text-lg sm:text-xl font-medium max-w-3xl indent-40 font-orbitron italic">
                - A Lifelong Enthusiast Turning Curiosity into Craftsmanship as
                a
                <span className="text-customBlue text-2xl">
                  {" "}
                  Full Stack Web Developer
                </span>
              </p>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
