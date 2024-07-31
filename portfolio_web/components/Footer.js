import Socials from "./Socials";



const Footer = () => {
  return <footer className="bg-primary py-12 ">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-between">
        {/* socials */}
        <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4' iconsStyles='text-secondary dark:text-secondary text-[20px]' />
        {/* copyright */}
        <div className="text-muted-foreground">
          Copyright &copy; Arnab Chaudhuri. All rights reserved.
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;
