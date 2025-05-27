import getUserBalance from '@/app/actions/getUserBalance';
import { formatYen } from '@/lib/utils';

const Balance = async () => {
  const { balance } = await getUserBalance();

  return (
    <>
      <h4>残高</h4>
      <h1>{formatYen(balance ?? 0)}</h1>
    </>
  );
};

export default Balance;
