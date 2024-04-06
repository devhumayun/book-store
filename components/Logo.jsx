import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';
const Logo = () => {
    return (
        <Link href="/store" className="flex items-center gap-2 text-white">
            <SparklesIcon className="w-10 h-10" />
            <p className="text-[20px]"> Book Store </p>
        </Link>
    )
}

export default Logo
