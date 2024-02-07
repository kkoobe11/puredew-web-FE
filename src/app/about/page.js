import AboutContainer from '@/containers/about/page'

export const metadata = {
  title: 'Puredew | About',
  description: 'Puredew is a web application for managing your personal calendar and tasks.',
}
export default function AboutPage() {
  return (
    <div className="max-w-screen-xl p-10 px-4 pb-16 mx-auto space-y-6 md:block">
      <div className="flex flex-col space-y-8 lg:space-x-12 lg:space-y-0">
        <AboutContainer />
      </div>
    </div>
  )
}
