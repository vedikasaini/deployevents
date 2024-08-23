import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
        <img 
            src="https://www.zubinfoundation.org/wp-content/uploads/2024/03/Zubin-Logo-Mobile.png" width={128} height={38}
            alt="Logo"/>
        </Link>

        <p>2024 The Zubin Foundation. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer