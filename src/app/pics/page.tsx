import ImageGallery from '@/components/ImageGallery';

export const metadata = {
  title: 'Pics - Stacy Paetz',
  description: 'Photo galleries featuring Stacy Paetz - professional headshots, celebrity encounters, sports coverage, and more',
};

const candid = [
  // New Candid images from Downloads (1-70)
  { src: '/images/candid/candid-1.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-2.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-3.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-4.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-5.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-6.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-7.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-8.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-9.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-10.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-11.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-12.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-13.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-14.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-15.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-16.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-17.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-18.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-19.png', alt: 'Candid' },
  { src: '/images/candid/candid-20.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-21.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-22.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-23.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-24.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-25.png', alt: 'Candid' },
  { src: '/images/candid/candid-26.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-27.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-28.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-29.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-30.png', alt: 'Candid' },
  { src: '/images/candid/candid-31.png', alt: 'Candid' },
  { src: '/images/candid/candid-32.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-33.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-34.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-35.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-36.png', alt: 'Candid' },
  { src: '/images/candid/candid-37.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-38.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-39.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-40.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-41.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-42.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-43.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-44.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-45.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-46.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-47.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-48.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-49.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-50.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-51.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-52.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-53.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-54.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-55.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-56.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-57.jpeg', alt: 'Candid' },
  { src: '/images/candid/candid-58.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-59.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-60.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-61.png', alt: 'Candid' },
  { src: '/images/candid/candid-62.png', alt: 'Candid' },
  { src: '/images/candid/candid-63.png', alt: 'Candid' },
  { src: '/images/candid/candid-64.png', alt: 'Candid' },
  { src: '/images/candid/candid-65.png', alt: 'Candid' },
  { src: '/images/candid/candid-66.png', alt: 'Candid' },
  { src: '/images/candid/candid-67.png', alt: 'Candid' },
  { src: '/images/candid/candid-68.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-69.jpg', alt: 'Candid' },
  { src: '/images/candid/candid-70.jpg', alt: 'Candid' },
  // Original headshots
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/IMG_9332.jpg?fit=1200%2C1800&ssl=1', alt: 'Professional Headshot' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/StacyPaetzSmile2.jpg?fit=600%2C897&ssl=1', alt: 'Stacy Paetz' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/StacySuit11.jpg?fit=400%2C532&ssl=1', alt: 'Professional Photo' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2015/11/Stacy-Mic3.jpg?fit=369%2C508&ssl=1', alt: 'With Microphone' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2015/12/WithDogBW-R.jpg?fit=2464%2C3696&ssl=1', alt: 'Portrait with Dog' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/StacySmile.jpg?fit=425%2C640&ssl=1', alt: 'Stacy Paetz' },
  // Original sports
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/StacySoftball3.jpg?fit=1198%2C959&ssl=1', alt: 'Softball' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/STACY-RACE-CAR-2010-4-021.jpg?fit=1920%2C2560&ssl=1', alt: 'Race Car' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2016/07/SkySpaceStacy.jpg?fit=3264%2C2448&ssl=1', alt: 'Sky Space' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/StacyFence2.jpg?fit=960%2C640&ssl=1', alt: 'Adventure' },
];

const onAir = [
  // New OnAir images from Downloads
  { src: '/images/onair/onair-1.jpg', alt: 'On Air' },
  { src: '/images/onair/onair-2.JPG', alt: 'With Anthony Anderson' },
  { src: '/images/onair/onair-3.jpg', alt: 'On Air' },
  { src: '/images/onair/onair-4.jpg', alt: 'On Air' },
  { src: '/images/onair/onair-5.JPG', alt: 'On Air' },
  { src: '/images/onair/onair-6.jpg', alt: 'On Air' },
  { src: '/images/onair/onair-7.jpg', alt: 'On Air' },
  { src: '/images/onair/onair-8.JPG', alt: 'On Air' },
  { src: '/images/onair/onair-9.jpeg', alt: 'On Air' },
  { src: '/images/onair/onair-10.jpeg', alt: 'On Air' },
  { src: '/images/onair/onair-11.jpeg', alt: 'On Air' },
  { src: '/images/onair/onair-12.jpeg', alt: 'On Air' },
  { src: '/images/onair/onair-13.JPG', alt: 'On Air' },
  { src: '/images/onair/onair-14.jpeg', alt: 'On Air' },
  { src: '/images/onair/onair-15.JPG', alt: 'With Jerry Stackhouse' },
  { src: '/images/onair/onair-16.JPG', alt: 'With Juwan Howard' },
  { src: '/images/onair/onair-17.jpg', alt: 'On Air' },
  { src: '/images/onair/onair-18.jpg', alt: 'On Air' },
  { src: '/images/onair/onair-19.JPG', alt: 'With Reggie Wayne' },
  { src: '/images/onair/onair-20.png', alt: 'On Air' },
  { src: '/images/onair/onair-21.png', alt: 'On Air' },
  { src: '/images/onair/onair-22.png', alt: 'On Air' },
  { src: '/images/onair/onair-23.JPG', alt: 'With Steve Smith' },
  { src: '/images/onair/onair-24.JPG', alt: 'With Vince Carter' },
  // Original celebrities
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/LebronJames.jpg?fit=720%2C540&ssl=1', alt: 'With LeBron James' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/Patrick-Ewing.jpg?fit=720%2C540&ssl=1', alt: 'With Patrick Ewing' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/WayneGretzky.jpg?fit=2592%2C1936&ssl=1', alt: 'With Wayne Gretzky' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/Kareem.jpg?fit=720%2C540&ssl=1', alt: 'With Kareem Abdul-Jabbar' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/Spyke-Lee1.jpg?fit=720%2C540&ssl=1', alt: 'With Spike Lee' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/Common.jpg?fit=720%2C540&ssl=1', alt: 'With Common' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/Pau-Gasol.jpg?fit=720%2C540&ssl=1', alt: 'With Pau Gasol' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2010/06/AmareStoudemire.jpg?fit=715%2C1080&ssl=1', alt: 'With Amare Stoudemire' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/Grant-Hill.jpg?fit=720%2C540&ssl=1', alt: 'With Grant Hill' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/Terrell-Owens.jpg?fit=720%2C480&ssl=1', alt: 'With Terrell Owens' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/KevinJames2.jpg?fit=471%2C424&ssl=1', alt: 'With Kevin James' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/Archie-Manning1.jpg?fit=720%2C540&ssl=1', alt: 'With Archie Manning' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/Reggie-Wayne.jpg?fit=720%2C540&ssl=1', alt: 'With Reggie Wayne' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2004/11/IMG_0572-resized.jpg?fit=915%2C600&ssl=1', alt: 'With John Wooden' },
  // Original broadcast
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2016/06/StacyNBAtv2.jpg?fit=1080%2C1920&ssl=1', alt: 'NBA TV' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/Analyst-NBAtv.jpg?fit=725%2C465&ssl=1', alt: 'NBA TV Analyst' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/Analyst-TNT.jpg?fit=714%2C470&ssl=1', alt: 'TNT Analyst' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/Analyst-BTN.jpg?fit=719%2C456&ssl=1', alt: 'Big Ten Network' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/11/StacyBTN.jpg?fit=907%2C1360&ssl=1', alt: 'Big Ten Network' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/SummerLeague.jpg?fit=594%2C395&ssl=1', alt: 'NBA Summer League' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2016/06/StacyNBAtv1.jpg?fit=2048%2C1152&ssl=1', alt: 'NBA TV Studio' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2016/06/StacyNBAtv4.jpg?fit=4128%2C2322&ssl=1', alt: 'On Set' },
];

export default function PicsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-8 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Pics</h1>
        </div>
      </section>

      {/* On Air */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">On Air</h2>
          <ImageGallery images={onAir} />
        </div>
      </section>

      {/* Candid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Candid</h2>
          <ImageGallery images={candid} />
        </div>
      </section>
    </div>
  );
}
