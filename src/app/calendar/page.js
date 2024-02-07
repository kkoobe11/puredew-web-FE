import CalendarContainer from '@/containers/calendar/page'

export const metadata = {
  title: 'Puredew | Calendar',
  description: 'Puredew is a web application for managing your personal calendar and tasks.',
}
export default function CalendarPage() {
  return (
    <div className=" max-w-screen-xl p-10 px-4 pb-16 mx-auto space-y-6 md:block">
      <div className="flex flex-col space-y-8 lg:space-x-12 lg:space-y-0">
        <CalendarContainer />
      </div>
    </div>
  )
}
