'use client';

import { useRef } from 'react';
import addTransaction from '@/app/actions/addTransaction';
import { toast } from 'react-toastify';

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success('取引を追加しました');
      formRef.current?.reset();
    }
  };
  return (
    <>
      <h3>取引の追加</h3>
      <form ref={formRef} action={clientAction}>
        <div className="formcontrol">
          <label htmlFor="text">内容</label>
          <input type="text" id="text" name="text" placeholder="内容を入力" />
        </div>
        <div className="formcontrol">
          <label htmlFor="amount">
            金額 <br /> ※支出はマイナス、収入はプラスで入力してください。
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="金額を入力"
              step="0.01"
            />
          </label>
        </div>
        <button className="btn">取引の追加</button>
      </form>
    </>
  );
};

export default AddTransaction;
