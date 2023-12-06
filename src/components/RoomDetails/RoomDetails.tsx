import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./RoomDetails.module.css";
import Image from "next/image";
import Img from "../../../public/images/img1.jpg";
import Faqs from "../Faqs/Faqs";
import FinalCTA2 from "../FinalCTA2/FinalCTA2";
import FinalCTA1 from "../FinalCTA1/FinalCTA1";
import BlogPreview from "../BlogPreview/BlogPreview";

const RoomDetails = () => {
  return (
    <>
      <LayoutWrapper>
        <ContentPadding>
          <h1 className={styles.heading}>Seaside Serenity</h1>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <div className={styles.featuresBox}>
                <div className={styles.feature}>3 Beds</div>
                <div className={styles.feature}>1 bathroom</div>
                <div className={styles.feature}>2500 Sq Ft</div>
              </div>
            </div>
            <div className={styles.topRight}>
              <div className={styles.price}>
                $340 <span className={styles.perNight}>/ per night</span>
              </div>
            </div>
          </div>
          <div className={styles.imgGrid}>
            <div className={styles.gridLeft}>
              <div className={styles.imgContainer}>
                <Image src={Img} alt='image' fill className={styles.img} />
              </div>
            </div>
            <div className={styles.gridRight}>
              <div className={styles.imgContainer2}>
                <Image src={Img} alt='image' fill className={styles.img} />
              </div>
              <div className={styles.imgContainer3}>
                <Image src={Img} alt='image' fill className={styles.img} />
              </div>
            </div>
          </div>
          <div className={styles.propDetails}>
            <h2 className={styles.heading2}>About property</h2>
            <p className={styles.copy}>
              Believe it or not, copywriting is one of the most important
              content-creation skills a designer can possess. If you think about
              it, design exists to support and deliver content—not the other way
              around.
            </p>
            <br />
            <p className={styles.copy}>
              As a designer, content should be the driving force behind many of
              your decisions, whether you’re creating the content or someone
              else is. So if you can understand how to write effective copy (and
              understand the purpose that it serves), you’ll be able to better
              serve your clients and ultimately create better designs.
            </p>
            <br />
            <p className={styles.copy}>
              In this article, we’ll cover some helpful copywriting tips for
              designers to help you build better experiences.
            </p>
          </div>
          <br />
          <br />
          <h2 className={styles.heading2}>Featured gallery</h2>
          <div className={styles.gallery}>
            <div className={styles.imgContainer4}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
            <div className={styles.imgContainer4}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
            <div className={styles.imgContainer4}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
            <div className={styles.imgContainer4}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
            <div className={styles.imgContainer4}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
            <div className={styles.imgContainer4}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
            <div className={styles.imgContainer4}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.location}>
            <br />
            <br />
            <h2 className={styles.heading2}>Location</h2>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.248717288147!2d-111.86333289999999!3d33.572891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b7553fa7aaaab%3A0x55c463417f2cb0a2!2s10105%20E%20V%C3%ADa%20Linda%20Suite%20A-%20105%2C%20Scottsdale%2C%20AZ%2085258!5e0!3m2!1sen!2sus!4v1694633298828!5m2!1sen!2sus'
              width='100%'
              height='450'
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className={styles.test}
            ></iframe>
          </div>
          {/* <Faqs /> */}
          <br />
          <br />
          <h2 className={styles.heading2}>Lastes Articles</h2>
          <div className={styles.blogSection}>
            <BlogPreview />
            <BlogPreview />
            <BlogPreview />
          </div>
        </ContentPadding>
      </LayoutWrapper>
      <FinalCTA1 />
      <FinalCTA2 />
    </>
  );
};
export default RoomDetails;
