import { SignInButton, SignedOut, UserButton, SignedIn } from '@clerk/nextjs';
import { checkUser } from '@/lib/checkUser';

const Header = async () => {
  const user = await checkUser();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>収支管理アプリ</h2>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
