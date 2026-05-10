import GithubIcon from './components/icons/GithubIcon'
import LinkedinIcon from './components/icons/LinkedinIcon'
import Logo from './components/Logo'
import SocialButton from './components/SocialButton'

function App() {
  return (
    <div className="grid min-h-dvh grid-rows-1 p-6 lg:p-8">
      <header className="col-start-1 row-start-1 self-start">
        <div className="flex h-8 items-center gap-3 lg:h-10 lg:gap-4">
          <Logo />
          <h1 className="font-bold lg:text-lg">Brandon Bews</h1>
        </div>
      </header>
      <main className="col-start-1 row-start-1 grid place-items-center">
        <div className="max-w-xl space-y-6 lg:max-w-2xl xl:max-w-3xl">
          <div className="mb-8 space-y-4 md:text-lg lg:text-xl xl:mb-12 xl:text-2xl">
            <h2 className="mb-4 -ml-px text-4xl font-bold md:mb-5 md:-ml-0.5 md:text-5xl lg:mb-6 lg:-ml-0.75 lg:text-6xl xl:mb-8 xl:-ml-1 xl:text-7xl">
              Hello.
            </h2>
            <div className="space-y-8">
              <p className="leading-relaxed">
                My name is Brandon Bews. I’m a software engineer designing and
                building products and agentic experiences end to end.
              </p>
              <p className="leading-relaxed">
                Currently a senior software engineer at Algolia.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4 xl:gap-6">
            <SocialButton
              href="https://github.com/brandonbews"
              label="GitHub"
              icon={<GithubIcon />}
            />
            <SocialButton
              href="https://www.linkedin.com/in/brandonbews/"
              label="LinkedIn"
              icon={<LinkedinIcon />}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
