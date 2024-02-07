import ShowcaseContainer from '@/containers/showcase/page'

export default function Showcase() {
  return (
    <div className="max-w-screen-xl p-10 px-4 pb-16 mx-auto space-y-6 md:block">
      <div className="flex flex-col space-y-8 lg:space-x-12 lg:space-y-0 items-center">
        <ShowcaseContainer></ShowcaseContainer>
      </div>
    </div>
  )
}
