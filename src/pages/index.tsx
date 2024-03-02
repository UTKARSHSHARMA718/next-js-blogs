import IntroductionInfo from "@/components/IntroductionInfo/IntroductionInfo";
import FeaturedPosts from "@/container/FeaturedPosts/FeaturedPosts";

export default function Home() {
  // TODO: shift this to the constant file

  return (
    <main className="h-full">
      <IntroductionInfo
        imgSrc={'/images/ProfileImage.JPG'}
        heading="Hi, I'm Utkarsh"
        subheading="I blog about web development - especially frontend framework like React or Angular."
      />
      <FeaturedPosts />
    </main>
  )
}