'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "parties", [
        {
          eventName: "Mushroom Valley",
          image: "",
          month: "October 2020",
          duration: "02nd - 04th",
          description: `
          Mushroom Valley is more than just a party, it is a community, a place where you can grow, learn 
          and connect with other like minded people. A place where you can come and be revitalised and re-energised 
          to go out and take on the "real" world. There are plenty of workshops for the young and old in the 
          healing village as well as massage and reiki.
          Over the weekend the music will range through many genres.On the Friday night it will be a funk, glitch 
          and drum and bass session then saturday night your more traditional techno, progressive and psytrance, with 
          diversity over the weekend being the main flavour.
          There are a few things we at Mushroom Valley Productions are extremely passionate about. One thing is providing 
          a safe and respectful environment for the whole family from young to old.
          `,
          rules: `
          There are no eftpos facilities on site. Make sure you bring cash.
          - We are working with council and local police and will have security on site.
          - We will also be offering a new service this year where for a small fee you will be able to be 
            tested for alcohol or drugs before you leave the festival.
          -No DRUGS!
          - NO AGGRESSIVE BEHAVIOUR OR DISRESPECT IN ANY FORM
          - NO ICE.......We understand that everyone partys differently however smoking ice lowers your 
            vibration and we do not want it at our festivals. 
          - NO DOGS, please do not bring dogs to the festival, they and you will have to leave. 
          - NO GLASS, please do not bring ANY glass bottles, they are dangerous and often get smashed into the ground!
          - NO FIRES, The property is at the edge of a state forest so fire safety is a must! TOTAL FIRE BAN!
          - TAKE YOUR RUBBISH WITH YOU! If we want to continue to use this site for events then our impact needs to be minimal!
          - NO RENEGADES
          - NO GENERATORS
          -There will be free camping from friday 12pm until 12pm monday
          `,
          continent: "Australia",
          country: "Australia",
          covidClosure: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: "Strawberry Fields",
          image: "",
          month: "November 2020",
          duration: "19th - 22nd",
          description: `
          The smiles, the sunburn, the sky and the clouds. The strangers, the friends - both new found and old. 
          That long drive into the unknown, followed by dancing, and inevitable laughter. Embarking on adventures 
          through the ghost gums, discovering a bamboo playground, an oriental tea lounge, a jazz quintet improvising 
          in a temple or a disco legend unleashing funk & soul from a treehouse. Afternoons of wild river swimming and 
          those quite moments of reflection. These are the things that will define the greatest weekend of your life. 
          Welcome to the wild world of Strawberry Fields.`,
          continent: "Australia",
          country: "Australia",
          city: "Victoria",
          covidClosure: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: "Rabbits Eat Lettuce",
          image: "",
          month: "April 2021",
          duration: "01st - 04th",
          description: `
          We believe that festivals can be a powerful catalyst for self-development, healing and social change. 
          We want to provide an experience that enriches your soul at the same time as giving you a place to party and socialize.
          Rabbits Eat Lettuce is a place of Freedom, Love & Dance Music. Camp in a beautiful natural environment and form a 
          community of like-minded souls who want to escape the hustle and bustle of the city life. Rabbits Eat Lettuce lets us 
          be human again. We can dissolve the social barriers and dance together.
          Rabbits Eat Lettuce began in 2008 as a Tribal Easter party on the mid-north-coast of NSW and has become an underground 
          tradition in the area, long lost brothers and sisters reconnect to dance, share stories, socialize and camp out under 
          the stars. The event has grown a lot since it’s humble beginnings as a forest dance party but still holds the same 
          essence of freedom and unique mystery it started with.
          `,
          accomodation: `
          Camping:
          Camping out under the stars for four days with your best mates is one of the aspects that make Rabbits Eat Lettuce so special.  
          Camping for the full 4 days is included in the cost of your festival ticket and is available from Thursday 9:30am until 
          Monday 12:00pm. Campervans, motorhomes and caravans are welcome. No “Land Grabbing” allowed, If you wish to camp with your 
          friends please plan to arrive together.
          POWERED RV / Caravan SITES are available for $390.

          Glamping:
          If you’d rather have all the hassle of camping taken care of for you then consider one of our luxury camping options!  
          Beautiful, spacious bell tents with foam beds, in a reserved camping area close to amenities are available now from WOW tents. 
          These will sell out. Pre-booking is essential. The Glamping area will have private toilets & Free Showers and there will be an 
          awesome common area/chill space provided by The Giant Tipi Company with mirrors, electricity and tunes!
          
          Solo Camping / Tent Only Camping:
          We know it can be daunting rocking up to a festival without your Doof buddies so we have reserved an area for solo travellers. 
          That way you can meet other people in the same situation and form connections quickly. There will be a community lounge space 
          for all solo campers to chill.
          `,
          lineUp: `
          OPIOU || LAI E NI I E TUFF GUY || SHOCKONE || GROUCH || MOIEZ || SENSEIN I || ZEKE BEAIS || GODLANDS || MADE IN PARIS || OKA || WONGO || TRUTH || SIACE CADE I || SPOONBILL || LO’99 || K+LAB || FLOWIDUS and many more...
          `,
          ticketLink: "https://www.rabbitseatlettuce.com.au/?fbclid=IwAR1aLulsmyIinqnlSLolTIJJI4DbjLjGRKM84gvkvSor8jymPUaMoJ0PdPs",
          rules: `
          No fires
          No glass
          No anti social behavior
          No illegal substances
          Leave no trace
          Must bring photo ID & Festival Ticket (or cash) to enter
          Is an  18+ event (anyone under 18 MUST arrive with a legal parent or guardian)
          `,
          extraInfo: `
          Hot Showers will be on site.  We know you like to get fresh and clean after a big night partying!  Shower use is charged at $2 
          per minute, which helps cover the cost of the shower truck rental, electricity, LPG, water and servicing. 
          Shower Facilities will accept $2 Coins so be sure to bring enough for the 4 days.
          `,
          covidClosure: false,
          continent: "Australia",
          country: "Australia",
          city: "Kingham QLD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: "Echo Gatherings - Elememts of Life",
          image: "",
          month: "November 2020",
          duration: "27th - 30th",
          description: `
          We have thus far individually celebrated all the Elements of Life itself through our Echo Gatherings
          Earth - Fire - Water - Air and finally we have arrived at ECHO "ELEMENTS OF LIFE". These very Elements create the 
          very beautiful Universe we all Live Love Laugh & Play in. With THIS ECHO GATHERING we are going to weave all these fundamentals 
          into one INTRINSICALLY woven celebration through music and togetherness with the EARTH beneath our feet to the glow of the 
          spiritual FIRE in our souls where the clarity of the AIR in our lungs and the nourishment of the WATER in our bodies will 
          come together for the love of SPIRIT in our hearts so we may all be finally REBIRTHED whole and in unity to the Celebration of this 
          one life and planet we are blessed to be a part of…..Where we can dance beneath the sun moon and stars ,towered and protected by 
          the majestic mountains we shall give praise to our existence with pure happiness love and gratitude.
          "WE THE PEOPLE HAVE THE POWER TO MAKE THIS LIFE FREE AND BEAUTIFUL..TO MAKE THIS LIFE
          A WONDERFUL MAGICAL ADVENTURE IN UNITY WE SHALL ACHIEVE THIS POWER ": “THE ELEMENTS OF LIFE”
          `,
          accomodation: `
          6 SLEEPER CHALETS : R3500.00 Fri – Mon ( 9am Check Out)
          4 SLEEPER CHALETS: R2500.00 Fri – Mon ( 9am Check Out)
          Contact Dan:+27 726937491
          `,
          lineUp: `
          AI MATHESDORF // PSY MANTIS // JUKEBOX // SILO //
          DELIRIANT // PLUSMINUS // CAPES // TUNE RAIDER //
          KILLER B // HEGCHICK // DAN SCOT // SKITZO // AHEE //
          DANIMAL // RYAN // BOON // SCI LAB // DRIVA
          FEVER CY // ETHEREAL_SA // BRONTIDE // MR SUBB //
          FRANKINSENSE // LUNCH MONEY // LEE HUMAN // PSYNAPSE
          NIC BEST // DANNYBOY // INTROPIN // SIREN // FEEL GOOD INC
          `,
          ticketLink: "https://www.howler.co.za/events/echo-gatherings-elements-of-life-a3fd?fbclid=IwAR0Yg8h1Kyi_9j4iut_somr3lx8GoVXt1Ol0ZSW9lkc2XqzJC4gXq0hjzfI",
          extraInfo: `
          Shaded dance-floor
          Lush Grass Camping
          Fresh River Swimming
          Food Stalls (many veggy options too)
          Bar ( Raise The Bar)
          Medical Facilities
          Friendly Staff
          Craft & Clothing Stalls
          24 hr Clean Ablutions
          Hot n Cold Showers
          ATM/ Cash back
          `,
          covidClosure: false,
          continent: "Africa",
          country: "South Africa",
          city: "George",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: "Vortex Open Source",
          image: "",
          month: "December 2020",
          duration: "10th - 14th",
          description: `
          Vortex Open Source celebrates the summer solstice: a time of ascension, passion, and new beginnings. It is the time for 
          inviting in the light, the fire of creativity and transformation. Our team of visionary artists and producers collaborate 
          through an Open Source style of ethics of sharing the collective wisdom to support our conscious evolution in giving without 
          expectation,  maintaining open hearts and minds thus making what is possible for one possible for all.
          The diverse global psychedelic trance and electronic music culture hold a unique space for the vital role of dance and transformation 
          – an immensely important aspect humanity have carried with us for centuries. We have the potential for change, and the power and 
          responsibility for unity, harmony, and respect. By engaging our psytrance family through an open-source philosophy with the highest 
          intentions, we hope to unlock our collective potential as a catalyst for radical change. These may just be the seeds of change: but 
          every element, every interaction, every smile, and every frequency has the potential to manifest into more.
          `,
          accomodation: `
          Those of you who purchased festival tickets from either Quicket or an outlet/ambassador there is shaded camping in the inspiringly 
          beautiful forest along the many rivers and a demarcated, secure area to park your car. Pitch your tent and get creative – this 
          will be your home for the whole five days! Bring your hammocks, fairy lights, and swimming gear, and make yourself comfortable.
          `,
          covidClosure: true,
          continent: "Africa",
          country: "South Africa",
          city: "Cape Town",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: "Earth Frequency Festival",
          image: "",
          month: "February 2021",
          duration: "12th - 15th",
          description: `
          Earth Frequency Festival is a music, arts, lifestyle and environmental festival based in South-East Queensland, Australia, 
          with a strong focus on arts, education, healing and community spirit. While drawing from many cultural niches such as transformational 
          festival, tribal gathering, doof and boutique festival, the aim of Earth Frequency Festival is to go beyond these traditional tags 
          and to exist as a multi-faceted gathering focused broadly on creativity, connection, intention and inspiration.
          From its origins as a small landcare party in 2005, Earth Frequency has now become one of Australia's foremost transformational 
          gatherings. At Earth Frequency, you can always expect an amazing mixture of live and electronic music, performance, visionary art, 
          workshops and lectures, a family and kids space, a fantastic food and markets area, and of course a positive community vibe.  
          Our aim is to create nothing short of a life changing, transformative experience! We aim to provide a meeting place - people from 
          many different backgrounds, ages and walks of life come together with the shared interests of music, nature, technology, culture and peace. 
          Earth Frequency Festival is held each year at Ivory's Rock Conventions and Events in Peak Crossing. Ivory's Rock is a beautiful outdoor 
          venue with top notch facilities, comfortable campgrounds, and it is conveniently located under an hour from Brisbane and just 20 minutes 
          from Ipswich. Nurtured by the setting of the beautiful Australian outdoors, we gather together once a year to celebrate life with music, 
          art and other creative forms, and to educate, connect, heal and inspire.  For those attending, it may just be the defining weekend of your summer!
          `,
          accomodation: `
          General camping, your festival ticket includes camping in the General Camping campsite for the duration of the festival.   
          For general camping, 
          you may arrive from 9am Friday 12th February and you must leave the festival venue by midday Tuesday 16th February.
          Deluxe camping, 
          We are happy to once again offer Deluxe Camping for EFF2021. Deluxe Camping is a camping upgrade option which offers:
          Arrival to the festival one day early (additional day of camping for occupants of the car is included in the deluxe camping pass)
          Access to power (conditional on safe site and weather conditions),
          Close access to a shower and toilet block
          Closest campsites to the festival's entertainment area
          Ability to pre-select a camping plot (convenient for camping next to your mates, and being sure your camping spot is held for whenever you plan to arrive).
          `,
          lineUp: "TBA",
          ticketLink: "https://www.earthfrequency.com.au/tickets",
          rules: `
          No Pets – especially dogs.
          No Glass or Excessive amounts of Alcohol.
          No Illegal Substances.
          No Anti-Social Behaviour.
          No loud or offensive music at any time in campgrounds.
          Generators and Sound Systems are not allowed in the festival campgrounds.
          Small iPod docks in campsites are permitted, providing that you are considerate of your neighbours.
          If you have a small iPod dock and you receive a request from the EFF team to turn it down or off, you must comply.
          No Fires or Fireworks - Total Fire Ban in the camp sites.
          No quad bikes or mini bikes.
          No Camping under the trees.
          You must wear your wristband at all times, do not tamper with it. If it is damaged, head to the info tent for a replacement.
          The use of CB radios is permitted, however channels 13-28 are reserved for event operations. Please do not communicate on these channels.
          `,
          covidClosure: false,
          continent: "Australia",
          country: "Australia",
          city: "Brisbane",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: "Son Libre Festival",
          image: "",
          month: "June 2021",
          duration: "10th - 13th",
          description:`
          Description:
          We propose a 4-day and 3 night trip where the music hardly ever stops! Between the Groove Zone and the Vibe Circle, you are going to 
          enjoy yourself if you are true electronic music lover. More than just a festival, it’s a whole experience that’ll change you forever!
          We let you circulate freely with your food and alcohol, like many big festivals such as The Boom and The Ozora. These festivals inspire us a 
          lot with our artistic choices but still leave room for the underground techno culture.
          `,
          covidClosure: true,
          continent: "Europe",
          country: "France",
          city: "Gard",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: "Burning Mountain Festival",
          image: "",
          month: "June 2021",
          duration: "24th - 27th",
          description: `
          Burning Mountain Festival is a four days psychedelic experience, combining art and music, in the magic surroundings of the Swiss Alps.
          The festival has one of the most amazing lineups, presenting year after year some of the finest Progressive Psytrances from all over the world.
          Light Shows and decorations will give you a fully immersive experience off the beaten track. Moreover flamethrowers, dozens of performance artists 
          and fire installations will enhance your experience.
          The unique location lies in the Engadin Valley, one of the highest inhabited valleys of Europe, next to the River Inn and surrounded with trees. 
          The village Zernez is within 10-15 minutes walking distance and offers top infrastructure like hotels, restaurants, ATM machines and shops.
          `,
          accomodation: `
          Camping during the festival is included in the festival ticket, so all you need is basic camping gear, like a tent, a camping pad and a head 
          torch (so useful in the night).
          Alternatively, you can book nearby hotels and apartments using the map below or visit booking.com
          `,
          lineUp: `
          Animato / Anunnaki Project / Astrix / Audiomatic / Audiosource / Bengani & Akasha Nasha / Blastoyz / BLiSS / Boot Sequence / Brahma & Blurryface / 
          Cornflakes 3D / CR3WFX / D-Nation / Delta Dust & Pected / Fabio Fusco / Flash Jack / Gabun / Gaudium / Ghost Rider / Ground Zero / Harlekin / 
          Hatikwa / Jumpix / Level Up / Liquid Soul / Luro / Mark Main / Metronome / Narxz /Novi Maschilton / Omiki / Outsiders / Paint It Black / Predator / 
          Psyjag / Reality Test / RITMO / Simex / Sputnik / Synthex / TERRA / Vini Vici`,
          ticketLink: `
          Festival ticket: 
          https://www.starticket.ch/de/tickets/burning-mountain-festival-2020-20200625-1800-20200626-1700-festivalgelande-praschitsch-zernez
          
          Glamping Ticket:
          https://www.starticket.ch/de/tickets/burning-mountain-festival-2020-20200625-1800-20200626-1700-festivalgelande-praschitsch-zernez`,
          continent: "Europe",
          country: "Switzerland",
          city: "Zernez",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: "Antaris Project",
          image: "",
          month: "June 2021",
          duration: "25th - 28th",
          description: `
          Antaris Project is one of the longest running Psytrance Festivals in the world, with thousands of visitors each year from all over the world. 
          Antaris is the mother of the German Psytrance Festivals. The festival is located at the airfield Otto Lilienthal near Stölln city.
          ANT-ARIS = AGAINST WAR! For Peace, Friendship and Freedom!
          The main floor is one of the oldest in Europe and an integral part of the festival culture for 25 years. You will enjoy a blend of the finest 
          progressive, psychedelic, full-on and old school trance, from a top tier international lineup, with unique laser, video and lighting concepts.
          `,
          accomodation: "TBA",
          lineUp: "TBA",
          ticketLink: "https://antaris-project.ebtix.de/event/R6QC9Z/show_tickets_in_page",
          covidClosure: false,
          continent: "Europe",
          country: "Germany",
          city: "Stöllin",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ] 
    )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("parties", null, {});
  }
};
