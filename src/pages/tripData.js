const tripsData = [
    {
        id: 1,
        destination: 'Paris, France',
        duration: 7,
        budget: 1500,
        description: 'Experience the romance of Paris with a week-long adventure, visiting iconic landmarks, dining at exquisite restaurants, and enjoying the vibrant culture.',
        image: 'https://www.telegraph.co.uk/content/dam/Travel/hotels/2024/june/stock-paris-france.jpg', // Dummy image link
        bestTimeToVisit: 'April to June, September to November',
        gallery: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4D4Orr_uo8s0Thwqhb-Pk1R1gW5WI-v4S_ziHyHiKoc-dtC6ZPNAPCk1hRTVKU39k2Mw&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcssQ4215Dn8w5JTKRwpImgojHCJV4kVNO3g&s',
          'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/506000/506659-eiffel-tower.jpg',
        ],
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9998927572916!2d2.294481315674574!3d48.85884427928717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fefa0ccafed%3A0x9a42344b38d07fdb!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1611782859640!5m2!1sen!2sfr',
        itinerary: [
          {
            day: 1,
            activities: ['Arrival in Paris', 'Check-in at hotel', 'Evening stroll around the Eiffel Tower'],
          },
          {
            day: 2,
            activities: ['Visit the Louvre Museum', 'Explore Montmartre', 'Dinner at a local bistro'],
          },
          {
            day: 3,
            activities: ['Day trip to Versailles Palace', 'Picnic in the gardens'],
          },
        ],
        travelTips: [
          'Pack comfortable shoes for walking.',
          'Learn a few basic French phrases.',
          'Carry an umbrella, as the weather can be unpredictable.',
        ],
        reviews: [
          {
            name: 'Alice',
            comment: 'An unforgettable experience! Paris is truly magical.',
            rating: 5,
          },
          {
            name: 'John',
            comment: 'Loved every moment of the trip. Highly recommend it!',
            rating: 4.5,
          },
        ],
    },
    {
        id: 2,
        destination: 'Tokyo, Japan',
        duration: 10,
        budget: 2000,
        description: 'Explore the bustling streets of Tokyo, where tradition meets modernity. Visit ancient temples, shop in world-renowned districts, and experience the unique culture of Japan.',
        image: 'https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW8lMjBjaXR5fGVufDB8fDB8fHww', // Dummy image link
        bestTimeToVisit: 'March to May, September to November',
        gallery: [          
          'https://www.travelandleisure.com/thmb/VscfMXHNO6uBpaX2cuIW1q2ZtA8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tokyo-japan-TOKYOTG0621-52012ff551dc46c4a87ac8e3151307a4.jpg',
          'https://media.cntraveler.com/photos/62ab85a86df361f5801fd45b/1:1/w_4160,h_4160,c_limit/Tokyo_GettyImages-1319747119.jpg',
          'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/Japan/Tokyo/Tokyo-guide-lead-image.jpg',
        ],
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.561001394635!2d139.69170621567254!3d35.68948798019142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0f9f731ebf%3A0x7f64b4b033b9fd22!2sTokyo%20Tower!5e0!3m2!1sen!2sjp!4v1611783135798!5m2!1sen!2sjp',
        itinerary: [
          {
            day: 1,
            activities: ['Arrival in Tokyo', 'Check-in at hotel', 'Visit to Tokyo Tower'],
          },
          {
            day: 2,
            activities: ['Explore Asakusa and Senso-ji Temple', 'Visit to Nakamise Shopping Street'],
          },
          {
            day: 3,
            activities: ['Day trip to Mount Fuji', 'Visit the Five Lakes region'],
          },
        ],
        travelTips: [
          'Purchase a Japan Rail Pass for easy travel.',
          'Respect local customs, such as bowing and removing shoes indoors.',
          'Try to learn a few Japanese phrases for better communication.',
        ],
        reviews: [
          {
            name: 'Michael',
            comment: 'Tokyo is a city like no other. The mix of old and new is fascinating!',
            rating: 5,
          },
          {
            name: 'Sara',
            comment: 'The food was incredible and the culture even more so. Can’t wait to go back!',
            rating: 4.7,
          },
        ],
    },
    {
        id: 3,
        destination: 'New York City, USA',
        duration: 5,
        budget: 1200,
        description: 'Dive into the vibrant life of New York City. Visit iconic landmarks, enjoy Broadway shows, and taste the diverse cuisine that the city has to offer.',
        image: 'https://images.pexels.com/photos/771881/pexels-photo-771881.jpeg', // Dummy image link
        bestTimeToVisit: 'April to June, September to November',
        gallery: [
          'https://media.istockphoto.com/id/1384422450/photo/freedom-tower-and-lower-manhattan-from-new-jersey.jpg?b=1&s=612x612&w=0&k=20&c=IMNF2-HUqgAue55M2dFWK-RCY3f_IqHCcoJYMEYAHO8=',
          "https://media.istockphoto.com/id/1158382768/photo/aerial-view-of-the-central-park-in-new-york-with-golf-fields.jpg?s=612x612&w=0&k=20&c=eNy3-iCfCA1aXwpWyPZ28y2h2O0xD_01O-Bq1Hw0CfE=",
          'https://images.unsplash.com/photo-1602940659805-770d1b3b9911?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ldyUyMHlvcmslMjBjaXR5fGVufDB8fDB8fHww',
        ],
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9937283661083!2d-74.00601508459395!3d40.712775279328665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3168fcd7b5%3A0x6f0de2bd69afac0!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1611783286955!5m2!1sen!2sus',
        itinerary: [
          {
            day: 1,
            activities: ['Arrival in NYC', 'Check-in at hotel', 'Visit Times Square at night'],
          },
          {
            day: 2,
            activities: ['Statue of Liberty and Ellis Island', 'Walk through Central Park'],
          },
          {
            day: 3,
            activities: ['Visit the Metropolitan Museum of Art', 'Broadway show in the evening'],
          },
        ],
        travelTips: [
          'Buy tickets for attractions in advance to avoid long lines.',
          'Use the subway for quick and affordable transportation.',
          'Explore beyond Manhattan to see the city’s diverse neighborhoods.',
        ],
        reviews: [
          {
            name: 'Emma',
            comment: 'The energy of New York City is unmatched. So much to do and see!',
            rating: 5,
          },
          {
            name: 'Liam',
            comment: 'A bit crowded, but that’s part of the charm. Loved every minute!',
            rating: 4.3,
          },

        ],
    },
    {
      id: 4,
      destination: 'Rome, Italy',
      duration: 6,
      budget: 1400,
      description: 'Discover the ancient history and vibrant culture of Rome.',
      image:"https://imgs.search.brave.com/DbxteJGe_yJJ1xOeor5OAfQB0qfTBnjTgdVnDgiCF-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by9tc2lk/LTUzODkxNzY5LHdp/ZHRoLTk2LGhlaWdo/dC02NS5jbXM",
      itinerary: [
        {
          day: 1,
          activities: [
            'Arrival in Rome and check-in at the hotel.',
            'Evening walk through the Roman Forum.',
            'Dinner at a trattoria in Trastevere.',
          ],
        },
        {
          day: 2,
          activities: [
            'Morning visit to the Colosseum.',
            'Lunch near the Trevi Fountain.',
            'Afternoon exploration of the Vatican Museums and Sistine Chapel.',
            'Evening gelato tasting in Piazza Navona.',
          ],
        },
        {
          day: 3,
          activities: [
            'Day trip to Pompeii.',
            'Explore the ancient ruins.',
            'Return to Rome and dinner near the Spanish Steps.',
          ],
        },
        {
          day: 4,
          activities: [
            'Visit to the Pantheon and Piazza Venezia.',
            'Lunch in a local market.',
            'Afternoon visit to the Borghese Gallery and Gardens.',
            'Evening at the Opera House for a classic performance.',
          ],
        },
        {
          day: 5,
          activities: [
            'Explore the Catacombs of Rome.',
            'Lunch in Testaccio, the foodie district.',
            'Afternoon shopping along Via del Corso.',
            'Dinner at a rooftop restaurant overlooking the city.',
          ],
        },
        {
          day: 6,
          activities: [
            'Final day to revisit favorite sites or explore new ones.',
            'Brunch at a local café.',
            'Departure from Rome.',
          ],
        },
      ],
    },
    {
      id: 5,
      destination: 'Sydney, Australia',
      image:"https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_1920,c_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg",
      duration: 8,
      budget: 1800,
      description: 'Explore the vibrant city of Sydney and its surrounding natural beauty.',
      itinerary: [
        {
          day: 1,
          activities: [
            'Arrival in Sydney and check-in at the hotel.',
            'Evening visit to the Sydney Opera House.',
            'Dinner at a waterfront restaurant in Darling Harbour.',
          ],
        },
        {
          day: 2,
          activities: [
            'Morning climb of the Sydney Harbour Bridge.',
            'Lunch at The Rocks district.',
            'Afternoon visit to the Royal Botanic Garden.',
            'Evening at a bar in Circular Quay.',
          ],
        },
        {
          day: 3,
          activities: [
            'Day trip to the Blue Mountains.',
            'Hiking and scenic views of the Three Sisters.',
            'Return to Sydney and dinner at a local pub.',
          ],
        },
        {
          day: 4,
          activities: [
            'Visit to Taronga Zoo and encounter with Australian wildlife.',
            'Lunch in Mosman.',
            'Afternoon ferry ride to Manly Beach.',
            'Surfing lessons and relaxation on the beach.',
          ],
        },
        {
          day: 5,
          activities: [
            'Explore Bondi Beach and the Bondi to Coogee coastal walk.',
            'Lunch at a beachside café.',
            'Afternoon visit to the Art Gallery of New South Wales.',
            'Evening at a live music venue in Newtown.',
          ],
        },
        {
          day: 6,
          activities: [
            'Visit to the Australian Museum.',
            'Lunch at a modern Australian restaurant.',
            'Afternoon shopping at the Queen Victoria Building.',
            'Dinner at a seafood restaurant with views of the harbour.',
          ],
        },
        {
          day: 7,
          activities: [
            'Day trip to the Hunter Valley wine region.',
            'Wine tasting and gourmet lunch at a vineyard.',
            'Return to Sydney and relaxation at the hotel.',
          ],
        },
        {
          day: 8,
          activities: [
            'Final morning in Sydney for last-minute shopping or beach visit.',
            'Brunch at a popular café.',
            'Departure from Sydney.',
          ],
        },
      ],
    },
    {
      id: 6,
      destination: 'Cairo, Egypt',
      image:"https://upload.wikimedia.org/wikipedia/commons/d/db/Cairo_From_Tower_%28cropped%29.jpg",
      duration: 7,
      budget: 1600,
      description: 'Uncover the mysteries of ancient Egypt with a trip to Cairo.',
      itinerary: [
        {
          day: 1,
          activities: [
            'Arrival in Cairo and check-in at the hotel.',
            'Evening visit to the Khan el-Khalili bazaar.',
            'Dinner at a traditional Egyptian restaurant.',
          ],
        },
        {
          day: 2,
          activities: [
            'Morning visit to the Giza Pyramids and the Sphinx.',
            'Camel ride around the pyramids.',
            'Lunch at a restaurant overlooking the Nile River.',
            'Afternoon visit to the Egyptian Museum.',
            'Evening Nile cruise with dinner and entertainment.',
          ],
        },
        {
          day: 3,
          activities: [
            'Day trip to Saqqara and Memphis to explore more ancient ruins.',
            'Lunch at a local café in Memphis.',
            'Return to Cairo and visit the Citadel of Saladin.',
            'Dinner in the historic district of Islamic Cairo.',
          ],
        },
        {
          day: 4,
          activities: [
            'Visit to the Al-Azhar Mosque and Al-Hussein Mosque.',
            'Lunch in a traditional Egyptian home (home-cooked meal experience).',
            'Afternoon exploration of the Coptic Cairo area, including the Hanging Church.',
            'Evening at a cultural show featuring traditional Egyptian music and dance.',
          ],
        },
        {
          day: 5,
          activities: [
            'Visit to the Pharaonic Village for a reenactment of ancient Egyptian life.',
            'Lunch on a felucca (traditional Egyptian sailboat) on the Nile.',
            'Afternoon visit to the Gayer-Anderson Museum.',
            'Evening free for personal exploration of Cairo.',
          ],
        },
        {
          day: 6,
          activities: [
            'Day trip to Alexandria to explore the Mediterranean coast.',
            'Visit the Library of Alexandria and the Citadel of Qaitbay.',
            'Lunch by the sea in Alexandria.',
            'Return to Cairo and relax at the hotel.',
          ],
        },
        {
          day: 7,
          activities: [
            'Final day to visit any missed sites or do some shopping.',
            'Brunch at a café overlooking the Nile.',
            'Departure from Cairo.',
          ],
        },
      ],
    },
  ];

  export default tripsData;