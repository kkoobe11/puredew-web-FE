import HomepageContainer from '@/containers/homepage/page'

export const metadata = {
  title: 'Puredew',
  description: 'Puredew is a web application for managing your personal calendar and tasks.',
}
export default function Home() {
  return (
    <div className=" space-y-6 md:block">
      <div className="flex flex-col space-y-8 lg:space-y-0">
        <HomepageContainer />
      </div>
    </div>
  )
}
