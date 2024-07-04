import ClubForm from '@components/club/ClubForm'
import MemberList from '@components/club/MemberList'
import Layout from '@common/Layout'
import Spacing from '@common/Spacing'

export default function ClubPage() {
  return (
    <Layout>
      <ClubForm />
      <Spacing size={20} />
      <MemberList />
    </Layout>
  )
}
