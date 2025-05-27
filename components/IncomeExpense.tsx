import getIncomeExpense from '@/app/actions/getIncomeExpense';
import { formatYen } from '@/lib/utils';

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();

  return (
    <div className="inc-exp-container">
      <div>
        <h4>収入</h4>
        <p className="money plus">{formatYen(income ?? 0)}</p>
      </div>
      <div>
        <h4>支出</h4>
        <p className="money minus">{formatYen(expense ?? 0)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
