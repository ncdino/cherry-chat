import Image from "next/image";
import Login from "./components/auth/Login";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>cherry chat</p>
      <Link href="signin">로그인</Link>
    </div>
  );
}
