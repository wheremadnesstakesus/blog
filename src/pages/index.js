import { Seo } from '@/components/Seo'

import Twitter from '@/components/Icons/Twitter.svg'

function HomePage () {
  return (
    <>
      <Seo />

      <p>Donde la locura nos lleve!</p>
      <Twitter className='h-5 w-5' />
    </>
  )
}

HomePage.propTypes = {
}

HomePage.defaultProps = {
}

export default HomePage
