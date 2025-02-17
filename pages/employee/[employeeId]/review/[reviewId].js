import { useRouter } from 'next/router'

function reviewId() {
    const router = useRouter()
    const { employeeId, reviewId } = router.query
  return (
    <h1>Review { reviewId } for Employee {employeeId}</h1>
  )
}

export default reviewId
