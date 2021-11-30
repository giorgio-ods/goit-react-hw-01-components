import PropTypes from 'prop-types';
import s from  './transactions.module.css'

export default function TransactionHistory({items}) {
  return (
    <table className={s.Table}>
  <thead>
    <tr>
      <th className = {s.TableHeadRow}>Type</th>
      <th className = {s.TableHeadRow}>Amount</th>
      <th className = {s.TableHeadRow}>Currency</th>
    </tr>
  </thead>
  <tbody className={s.TableBody}>
      {items.map(({type, amount, currency, id}) => (
        <tr key={id}>
            <td className={s.TableRow}>{type}</td>
          <td className={s.TableRow}>{amount}</td>  
          <td className={s.TableRow}>{currency}</td>
            
        </tr>
      ))}
  </tbody>
</table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}