import styles from "./page.module.css";

import IntroSection from "@/app/ui/mainPage/IntroSection"
import AboutSection from "@/app/ui/mainPage/AboutSection"
import ContactSection from "@/app/ui/mainPage/ContactSection";
// https://preview.themeforest.net/item/myour-one-page-resume-wordpress-theme/full_screen_preview/27319073?_ga=2.70961365.494922345.1717786360-1387438110.1717786360
//https://lmpixels.com/wp/leven-wp/dark/
export default function Home() {
  return (
    <main className={styles.main}>
        <IntroSection/>
        <AboutSection/>
        <ContactSection/>
    </main>
  );
}
