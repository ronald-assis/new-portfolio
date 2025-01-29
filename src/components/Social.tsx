import Link from 'next/link'
import { FiGitlab } from 'react-icons/fi'
import { FaXTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa6'

const socials = [
  {
    icon: <FaGithub />,
    path: '',
  },
  {
    icon: <FiGitlab />,
    path: '',
  },
  {
    icon: <FaLinkedinIn />,
    path: '',
  },
  {
    icon: <FaXTwitter />,
    path: '',
  },
]

interface SocialProps {
  containerStyle: string
  iconStyle: string
}

export function Social({ containerStyle, iconStyle }: SocialProps) {
  return (
    <div className={containerStyle}>
      {socials.map((social, i) => (
        <Link key={i} href={social.path} className={iconStyle}>
          {social.icon}
        </Link>
      ))}
    </div>
  )
}
