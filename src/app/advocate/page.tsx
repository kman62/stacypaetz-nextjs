import Image from 'next/image';
import AudioPlayer from '@/components/AudioPlayer';

export const metadata = {
  title: 'Advocate - Stacy Paetz',
  description: 'Learn about Stacy Paetz\'s charitable work and the organizations she supports',
};

const organizations = [
  {
    name: 'American Cancer Society',
    image: '/images/logos/american-cancer-society.jpeg',
    url: 'https://www.cancer.org',
    description: 'Cancer has affected many of our families, mine included. The American Cancer Society\'s founders knew they had to raise public awareness about cancer if progress was to be made against this disease. Despite the enormity of the task, being educated and supporting research is paramount to finding cures.',
  },
  {
    name: 'Happy Bundles',
    image: '/images/logos/happy-bundles.png',
    url: 'https://www.happybundles.org/',
    description: 'Happy Bundles was created by my dear friends (my family) Dan and Candice Kriel. The mission is bringing happiness and hope to children facing the toughest battle of their lives. They provide special gifts that bring smiles to their faces and warmth to their hearts.',
  },
  {
    name: 'National MS Society',
    image: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/06/MS-800x600.jpg?resize=560%2C475',
    description: 'The National MS Society is a collective of passionate individuals who want to do something about MS now—to move together toward a world free of multiple sclerosis. MS stops people from moving. We exist to make sure it doesn\'t.',
  },
  {
    name: 'Wounded Warrior Project',
    image: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/06/WWP-logo.jpg?resize=533%2C474',
    description: 'The Wounded Warrior Project was formed to honor and empower Wounded Warriors. The greatest casualty is being forgotten and WWP is armed with core values based upon a culture of teamwork.',
  },
  {
    name: 'NBA Cares',
    image: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/06/nba_cares_logo.jpg?resize=560%2C302',
    description: 'NBA Cares is the league\'s global community outreach initiative that addresses important social issues such as education, youth and family development, and health and wellness. The NBA and its teams support a range of programs, partners and initiatives that strive to positively impact children and families worldwide.',
  },
  {
    name: 'Sister Connection',
    image: '/images/logos/sister-connection-logo.png',
    description: 'Sister Connection is a Christian nonprofit organization dedicated to the healing of Burundian war widows and orphans, restoring their dignity, and offering hope for their futures. Sister Connection is for all widows, regardless of ethnicity or religious affiliation.',
  },
  {
    name: 'Every Nation',
    image: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/06/EN-Logo.png?resize=550%2C170',
    description: 'Every Nation engages in world missions by intentionally reaching out to international students on university campuses. Every Nation values Church Planting, Campus Ministry, World Missions, and Social Responsibility.',
  },
  {
    name: 'Children\'s Bureau',
    image: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/06/cbulogotaglinegreenwebsite.jpg?resize=731%2C157',
    description: 'Children\'s Bureau is committed to significantly change the lives of at-risk children by providing child abuse prevention and treatment services. Children\'s Bureau engages in continuous discovery through research to determine and implement what works best as a passionate advocate for children and families.',
  },
  {
    name: 'World Vision',
    image: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/06/World-Vision-Logo.jpg?resize=1310%2C599',
    description: 'World Vision is a Christian humanitarian organization dedicated to working with children, families and their communities worldwide to reach their full potential by tackling the causes of poverty and injustice. World Vision provides hope and assistance to approximately 100 million people in nearly 100 countries.',
  },
  {
    name: 'SportQuest',
    image: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/06/SQlogo_converted.png?resize=600%2C243',
    description: 'Used to motivate and equip the sports community to bridge the gap between faith and action inspires playing with purpose. SportQuest invests in athletes, sports professionals and churches to build service based, high impact, Christ centered relationships.',
  },
  {
    name: 'Children\'s Action Network (CAN)',
    image: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/06/CAN.jpg?resize=277%2C258',
    description: 'CAN uses the power of the entertainment community to increase awareness about children\'s issues and to make them a top priority in everyday life. CAN is currently dedicated to finding homes for the more than 107,000 children in the United States who are waiting for an adoptive family and improving outcomes for the more than 500,000 children in foster care.',
  },
  {
    name: 'Pencils of Promise',
    image: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/06/pencilsofpromise1.jpg?resize=600%2C163',
    description: 'Pencils of Promise brings life-changing education to children around the world by building quality schools and sustainable educational programs.',
  },
  {
    name: 'Pediatric Cancer Research Foundation (PCRF)',
    image: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/06/PCRFPRODUCTSLOGO.jpg?resize=1308%2C550',
    description: 'The heart of the Pediatric Cancer Research Foundation (PCRF) is in funding research that leads to curing childhood cancers. The vision is to bring hope and lifesaving treatments to children battling cancer.',
  },
  {
    name: 'Autism Speaks',
    image: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/06/autism-speaks-logo-png.png?resize=800%2C583',
    description: 'Autism Speaks has grown into the world\'s leading autism science and advocacy organization, dedicated to funding research into the causes, prevention, treatments and a cure for autism.',
  },
  {
    name: 'Sheltering Wings',
    image: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/06/SW_logo.jpg?resize=700%2C256',
    description: 'Sheltering Wings provides emergency housing for all women and children suffering from any form of domestic abuse. Sheltering Wings builds stable and independent lives through essential programs offered in a supportive and Christ-centered environment.',
  },
  {
    name: 'STOP POACHING NOW!',
    image: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/06/SPN1.jpg?resize=800%2C462',
    description: 'STOP POACHING NOW! was established with the mandate to protect gravely endangered animals: tigers, elephants, rhinos, lions and primates. By working together to expose the truth of black market animal hunting and trading, we can encourage people to protect these precious creatures, rather than killing them for money. We aim to influence politicians, educate populations and raise funds for existing grass root organizations that safeguard endangered animals and their environments in Africa and Asia. We seek to eradicate the demand for these illegal animal products with the support of all platforms of media including a youth outreach program that will resonate globally.',
  },
];

export default function AdvocatePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Audio Player */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <AudioPlayer src="/audio/Advocate.mp3" title="Advocate" />
        </div>
      </section>

      {/* Header */}
      <section className="py-8 border-b">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Advocate</h1>
          <p className="text-gray-700 leading-relaxed">
            I&apos;ve made it one of my life goals to use the platform of my career to bring awareness
            to local, national and global causes. With awareness comes knowledge, and when we operate
            in knowledge we have the power to make the world a better, safer place. Through monetary
            and/or hands-on support, you make a positive impact. Please click on the logo of any cause
            below to learn about their work and to offer support that makes a difference.
          </p>
        </div>
      </section>

      {/* Organizations List */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {organizations.map((org) => (
              <div
                key={org.name}
                className="border-b border-gray-200 pb-8 last:border-b-0"
              >
                <div className="mb-4">
                  {'url' in org && org.url ? (
                    <a href={org.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                      <Image
                        src={org.image}
                        alt={org.name}
                        width={300}
                        height={200}
                        className="max-w-[300px] h-auto object-contain"
                      />
                    </a>
                  ) : (
                    <Image
                      src={org.image}
                      alt={org.name}
                      width={300}
                      height={200}
                      className="max-w-[300px] h-auto object-contain"
                    />
                  )}
                </div>
                <p className="text-gray-700 leading-relaxed">{org.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
