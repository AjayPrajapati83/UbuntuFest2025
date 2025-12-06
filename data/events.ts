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
    rules: [
      "Finger sleeves are allowed.",
      "Air triggers or external triggers are strictly not allowed.",
      "Hacking is strictly prohibited.",
      "Ensure that the language used while playing is appropriate and respectful.",
      "There should not be any potential issues like hate or harassment or provocation. If any participant is found doing so, the team will be disqualified.",
      "Participants should come 30 minutes prior.",
      "Participants should have a strong internet connection.",
      "The game should be updated.",
      "There is an online qualifier on 9th and 10th of December and offline qualifier on 12th of December.",
      "16 teams will qualify for the final round on 12th of December."
    ],
    category: "Online Games",
    day: 1,
    eventType: "Flagship",
    element: "fire",
    groupPrice: "₹200"
  },
  {
    name: "Mr & Ms Ubuntu",
    themedName: "Crown of the Cosmos",
    price: "₹100",
    description: "Compete for the title of Mr. and Ms. UBUNTU in this pageant. Participants will be judged on personality, talent, and appearance.",
    rules: [
      "Participants are required to report at least one hour before the event begins.",
      "Participants must wear decent and appropriate attire.",
      "Offensive or inappropriate clothing will lead to immediate elimination.",
      "Judging criteria will include: Walk and stage presence, Attire and overall appearance, Response (Q&A round), Talent performance",
      "In the talent round, participants will be given 2–3 minutes to display their talent.",
      "Any music or song required for the talent round must be submitted to the organizing team at the time of registration.",
      "There will be elimination rounds based on walk, attire, and talent performance.",
      "Any participant found misbehaving or arguing after a warning will be disqualified.",
      "Additional judging criteria, if any, will be decided by the judges during the event"
    ],
    category: "Performing Arts",
    day: 2,
    eventType: "Flagship",
    element: "space",
    soloPrice: "₹100"
  },
  {
    name: "Fashion Show",
    themedName: "Fusion of Tatvas",
    price: "₹250",
    description: "The art of expressing emotions and storytelling through thematic attire and presentation.",
    rules: [
      "Each group must consist of a minimum of 5 and a maximum of 12 participants.",
      "The time limit is 8 to 10 minutes. Exceeding the limit may result in deduction of points.",
      "Participants must visually represent at least two elements from the theme Panchtatva.",
      "Participants must strictly adhere to the theme and dress code.",
      "The judges' decision will be final and binding.",
      "Teams will be judged based on performance, costume design, theme interpretation, and overall presentation.",
      "In case of a tie between two teams, an on-the-spot performance round will be conducted.",
      "Participants must arrive at least one hour before the event begins.",
      "Performance slots will be allotted as per registration order.",
      "Tube tops, bralettes, or outfits revealing the novel beyond a reasonable length are not permitted."
    ],
    category: "Performing Arts",
    day: 2,
    eventType: "Flagship",
    element: "air",
    groupPrice: "₹250"
  },
  {
    name: "Mock Stock",
    themedName: "Winds of Trade",
    price: "₹100",
    description: "A simulation of the stock market where participants trade to build the most valuable portfolio.",
    rules: [
      "Invest in at least 10 of 15 companies with virtual capital which will be given.",
      "Make buy/avoid decisions based on 15 company news updates (1–2 minutes each).",
      "Final stock prices will determine profits/losses and winner.",
      "Other rules will be disclosed on the day of the event."
    ],
    category: "Online Games",
    day: 1,
    eventType: "Flagship",
    element: "air",
    soloPrice: "₹100"
  },
  {
    name: "Treasure Hunt",
    themedName: "Panchtatva ki Khoj",
    price: "₹100",
    description: "A team-based puzzle game where players solve clues and challenges to find a hidden treasure.",
    rules: [
      "Participants will compete in groups of 2 members.",
      "Arrival – players must arrive 5 minutes prior to the scheduled start time",
      "The first Team to find the treasure within time wins.",
      "On the absence at the schedule starting time the team will be considered disqualified.",
      "Other rules will be disclosed on the day of the event."
    ],
    category: "Creative Challenges",
    day: 2,
    eventType: "Flagship",
    element: "earth",
    groupPrice: "₹100"
  },
  {
    name: "Human Ludo",
    themedName: "Human Ludo",
    price: "₹200",
    description: "A life-sized, interactive version of the classic board game Ludo.",
    rules: [
      "4 Players in a team.",
      "2 teams per college.",
      "To enter a token, a player must roll a six.",
      "Any kind of cheating will lead to disqualification.",
      "Judges decision will be the final.",
      "Additional rules will be disclosed on the spot"
    ],
    category: "Sports",
    day: 2,
    eventType: "Flagship",
    element: "water",
    groupPrice: "₹200"
  },
  {
    name: "Dance (Group)",
    themedName: "AgniNritya - The Rhythmic Flow",
    price: "₹250",
    description: "Join the group dance competition and groove to the music. Performances should be thematic and synchronized.",
    rules: [
      "A group must consist of a minimum of 2 and maximum of 6 participants.",
      "Participants must bring their own music tracks and props required for the performance.",
      "A backup copy of the music track must be carried on a USB drive or phone in case of technical issues.",
      "Time limit: 4 to 6 minutes. Exceeding the limit may result in deduction of points.",
      "Judging criteria will include: Performance quality, Synchronization, Creativity and originality",
      "Relevance to the theme",
      "Participants must report at least one hour before the event begins.",
      "Latecomers will be penalized.",
      "Use of dangerous or hazardous props (such as fire, sharp objects, glass, etc.) is strictly prohibited."
    ],
    category: "Performing Arts",
    day: 2,
    eventType: "Flagship",
    element: "fire",
    groupPrice: "₹250"
  },
  {
    name: "Singing (Solo)",
    themedName: "Whisper of Air",
    price: "₹50",
    description: "The art of producing musical sounds with the voice, expressing emotion and melody.",
    rules: [
      "Eligibility: Open to college students and external participants.",
      "A warning bell will be rung at the 4th minute of the performance.",
      "Song Selection (Theme – Panchtatva):",
      "Respectful Behaviour: No disruptive behaviour or inappropriate content will be tolerated on stage or backstage.",
      "Background Music: Participants must submit their music tracks a day before the event (via USB or mobile).",
      "Personal instruments are not allowed.",
      "A backup copy of the music track must be carried on a USB drive or phone in case of technical issues.",
      "Judging Criteria: Vocal quality and control, Stage presence Relevance to the theme (Panchtatva)"
    ],
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
    rules: [
      "Instrumentalists must bring their own instruments, including any required jacks or cords for connecting mobiles or instruments.",
      "Instrument Categories: Wind, String, and Percussion.",
      "Participants may perform any raag, chota khyal, bandish, kayda, tukda, or composition of their choice.",
      "Judging will be based solely on performance quality.",
      "Participants must arrive at least one hour before the event. Latecomers will face negative marking.",
      "A warning bell will ring at the 3rd minute of the performance to indicate remaining time."
    ],
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
    rules: [
      "Participants have to make a poster on canva",
      "Premium elements of canvas cannot be used",
      "Participants cannot log in their canvas accounts on the pc",
      "Participants must complete within the timeline provided any submission after the timeline would not be considered",
      "Participants cannot use their phone or internet (google) for reference",
      "Changing the computer tabs while the event has started is prohibited",
      "Use of ready made templates is prohibited",
      "Topic of the poster will be disclosed on the spot"
    ],
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
    rules: [
      "Players will be given a time of 10 mins each for the game.",
      "Warning will be given for one foul.",
      "Two fouls will count as default",
      "Manipulating with the pawn or playing table will be considered as a foul.",
      "Arbiter decision will be final.",
      "Additional rules will be disclosed on the spot."
    ],
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
    rules: [
      "Participants can compete individually.",
      "No pre-made decorative items or newly purchased craft materials (like thermocol designs, ready-made flowers, etc.) allowed.",
      "Use of eco-friendly adhesives and paints is encouraged.",
      "The final product must clearly depict at least one of the Panch Tatva",
      "Participants must give a 2-minute explanation of their creation, highlighting:",
      "1. How it relates to the chosen Tatva",
      "2. Materials used",
      "3. Message or concept behind the creation",
      "No pre-made decorative items or newly purchased craft materials (thermocol designs, ready-made flowers, etc.) allowed.",
      "Use of store-bought materials and pre-made items will be considered as disqualified."
    ],
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
    rules: [
      "Each group will consist of 2 members.",
      "Teams will play together, but only one representative from the team will participate in each mini-game.",
      "Participants must respect game materials (props, water, soil, etc.). Damaging them will lead to disqualification.",
      "Once a game begins, no external help is allowed.",
      "Teams must move in the assigned order of Tatvas. Skipping stations is not permitted.",
      "The decision taken by the event coordinators/judges will be final and binding.",
      "Use of mobile phones will be prohibited.",
      "No damaging or destroying props.",
      "No removing items from the room.",
      "No force or violence."
    ],
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
    rules: [
      "The theme for the storyboard will be revealed on the event day.",
      "Storyboard consists maximum of 12 photos.",
      "Participants must stay on campus throughout the shoot.",
      "Other rules will be revealed on the event day."
    ],
    category: "Creative Challenges",
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
    rules: [
      "Participants must bring their own music tracks and props required for the performance.",
      "A backup copy of the music track must be carried on a USB drive or phone in case of technical issues.",
      "Judging criteria will include: Performance quality, Synchronization, Creativity and theme relevance.",
      "Participants must report at least one hour before the event begins.",
      "Latecomers will be penalized.",
      "Use of dangerous or hazardous props (such as fire, sharp objects, glass, etc.) is strictly prohibited."
    ],
    category: "Performing Arts",
    day: 2,
    eventType: "Large",
    element: "fire",
    soloPrice: "₹50"
  },
  {
    name: "Tote Bag Painting",
    themedName: "Roots to Bag",
    price: "₹100",
    description: "Decorate a tote bag with your artistic vision and painting skills based on a given theme.",
    rules: [
      "Theme will be revealed on the day of the event",
      "Participants should bring their own colours, brushes, and art supplies.",
      "Plain tote bags will be provided by the organizers.",
      "Only fabric/acrylic colours are allowed. Spray paints or oil paints are not permitted.",
      "Altering /cutting tote bag is not allowed."
    ],
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
    rules: [
      "The topic or prompt will be disclosed on the spot.",
      "Participants will be given 45 minutes to complete their piece.",
      "Word limit: 500–700 words. Language: English or Hindi",
      "Entries can be poetic, narrative, or descriptive but must align with the given prompt.",
      "Use of offensive or inappropriate language will lead to disqualification.",
      "Participants must write individually (no group entries).",
      "Submissions must be handwritten (Pages will be provided).",
      "Other rules will be disclosed on the spot."
    ],
    category: "Fine Arts",
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
    rules: [
      "Participants should bring their own rackets.",
      "The shuttlecock will be provided by the college.",
      "Participants must arrive 30 minutes before the start of the competition for check-in.",
      "Judges decision will be final",
      "Additional rules will be disclosed on the spot."
    ],
    category: "Sports",
    day: 1,
    eventType: "Large",
    element: "air",
    soloPrice: "₹100"
  },
  {
    name: "Mono Act",
    themedName: "One Frame Drama",
    price: "₹50",
    description: "A solo performance where an actor portrays various characters or emotions based on a theme.",
    rules: [
      "Participants must bring their own costumes and props.",
      "Judging criteria will include: CreativityExpression and acting skills, Relevance to the theme",
      "Participants must report one hour before the event. Latecomers will be penalized.",
      "Performance slots will be allotted as per registration order.",
      "Any act containing offensive, vulgar, or community-hurting content will lead to immediate disqualification.",
      "Political statements or references are strictly prohibited.",
      "After registration, submission of the script is mandatory."
    ],
    category: "Performing Arts",
    day: 1,
    eventType: "Small",
    element: "fire",
    soloPrice: "₹50"
  },
  {
    name: "Rangoli",
    themedName: "Colours of Heritage",
    price: "₹50",
    description: "Create beautiful and intricate designs on the floor using colored powders, rice, or flowers.",
    rules: [
      "All Rangoli designs must reflect the theme 'Panchatva – The Five Elements.'",
      "Participants may choose to depict one or a combination of the five elements – Earth, Water, Fire, Air, and Space – through their designs.",
      "Participants can compete individually.",
      "A maximum of 2 hours will be given to complete the Rangoli.",
      "Participants must bring their own Rangoli materials (coloured powders, flowers, rice, sand, etc.).",
      "Use of eco-friendly and natural materials (like flowers, organic powders, or rice) is encouraged.",
      "Toxic materials, paints, or adhesives that can damage surfaces are strictly prohibited.",
      "No reference materials such as mobile phones or printed designs are allowed during the competition."
    ],
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
    rules: [
      "Participants must strictly adhere to the theme. Makeup looks should be inspired by the panch tatva",
      "Participants may choose a specific element (tatva) or blend elements from multiple Elements.",
      "Participants must arrive 30 minutes before the start of the competition for check-in and setup.",
      "Participants are encouraged to bring their own materials, all makeup products used must be non-toxic and safe for skin",
      "Use of references (mobiles, photographs, stencils etc) is prohibited",
      "Participant can compete solo they can do the makeup on themselves or they can come with model"
    ],
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
    rules: [
      "The element will be assigned randomly or chosen by the participant.",
      "Time limit: 30 minutes.",
      "Poem length: 8–12 lines (short and impactful).",
      "The poem must be original and written on the spot.",
      "Language: English or Hindi.",
      "Offensive or copied content leads to disqualification.",
      "Other rules will be exlpained on the spot"
    ],
    category: "Fine Arts",
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
    rules: [
      "Only individual entries are allowed.",
      "Only the use of authentic teams is allowed no dream team.",
      "A penalty shootout will be conducted in case of a draw.",
      "Match time will be 6 mins only per game.",
      "Participants should have a strong internet connection.",
      "Participants should arrive at least 30 min before the start of the event.",
      "Use of abusive language will lead to disqualification.",
      "Elimination will be from round 1.",
      "All the other details will be explained before the event."
    ],
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
    rules: [
      "Participants must compete individually",
      "Each reel must be between 30–60 seconds.",
      "Only one reel per participant is allowed.",
      "All content (visuals, music, and footage) must be original.",
      "Plagiarized or copyrighted material will lead to disqualification.",
      "Participants are given creative freedom the best video the way they want.",
      "Reels with the highest views will be the winner.",
      "Steps to Follow:",
      "1. Create piracy free video on given theme and upload it in reel section in Instagram.",
      "2. You have to do a collaboration @ubuntu.pvc and write a suitable caption and post it."
    ],
    category: "Creative Challenges",
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
    rules: [
      "The mehendi design must reflect one or more of the five natural elements – Earth, Water , Air, Space, Fire",
      "Only natural mehendi (henna) is allowed. Use of chemical cones, black mehendi, or additives is strictly prohibited.",
      "Participants must bring their own mehendi cones and other required materials nothing will be provided by us.",
      "Use of references (mobiles, printed designs, or stencils) is not allowed.",
      "Designs must be drawn on the spot within the given time limit.",
      "Participants must bring their own model; however, the model must remain the same throughout the event.",
      "Any inappropriate or offensive design will lead to disqualification.",
      "Participants must report 30 minutes before the event for attendance and setup."
    ],
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
    rules: [
      "No additional abilities or modifications are allowed.",
      "Participants must have a stable internet connection. We are not responsible for any failure to join the event or issues caused by poor connectivity.",
      "All players must report to the classroom at least 15 minutes prior the scheduled start time. Latecomers will be disqualified.",
      "Proper coordination and respectful behaviour with all volunteers is mandatory. Failure to do so will result in disqualification.",
      
    ],
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
    rules: [
      "Each player gets one chance. If they lose, they're out.",
      "Final match i.e. between last two players will be a best of three round which means whichever player between the last Two players wins Two rounds out of Three will be the final winner(1 v 1, mega draft and triple draft battle.",
      "Any use of external apps or manipulation is grounds for disqualification.",
      "Players must respect opponents and officials; abusive language or behaviour can lead to a warning or disqualification.",
      "Players must be ready at least 30 minutes before their match. Late arrivals beyond a certain time limit may be disqualified."
    ],
    category: "Online Games",
    day: 2,
    eventType: "Small",
    element: "fire",
    soloPrice: "₹50"
  },
  {
    name: "1 vs 1 Football",
    themedName: "1 vs 1 Football",
    price: "₹100",
    description: "A fast-paced one-on-one football match focusing on individual skills and strategy.",
    rules: [
      "Match duration: 5 minutes.",
      "If tied, penalty decides the winner.",
      "Coin toss decides initial possession.",
      "Only goals scored inside the attacking half will be counted.",
      "No goalkeeper - players defend their own mini goal.",
      "No sliding tackles; repeated fouls = disqualification.",
      "Ball above knee height is a foul.",
      "Rough play, time-wasting, or disrespect may lead to penalties or removal.",
      "venue : Behind canteen"
    ],
    category: "Sports",
    day: 2,
    eventType: "Small",
    element: "earth",
    soloPrice: "₹100"
  },
  {
    name: "IPL Auction",
    themedName: "IPL Auction",
    price: "₹100",
    description: "A strategic team-building event where participants bid for players to create their dream cricket team.",
    rules: [
      "Each team must have 11 players:",
      "The teams will be judged based on the points ",
      "Further information will be provided on the spot.",
      "Proper coordination and respectful behaviour with all volunteers is mandatory. Failure to do so will result in disqualification.",
      "Other rules will be provided on the spot.",
      "venue : classroom",
      "Duo event",
      "Entry fee : 100"
    ],
    category: "Creative Challenges",
    day: 2,
    eventType: "Flagship",
    element: "fire",
    groupPrice: "₹100"
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