import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import MegaMenuSection from '@/sections/01-megaMenu';
import PromotionalSection from '@/sections/02-promotion';

function App() {
  return (
    <div className='max-w-360 mx-auto bg-white'>
      <Header />
      <MegaMenuSection />
      <PromotionalSection />
      <Footer />
    </div>
  );
}

export default App;
