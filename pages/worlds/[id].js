import { useRouter } from 'next/router'
import WorldLayout from '../../components/WorldLayout'

const World = () => {
  const router = useRouter()
  const { id } = router.query

  return <WorldLayout worldID={id}/>
}

export default World
