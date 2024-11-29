import Header from './components/header/header';
import Section1 from './homepage/section1/section1';
import Section2 from './homepage/section2/section2';
import Section3 from './homepage/section 3/section3';
import Section4 from './homepage/section4/section4';
import Section5 from './homepage/section 5/section5';
import Section6 from './homepage/section6/section6';
import Footer from './components/footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>
      <Footer />
    </div>
  );
}
