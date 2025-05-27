import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className="guest">
      <h1>ようこそ</h1>
      <p>ログインして取引を管理しましょう</p>
      <SignInButton />
    </div>
  );
};

export default Guest;
