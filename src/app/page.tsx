import { Badge, badgeVariants } from "@/components/ui/badge";
import { Config } from "@/utils/config";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full lg:max-w-4xl flex-col p-24">
      <h1 className="text-2xl font-bold mb-4">hello, I&apos;m molezov👋</h1>
      <p className="mb-4 leading-loose">
        I am Japanese, a frontend and a backend developer, optimist, and
        address-hopping across all over Japan. I am now working as the CEO and
        founder at ASOBI. Prior to founding ASOBI, I worked as producer and
        technology director at{" "}
        <Link
          href={"https://camp-fire.jp/"}
          className={badgeVariants({ variant: "tip" })}
        >
          <Image
            src={"/i_campfire.png"}
            alt=""
            width={32}
            height={32}
            className="w-4"
          />
          <span className="ml-1">CAMPFIRE</span>
        </Link>
        , where I contributed to crowd-funding in Japan. I love{" "}
        <Link
          href={"https://react.dev/"}
          className={badgeVariants({ variant: "tip" })}
        >
          <Image
            src={"/i_react.png"}
            alt=""
            width={32}
            height={32}
            className="w-4"
          />
          <span className="ml-1">React</span>
        </Link>
        ,{" "}
        <Link
          href={"https://nextjs.org/"}
          className={badgeVariants({ variant: "tip" })}
        >
          <Image
            src={"/i_nextjs.png"}
            alt=""
            width={32}
            height={32}
            className="w-4"
          />
          <span className="ml-1">Next</span>
        </Link>
        ,{" "}
        <Link
          href={"https://supabase.com/"}
          className={badgeVariants({ variant: "tip" })}
        >
          <Image
            src={"/i_supabase.png"}
            alt=""
            width={32}
            height={32}
            className="w-4"
          />
          <span className="ml-1">Supabase</span>
        </Link>
        , and yes,{" "}
        <Link
          href={"https://vercel.com/"}
          className={badgeVariants({ variant: "tip" })}
        >
          <Image
            src={"/i_vercel.png"}
            alt=""
            width={32}
            height={32}
            className="w-4"
          />
          <span className="ml-1">Vercel</span>
        </Link>
        .
      </p>
      <p>GPG Key ID:</p>
      <p>5C43494B11099A1C</p>
      <p className="text-sm mb-4">
        <Link href={"https://github.com/molezov.gpg"}>
          Download GPG Keys from GitHub
        </Link>
      </p>
      <p>E-mail:</p>
      <p>{Config.email}</p>
    </main>
  );
}
