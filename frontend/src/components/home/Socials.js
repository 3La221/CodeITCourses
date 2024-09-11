import {
      RiYoutubeFill,
      RiLinkedinFill,
      RiFacebookFill,
      RiInstagramFill,

} from 'react-icons/ri';

import Link from 'next/link';


const icons = [
     
      {
            path:"https://www.linkedin.com/company/code-it-dz/posts/?feedView=all",
            name:<RiLinkedinFill/>
      },
      {
            path:"https://web.facebook.com/codeitdz",
            name:<RiFacebookFill/>
      },
      {
            path:"https://www.instagram.com/codeit_dz/",
            name:<RiInstagramFill/>
      }
]


const Socials = ({containerStyles,iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon,index)=>{
            return <Link href={icon.path} key={index}> <div className={`${iconsStyles}`}>{icon.name}</div> </Link>
      })}
    </div>
  )
}

export default Socials
