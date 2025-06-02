import './biling.css'
import PaySection from '../../components/Biling/paySection/paySection'
import Transactions from '../../components/Biling/transaction/transaction/transaction'
import Transaction2 from '../../components/Biling/transaction2/transaction2/transaction2'


export default function Biling() {
  return (
    <div>
      <PaySection />
      <Transactions />
      {/* <Transaction2 /> */}
    </div>
  )
}
