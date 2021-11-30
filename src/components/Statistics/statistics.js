import PropTypes from 'prop-types';
import s from './Stats.module.css';


export default function Statistics({items}) {
    return <section className={s.Statistics}>
  <h2 className={s.Title}>Upload stats</h2>
  <ul className={s.StatList}>       
            {items.map(({ id, label, percentage }) => (
                <li className={s.Item} key={id}>
                    <span className={s.Label}>{label} </span>
                    <span className="percentage">{percentage}</span>
                </li>))}
</ul>
</section>
}

Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
}