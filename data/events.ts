export interface Event {
  name: string;
  themedName: string;
  price: string;
  description: string;
  rules: string[];
  category: string;
  day: number;
  eventType: string;
  element: 'air' | 'water' | 'earth' | 'fire' | 'space';
  soloPrice?: string;
  groupPrice?: string;
}

export const events: Event[] = [
  {
    name: "BGMI",
    themedName: "BGMI",
    price: "₹200",
    description: "A battle royale game where players fight to be the last one standing in a large, open-world map.",
    rules: ["Coming Soon"],
    category: "Online Games",
    day: 1,
    eventType: "Flagship",
    element: "fire",
    groupPrice: "₹200"
  },
  {
    name: "Mr & Mrs Ubuntu",
    themedName: "Crown of the Cosmos",
    price: "₹100",
    description: "Compete for the title of Mr. and Ms. UBUNTU in this pageant. Participants will be judged on personality, talent, and appearance.",
    rules: ["Coming Soon"],
    category: "Performing Arts",
    day: 2,
    eventType: "Flagship",
    element: "space",
    soloPrice: "₹100"
  },
  {
    name: "Fashion Show",
    themedName: "Fusion of Tatvas",
    price: "₹300",
    description: "The art of expressing emotions and storytelling through thematic attire and presentation.",
    rules: ["Coming Soon"],
    category: "Performing Arts",
    day: 2,
    eventType: "Flagship",
    element: "air",
    groupPrice: "₹300"
  },
  {
    name: "Mock Stock",
    themedName: "Winds of Trade",
    price: "₹100",
    description: "A simulation of the stock market where participants trade to build the most valuable portfolio.",
    rules: ["Coming Soon"],
    category: "Online Games",
    day: 2,
    eventType: "Flagship",
    element: "air",
    soloPrice: "₹100"
  },
  {
    name: "Treasure Hunt",
    themedName: "Panchtatva ki Khoj",
    price: "₹200",
    description: "A team-based puzzle game where players solve clues and challenges to find a hidden treasure.",
    rules: ["Coming Soon"],
    category: "Creative Challenges",
    day: 2,
    eventType: "Flagship",
    element: "earth",
    groupPrice: "₹200"
  },
  {
    name: "Human Ludo",
    themedName: "Panchtatva Prayaan",
    price: "₹200",
    description: "A life-sized, interactive version of the classic board game Ludo.",
    rules: ["Coming Soon"],
    category: "Creative Challenges",
    day: 2,
    eventType: "Flagship",
    element: "water",
    groupPrice: "₹200"
  },
  {
    name: "Dance (Group)",
    themedName: "AgniNritya - The Rhythmic Flow",
    price: "₹300",
    description: "Join the group dance competition and groove to the music. Performances should be thematic and synchronized.",
    rules: ["Coming Soon"],
    category: "Performing Arts",
    day: 2,
    eventType: "Flagship",
    element: "fire",
    groupPrice: "₹300"
  },
  {
    name: "Singing (Solo)",
    themedName: "Whisper of Air",
    price: "₹50",
    description: "The art of producing musical sounds with the voice, expressing emotion and melody.",
    rules: ["Coming Soon"],
    category: "Performing Arts",
    day: 1,
    eventType: "Large",
    element: "air",
    soloPrice: "₹50"
  },
  {
    name: "Instrumental (Solo)",
    themedName: "Vadyon ka Mahasangram",
    price: "₹100",
    description: "Musical performance focused on melodies and harmonies played using instruments, without vocals.",
    rules: ["Coming Soon"],
    category: "Performing Arts",
    day: 1,
    eventType: "Large",
    element: "air",
    soloPrice: "₹100"
  },
  {
    name: "Canva",
    themedName: "Canva Carnival",
    price: "₹50",
    description: "A digital design challenge where participants create visually compelling graphics on a given theme.",
    rules: ["Coming Soon"],
    category: "Fine Arts",
    day: 1,
    eventType: "Large",
    element: "space",
    soloPrice: "₹50"
  },
  {
    name: "Chess",
    themedName: "Battle of Minds",
    price: "₹50",
    description: "A strategic board game played between two players with the goal of checkmating the opponent's king.",
    rules: ["Coming Soon"],
    category: "Sports",
    day: 1,
    eventType: "Large",
    element: "earth",
    soloPrice: "₹50"
  },
  {
    name: "Best Out of Waste",
    themedName: "PrithviSrijan Navrachna",
    price: "₹50",
    description: "A creative challenge to transform waste materials into innovative and useful items.",
    rules: ["Coming Soon"],
    category: "Creative Challenges",
    day: 1,
    eventType: "Large",
    element: "earth",
    soloPrice: "₹50"
  },
  {
    name: "Escape Room",
    themedName: "Rahasaymayi Band Darwaze",
    price: "₹100",
    description: "A team-based puzzle game where players solve clues and challenges to escape from a themed room within a set time limit.",
    rules: ["Coming Soon"],
    category: "Creative Challenges",
    day: 1,
    eventType: "Large",
    element: "space",
    groupPrice: "₹100"
  },
  {
    name: "Story Mode Photography",
    themedName: "Streams of Stories",
    price: "₹50",
    description: "Capture a narrative through a series of photographs based on a given theme.",
    rules: ["Coming Soon"],
    category: "Digital/Media",
    day: 1,
    eventType: "Large",
    element: "water",
    soloPrice: "₹50"
  },
  {
    name: "Dance (Solo)",
    themedName: "AgniNritya - The Rhythmic Flow",
    price: "₹50",
    description: "A solo dance performance where participants express a theme through rhythmic body movements.",
    rules: ["Coming Soon"],
    category: "Performing Arts",
    day: 2,
    eventType: "Large",
    element: "fire",
    soloPrice: "₹50"
  },
  {
    name: "Nail Art",
    themedName: "Tips of Elements",
    price: "₹50",
    description: "Show off your nail art creativity. Designs should be original and thematic.",
    rules: ["Coming Soon"],
    category: "Fine Arts",
    day: 2,
    eventType: "Large",
    element: "water",
    soloPrice: "₹50"
  },
  {
    name: "Tote Bag Painting",
    themedName: "Roots to Bag",
    price: "₹100",
    description: "Decorate a tote bag with your artistic vision and painting skills based on a given theme.",
    rules: ["Coming Soon"],
    category: "Fine Arts",
    day: 2,
    eventType: "Large",
    element: "earth",
    soloPrice: "₹100"
  },
  {
    name: "Creative Writing",
    themedName: "Tatva Vichaar",
    price: "₹50",
    description: "Express ideas and stories creatively through the written word on a given theme.",
    rules: ["Coming Soon"],
    category: "Literary Arts",
    day: 2,
    eventType: "Large",
    element: "air",
    soloPrice: "₹50"
  },
  {
    name: "Badminton",
    themedName: "VayuSmash",
    price: "₹100",
    description: "A fast-paced racket sport played with a shuttlecock, focusing on agility and strategy.",
    rules: ["Coming Soon"],
    category: "Sports",
    day: 2,
    eventType: "Large",
    element: "air",
    soloPrice: "₹100"
  },
  {
    name: "Mono Act",
    themedName: "One Frame Drama",
    price: "₹50",
    description: "A solo performance where an actor portrays various characters or emotions based on a theme.",
    rules: ["Coming Soon"],
    category: "Performing Arts",
    day: 2,
    eventType: "Small",
    element: "fire",
    soloPrice: "₹50"
  },
  {
    name: "Rangoli",
    themedName: "Colours of Heritage",
    price: "₹50",
    description: "Create beautiful and intricate designs on the floor using colored powders, rice, or flowers.",
    rules: ["Coming Soon"],
    category: "Fine Arts",
    day: 1,
    eventType: "Small",
    element: "earth",
    soloPrice: "₹50"
  },
  {
    name: "Face Beauty",
    themedName: "PrithviChitra - Art of the Earth",
    price: "₹50",
    description: "A competition to showcase makeup artistry skills based on a specific theme.",
    rules: ["Coming Soon"],
    category: "Fine Arts",
    day: 1,
    eventType: "Small",
    element: "earth",
    soloPrice: "₹50"
  },
  {
    name: "Slam Poetry",
    themedName: "Shadon Ki Mehfil",
    price: "₹50",
    description: "A performance poetry competition where poets recite original work based on a theme.",
    rules: ["Coming Soon"],
    category: "Literary Arts",
    day: 1,
    eventType: "Small",
    element: "air",
    soloPrice: "₹50"
  },
  {
    name: "E-Football",
    themedName: "E-Football",
    price: "₹50",
    description: "A digital soccer game series offering realistic gameplay and online competitions.",
    rules: ["Coming Soon"],
    category: "Online Games",
    day: 1,
    eventType: "Small",
    element: "fire",
    soloPrice: "₹50"
  },
  {
    name: "Reel Making",
    themedName: "Realm of Reels",
    price: "₹50",
    description: "Create a short, creative, and engaging video reel based on a given theme.",
    rules: ["Coming Soon"],
    category: "Digital/Media",
    day: 1,
    eventType: "Small",
    element: "water",
    soloPrice: "₹50"
  },
  {
    name: "Mehandi",
    themedName: "Bloom in Henna",
    price: "₹50",
    description: "A competition to create the most beautiful and intricate henna designs on hands.",
    rules: ["Coming Soon"],
    category: "Fine Arts",
    day: 2,
    eventType: "Small",
    element: "earth",
    soloPrice: "₹50"
  },
  {
    name: "Stumble Guys",
    themedName: "Stumble Guys",
    price: "₹50",
    description: "Compete in the Stumble Guys gaming event. Players must navigate obstacles in a race to the finish.",
    rules: ["Coming Soon"],
    category: "Online Games",
    day: 2,
    eventType: "Small",
    element: "water",
    soloPrice: "₹50"
  },
  {
    name: "Clash Royale",
    themedName: "Clash Royal",
    price: "₹50",
    description: "A real-time multiplayer strategy game featuring card-based battles and tower defense.",
    rules: ["Coming Soon"],
    category: "Online Games",
    day: 2,
    eventType: "Small",
    element: "fire",
    soloPrice: "₹50"
  }
];

export const getEventsByElement = (element: string) => {
  return events.filter(event => event.element === element);
};

export const getEventsByDay = (day: number) => {
  return events.filter(event => event.day === day);
};

export const getEventsByType = (type: string) => {
  return events.filter(event => event.eventType === type);
};
