import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
   <>
   <h1>You can get info about every type rendering</h1>
   <button><h1><Link href={"/ssr"}>Server Side Rendering</Link></h1></button>
    <br />
    <button><h1><Link href={"/ssg"}>Static Site Generation</Link></h1></button>
    <br />
    <button><h1><Link href={"/isg"}>Incremental Static Generation</Link></h1></button>
   </>
  );
}
