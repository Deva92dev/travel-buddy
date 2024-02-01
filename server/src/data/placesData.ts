export interface PlacesDataTypes {
  name: string;
  imageUrl: string;
  country: string;
  description: DayInfo[];
  cost: number;
  reviews: number;
  numOfDaysToStay: number;
}

interface DayInfo {
  dayHeading: string;
  dayContent: string;
}

const Places: PlacesDataTypes[] = [
  {
    name: 'Cinque terre',
    imageUrl: '',
    country: 'Italy',
    description: [
      {
        dayHeading: `Day 1: Monterosso al Mare`,
        dayContent: `
        "Morning: Arrive in Monterosso"
Check into your accommodation.
Spend the morning relaxing on Monterosso's sandy beach.
"Afternoon: Old Town and Lemon Trees"
Explore the charming Old Town with narrow streets.
Visit the Lemon Trees Park for beautiful views.
"Evening: Seafood Dinner"
Enjoy a seafood dinner at a local restaurant.
Stroll along the waterfront promenade.
        `,
      },
      {
        dayHeading: `Day 2: Vernazza`,
        dayContent: `
        "Morning: Hike to Vernazza"
Take the scenic hike from Monterosso to Vernazza (Sentiero Azzurro).
Capture breathtaking views along the way.
"Afternoon: Vernazza Exploration"
Explore Vernazza's harbor and colorful houses.
Visit the Doria Castle for panoramic views.
"Evening: Sunset Aperitivo"
Enjoy an aperitivo with a view of the sunset.
Try local wines at a wine bar
        `,
      },
      {
        dayHeading: `Day 3: Corniglia`,
        dayContent: `
        "Morning: Boat Ride to Corniglia"
Take a boat ride or train to Corniglia.
Explore Corniglia's charming streets.
"Afternoon: Vineyard Visit"
Hike the scenic path to a local vineyard.
Taste local wines and enjoy the landscape.
"Evening: Dinner in Corniglia"
Have dinner at a local trattoria.
Relax in the peaceful atmosphere.
        `,
      },
      {
        dayHeading: `Day 4: Manarola`,
        dayContent: `
        "Morning: Explore Manarola"
Spend the morning exploring Manarola.
Visit the Church of San Lorenzo.
"Afternoon: Cinque Terre Wine Tasting"
Participate in a Cinque Terre wine tasting tour.
Learn about the region's wines.
"Evening: Sunset Views"
Enjoy the sunset views from Manarola's rocky coastline.
Have dinner at a seaside restaurant
        `,
      },
      {
        dayHeading: `Day 5: Riomaggiore`,
        dayContent: `
        "Morning: Riomaggiore Harbor"
Explore the colorful harbor of Riomaggiore.
Visit the Church of San Giovanni Battista.
"Afternoon: Scenic Walks"
Take a scenic walk along the Via dell'Amore.
Relax by the seaside.
"Evening: Farewell Dinner"
Have a farewell dinner in Riomaggiore.
Reflect on your Cinque Terre adventure.
        `,
      },
    ],
    cost: 25000,
    reviews: 4,
    numOfDaysToStay: 5,
  },
  {
    name: 'Rome',
    imageUrl: '',
    country: 'Italy',
    description: [
      {
        dayHeading: `Day 1: Historical Rome`,
        dayContent: `
        "Morning: Colosseum and Roman Forum"
Start your day early to avoid crowds.
Explore the iconic Colosseum and imagine the gladiator battles.
Walk through the nearby Roman Forum to see ancient ruins.
"Afternoon: Palatine Hill and Capitoline Museums"
Visit Palatine Hill, where Rome was founded, and enjoy panoramic views.
Explore the Capitoline Museums, housing impressive art collections.
"Evening: Trastevere"
Cross the Tiber River to Trastevere.
Wander through narrow streets, enjoy authentic Roman cuisine, and experience the local atmosphere.
        `,
      },
      {
        dayHeading: `Day 2: Vatican City`,
        dayContent: `
        "Morning: Vatican Museums and Sistine Chapel"
Visit the Vatican Museums early to avoid long lines.
Admire the masterpieces, including the Sistine Chapel ceiling.
"Afternoon: St. Peter's Basilica and St. Peter's Square"
Explore St. Peter's Basilica, one of the world's largest churches.
Climb to the top for a stunning view of Rome.
Stroll through St. Peter's Square.
"Evening: Castel Sant'Angelo"
Walk to Castel Sant'Angelo, a historic fortress.
Enjoy the view of the Tiber River and the city from the castle.
        `,
      },
      {
        dayHeading: `Day 3: Ancient Appian Way and Catacombs`,
        dayContent: `
        "Morning: Appian Way and Catacombs"
Take a trip to the Appian Way, one of the oldest Roman roads.
Explore the catacombs along the route.
"Afternoon: Baths of Caracalla"
Visit the Baths of Caracalla, ancient public baths with well-preserved ruins.
"Evening: Aventine Hill and Keyhole of Rome"
Visit Aventine Hill for a quieter atmosphere.
Peer through the keyhole at the Priory of the Knights of Malta for a unique view of St. Peter's Basilica.
        `,
      },
      {
        dayHeading: `Day 4: Modern Rome`,
        dayContent: `
        "Morning: Pantheon and Piazza Navona"
Explore the Pantheon, a well-preserved Roman temple.
Visit Piazza Navona, known for its beautiful fountains and architecture.
"Afternoon: Trevi Fountain and Spanish Steps"
Throw a coin into the Trevi Fountain for good luck.
Climb the Spanish Steps and enjoy the view.
"Evening: Evening Stroll in the City Center"
Take a leisurely walk through the city center.
Enjoy dinner at a traditional Roman trattoria.
        `,
      },
      {
        dayHeading: `Day 5: Gardens and Borghese Gallery`,
        dayContent: `
        "Morning: Villa Borghese Gardens"
Explore the lush Villa Borghese Gardens.
Rent a rowboat at the lake for a relaxing experience.
"Afternoon: Borghese Gallery"
Visit the Borghese Gallery to see an impressive art collection.
Admire sculptures by Bernini and paintings by Caravaggio.
"Evening: Piazza del Popolo"
Spend your final evening at Piazza del Popolo.
Enjoy the vibrant atmosphere and reflect on your time in Rome.
        `,
      },
    ],
    cost: 25000,
    reviews: 4,
    numOfDaysToStay: 5,
  },
  {
    name: 'Florence',
    imageUrl: '',
    country: 'Italy',
    description: [
      {
        dayHeading: `Day 1: Historic Center`,
        dayContent: ` 
        "Morning: Florence Cathedral (Duomo)"
Start your day by visiting the Florence Cathedral, including the iconic Duomo and Baptistery.
Climb to the top of the Duomo for panoramic views.
"Afternoon: Uffizi Gallery"
Explore the Uffizi Gallery, home to a vast collection of Renaissance art.
Admire works by Michelangelo, Leonardo da Vinci, Botticelli, and more.
"Evening: Ponte Vecchio"
Walk to the Ponte Vecchio, a historic bridge over the Arno River.
Enjoy the sunset and explore the shops on the bridge.
        `,
      },
      {
        dayHeading: `Day 2: Florence's Artistic Treasures`,
        dayContent: ` 
        "Morning: Accademia Gallery"
Visit the Accademia Gallery to see Michelangelo's "David."
Explore other sculptures and artworks in the gallery.
"Afternoon: Pitti Palace and Boboli Gardens"
Visit the Pitti Palace and its stunning Renaissance art collections.
Stroll through the beautiful Boboli Gardens behind the palace.
"Evening: Oltrarno District"
Explore the Oltrarno district for a more local and authentic experience.
Have dinner at a traditional trattoria.
        `,
      },
      {
        dayHeading: `Day 3: Florence's Museums and Churches`,
        dayContent: ` 
        "Morning: Bargello Museum and Santa Croce"
Visit the Bargello Museum, which houses sculptures and decorative arts.
Explore the Basilica of Santa Croce, the final resting place of many notable Italians.
"Afternoon: San Lorenzo Market and Medici Chapels"
Explore the San Lorenzo Market for local goods and street food.
Visit the Medici Chapels to see impressive sculptures.
"Evening: Florence by Night"
Take a leisurely evening stroll along the Arno River.
Enjoy gelato at one of the local gelaterias.
        `,
      },
      {
        dayHeading: `Day 4: Day Trip to Tuscany`,
        dayContent: ` 
        "Morning: Chianti Region"
Take a day trip to the Chianti region, known for its vineyards and rolling hills.
Visit a local winery for wine tasting and scenic views.
"Afternoon: Siena"
Explore the historic city of Siena, known for its medieval streets and Piazza del Campo.
Visit the Siena Cathedral.
"Evening: Return to Florence"
Return to Florence in the evening and have dinner at a Florentine restaurant.
        `,
      },
      {
        dayHeading: `Day 5: Relaxation and Exploration`,
        dayContent: ` 
        "Morning: Boboli Gardens or Piazzale Michelangelo"
Spend a relaxing morning in either the Boboli Gardens or at Piazzale Michelangelo for stunning city views.
"Afternoon: Florence's Hidden Gems"
Explore less crowded gems like the Brancacci Chapel or San Miniato al Monte.
Visit the Palazzo Davanzati for a glimpse into medieval Florence.
"Evening: Farewell Dinner"
Have a farewell dinner at a traditional Florentine restaurant.
Reflect on your time in this beautiful city.
        `,
      },
    ],
    cost: 25000,
    reviews: 4,
    numOfDaysToStay: 5,
  },
  {
    name: 'Venice ',
    imageUrl: '',
    country: 'Italy',
    description: [
      {
        dayHeading: `Day 1: Introduction to Venice`,
        dayContent: `
        "Morning: St. Mark's Square"
Start your visit at St. Mark's Square.
Explore St. Mark's Basilica and the Campanile.
Enjoy a coffee at one of the historic cafes.
"Afternoon: Doge's Palace and Bridge of Sighs"
Visit Doge's Palace, a symbol of Venetian power and history.
Cross the Bridge of Sighs for scenic views.
"Evening: Gondola Ride"
Take a relaxing gondola ride through the canals.
Explore the charming alleyways of Venice.
        `,
      },
      {
        dayHeading: `Day 2: Islands of Venice`,
        dayContent: `
        "Morning: Murano"
Take a boat to Murano, known for its glassblowing traditions.
Visit a glass factory and witness a glassblowing demonstration.
"Afternoon: Burano"
Head to Burano, famous for its colorful houses.
Explore the island and enjoy local seafood.
"Evening: Torcello"
Visit Torcello, an island with historic churches.
Climb the bell tower for panoramic views.
        `,
      },
      {
        dayHeading: `Day 3: Art and Culture`,
        dayContent: `
        "Morning: Gallerie dell'Accademia"
Explore Gallerie dell'Accademia, housing a superb collection of Venetian art.
Admire works by Bellini, Titian, and other Renaissance masters.
"Afternoon: Peggy Guggenheim Collection"
Visit the Peggy Guggenheim Collection for modern art.
Explore the sculpture garden overlooking the Grand Canal.
"Evening: Dinner in Dorsoduro"
Have dinner in the Dorsoduro district, known for its artsy atmosphere.
Walk along the Zattere promenade.
        `,
      },
      {
        dayHeading: `Day 4: Hidden Gems`,
        dayContent: `
        "Morning: Cannaregio"
Explore the Cannaregio district, known for its local vibe.
Visit the Jewish Ghetto, one of the oldest in the world.
"Afternoon: Scuola Grande di San Rocco"
Visit the Scuola Grande di San Rocco for Tintoretto's masterpieces.
Wander through the nearby streets.
"Evening: Rialto Bridge"
Explore the Rialto Bridge area.
Have dinner at a canal-side restaurant
        `,
      },
      {
        dayHeading: `Day 5: Relaxation and Exploration`,
        dayContent: `
        "Morning: Giardini Papadopoli"
Relax in the Giardini Papadopoli, a peaceful garden.
Take a leisurely walk along the canals.
"Afternoon: Lido di Venezia"
Take a vaporetto to Lido di Venezia.
Relax on the beach or explore the historic Grand Hotel Excelsior.
"Evening: Sunset at San Giorgio Maggiore"
Take a boat to San Giorgio Maggiore.
Enjoy the sunset views of Venice from the island.
        `,
      },
    ],
    cost: 25000,
    reviews: 4,
    numOfDaysToStay: 5,
  },
  {
    name: 'The Amalfi Coast',
    imageUrl: '',
    country: 'Italy',
    description: [
      {
        dayHeading: `Day 1: Sorrento`,
        dayContent: `
        "Morning: Explore Sorrento"
Begin your journey in Sorrento.
Stroll through the historic center, visit Piazza Tasso, and admire the views of the Bay of Naples.
"Afternoon: Marina Grande and Museo Correale"
Head to Marina Grande for a relaxing afternoon by the sea.
Visit Museo Correale to explore local art and culture.
"Evening: Dinner in the Old Town"
Enjoy dinner at a traditional Sorrentine restaurant.
Sample local specialties like limoncello and seafood.
        `,
      },
      {
        dayHeading: `Day 2: Positano`,
        dayContent: `
        "Morning: Journey to Positano"
Take a scenic drive or boat ride to Positano.
Explore the charming streets lined with pastel-colored houses.
"Afternoon: Beach Time and Shopping"
Relax on Spiaggia Grande, Positano's main beach.
Shop for local ceramics, fashion, and souvenirs in the boutiques.
"Evening: Sunset Views"
Climb to the Church of Santa Maria Assunta for panoramic sunset views.
Enjoy dinner with a view at a cliffside restaurant.
        `,
      },
      {
        dayHeading: `Day 3: Amalfi`,
        dayContent: `
        "Morning: Visit Amalfi"
Travel to the town of Amalfi.
Explore the historic center, visit the Cathedral of St. Andrew, and wander through the lively Piazza Duomo.
"Afternoon: Paper Museum and Lemon Groves"
Visit the Paper Museum to learn about Amalfi's paper-making history.
Explore the nearby lemon groves and enjoy fresh lemon-themed treats.
"Evening: Dinner with Sea Views"
Have dinner at a seaside restaurant in Amalfi.
Sample local seafood dishes.
        `,
      },
      {
        dayHeading: `Day 4: Ravello`,
        dayContent: `
        "Morning: Ravello Exploration"
Head to Ravello, known for its tranquility and gardens.
Visit Villa Rufolo and Villa Cimbrone for breathtaking views.
"Afternoon: Mediterranean Gardens"
Spend the afternoon exploring Ravello's Mediterranean gardens.
Relax and enjoy the serene atmosphere.
"Evening: Classical Concert in Villa Rufolo"
Check if there are any classical concerts or events in Villa Rufolo.
Attend a performance in this magical setting.
        `,
      },
      {
        dayHeading: `Day 5: Day at Sea`,
        dayContent: `
        "Morning: Full Day Boat Excursion"
Take a full-day boat excursion along the Amalfi Coast.
Explore hidden coves, swim in crystal-clear waters, and enjoy the coastal scenery.
"Afternoon: Lunch in a Secluded Bay"
Stop for a seaside lunch in a quiet bay.
Enjoy fresh seafood and local delicacies on board.
"Evening: Sunset on the Water"
Witness the sunset from the boat as you return to your starting point.
        `,
      },
    ],
    cost: 25000,
    reviews: 4,
    numOfDaysToStay: 5,
  },
  {
    name: 'Pompeii',
    imageUrl: '',
    country: 'Italy',
    description: [
      {
        dayHeading: `Day 1: Pompeii Archaeological Site`,
        dayContent: `
        "Morning: Pompeii Entrance and Forum"
Arrive early to avoid crowds and start at the main entrance.
Explore the Forum, the heart of ancient Pompeii.
"Afternoon: Temples and Public Buildings"
Visit the Temple of Apollo and the Basilica.
Explore the public buildings like the Amphitheatre and the Odeon.
"Evening: Villa dei Misteri"
Spend the late afternoon exploring the well-preserved frescoes in the Villa dei Misteri.
Learn about the mysteries behind the villa's artwork.
        `,
      },
      {
        dayHeading: `Day 2: Houses and Artifacts`,
        dayContent: `
        "Morning: House of the Faun and House of the Vettii"
Explore the House of the Faun, one of Pompeii's largest houses.
Visit the House of the Vettii, known for its preserved frescoes.
"Afternoon: Baths and Brothel"
Visit the Stabian Baths for a glimpse into ancient Roman bathing culture.
Explore the Lupanare, Pompeii's infamous brothel.
"Evening: Street of Tombs"
Stroll along the Street of Tombs just outside the city walls.
Observe the well-preserved funerary monuments.
        `,
      },
      {
        dayHeading: `Day 3: Mount Vesuvius`,
        dayContent: `
        "Morning: Hike to the Summit"
Take a day trip to Mount Vesuvius.
Hike to the summit for panoramic views of the Bay of Naples and Pompeii.
"Afternoon: Winery Visit"
Descend from Vesuvius and visit a local winery.
Taste wines produced from the volcanic soil.
"Evening: Sunset Views"
Return to Pompeii and enjoy dinner with views of the illuminated archaeological site.
        `,
      },
      {
        dayHeading: `Day 4: Herculaneum`,
        dayContent: `
        "Morning: Full Day Excursion to Herculaneum"
Take a day trip to Herculaneum, another well-preserved Roman town.
Explore the Herculaneum Archaeological Site, including the luxurious Villa dei Papiri.
"Afternoon: Virtual Archaeological Museum"
Visit the Virtual Archaeological Museum in Ercolano.
Learn more about the artifacts discovered in Herculaneum.
"Evening: Seafront Dinner"
Return to Pompeii and enjoy a relaxing dinner along the seafront.
        `,
      },
      {
        dayHeading: `Day 5: Naples Archaeological Museum`,
        dayContent: `
        "Morning: Naples Archaeological Museum"
Travel to Naples and visit the Naples National Archaeological Museum.
View artifacts and frescoes from Pompeii and Herculaneum.
"Afternoon: Naples Historic Center"
Explore the historic center of Naples.
Visit landmarks such as the Cathedral of Naples and the Royal Palace.
"Evening: Pizza in Naples"
Conclude your journey with a traditional Neapolitan pizza in the city where pizza originated.
        `,
      },
    ],
    cost: 25000,
    reviews: 4,
    numOfDaysToStay: 5,
  },
  {
    name: 'Matera',
    imageUrl: '',
    country: 'Italy',
    description: [
      {
        dayHeading: `Day 1: Matera's Sassi District`,
        dayContent: `
        "Morning: Sassi Cave Dwellings"
Begin your visit by exploring the Sassi di Matera, the ancient cave dwellings.
Visit Casa Grotta di Vico Solitario for an insight into the traditional cave lifestyle.
"Afternoon: Piazza Vittorio Veneto and Cathedral"
Stroll through Piazza Vittorio Veneto, the main square.
Visit the Matera Cathedral (Cattedrale di Matera) and admire the architecture.
"Evening: Sunset from Belvedere di Murgia Timone"
Head to Belvedere di Murgia Timone for panoramic views.
Enjoy the sunset over Matera's unique skyline.
        `,
      },
      {
        dayHeading: `Day 2: Ancient Ruins and Museums`,
        dayContent: `
        "Morning: Crypt of the Original Sin"
Explore the Crypt of the Original Sin (Cripta del Peccato Originale) with its ancient frescoes.
Learn about the history of the crypt and its restoration.
"Afternoon: National Archaeological Museum Domenico Ridola"
Visit the National Archaeological Museum, Domenico Ridola.
Discover artifacts from the region's history, including prehistoric and Roman periods.
"Evening: Dinner in Cave Restaurants"
Have dinner in one of Matera's cave restaurants, experiencing local cuisine.
        `,
      },
      {
        dayHeading: `Day 3: Murgia National Park`,
        dayContent: `
        "Morning: Full Day Excursion to Murgia National Park"
Explore Murgia National Park, known for its rugged landscapes and ancient cave dwellings.
Hike the trails and visit rock churches such as Madonna delle Tre Porte.
"Afternoon: Visit Rock Churches"
Explore the Rock Churches of San Nicola dei Greci and Santa Lucia alle Malve.
Enjoy the natural beauty and cultural heritage of the park.
"Evening: Matera by Night"
Return to Matera and experience the city by night.
Visit local bars and cafes for an evening in the Sassi.
        `,
      },
      {
        dayHeading: `Day 4: Local Experiences`,
        dayContent: `
        "Morning: Artisan Workshops"
Explore artisan workshops in Matera.
Visit local craftsmen specializing in ceramics, textiles, and other traditional crafts.
"Afternoon: Cooking Class"
Participate in a local cooking class to learn Matera's traditional recipes.
Enjoy a meal prepared with your newfound culinary skills.
"Evening: Musical or Theatrical Performance"
Check if there are any musical or theatrical performances happening in Matera.
Experience local arts and culture.
        `,
      },
      {
        dayHeading: `Day 5: Nearby Towns and Cave Churches`,
        dayContent: `
        "Morning: Day Trip to Nearby Towns"
Take a day trip to nearby towns such as Altamura or Gravina in Puglia.
Explore their historical centers, churches, and local attractions.
"Afternoon: Gravina di Matera"
Visit the town of Gravina in Puglia, known for its ravine and Romanesque architecture.
Explore the Cave Church of San Michele.
"Evening: Farewell Dinner"
Return to Matera for a farewell dinner.
Reflect on your time in this unique and historical city.
        `,
      },
    ],
    cost: 25000,
    reviews: 4,
    numOfDaysToStay: 5,
  },
  {
    name: 'Daintree Forest',
    imageUrl: '',
    country: 'Australia',
    description: [
      {
        dayHeading: `Day 1: Arrival and Mossman Gorge`,
        dayContent: `
        "Morning: Arrive in Port Douglas"
Arrive in Port Douglas, a gateway to the Daintree Rainforest.
Check into your accommodation and get settled.
"Afternoon: Mossman Gorge"
Head to Mossman Gorge for a rainforest walk.
Take the Ngadiku Dreamtime Walk to learn about indigenous culture and the local ecosystem.
"Evening: Sunset at Four Mile Beach"
Relax at Four Mile Beach in Port Douglas.
Enjoy a sunset picnic or dinner at a beachfront restaurant.
        `,
      },
      {
        dayHeading: `Day 2: Daintree Discovery Centre and Cape Tribulation`,
        dayContent: `
        "Morning: Daintree Discovery Centre"
Explore the Daintree Discovery Centre for an informative introduction to the rainforest.
Take the Aerial Walkway for stunning views of the canopy.
"Afternoon: Jungle Surfing Canopy Tour"
Experience the thrill of ziplining with a Jungle Surfing Canopy Tour.
Enjoy an exhilarating journey through the treetops.
"Evening: Dinner in Cape Tribulation"
Head to Cape Tribulation for dinner.
Consider dining at a local restaurant with rainforest views.
        `,
      },
      {
        dayHeading: `Day 3: Daintree River Cruise and Departure`,
        dayContent: `
        "Morning: Daintree River Cruise"
Take a Daintree River cruise to spot crocodiles, birds, and other wildlife.
Learn about the importance of the river ecosystem.
"Afternoon: Cape Kimberley and Cow Bay"
Explore the Cape Kimberley and Cow Bay areas.
Visit the Alexandra Range Lookout for panoramic views of the Daintree Forest meeting the Great Barrier Reef.
"Evening: Departure or Rainforest Walk"
Depending on your departure time, either relax at your accommodation or take a short rainforest walk.
Depart from Port Douglas
        `,
      },
    ],
    cost: 35000,
    reviews: 5,
    numOfDaysToStay: 3,
  },
  {
    name: 'The Great Barrier reef',
    imageUrl: '',
    country: 'Australia',
    description: [
      {
        dayHeading: `Day 1: Arrival and Island Exploration`,
        dayContent: `
        "Morning: Arrive in Cairns"
Arrive in Cairns, a popular gateway to the Great Barrier Reef.
Check into your accommodation and get settled.
"Afternoon: Green Island"
Take a half-day trip to Green Island, a coral cay with vibrant marine life.
Snorkel or take a glass-bottom boat tour to explore the reef.
Relax on the sandy beaches and enjoy the tropical surroundings.
"Evening: Cairns Esplanade"
Return to Cairns in the evening.
Explore the Cairns Esplanade and enjoy dinner at a waterfront restaurant.
        `,
      },
      {
        dayHeading: `Day 2: Outer Reef Adventure`,
        dayContent: `
        "Morning: Full Day Cruise to Outer Reef"
Choose a pontoon or reef platform offering various activities like snorkeling, diving, and underwater observatories.
Spend the day snorkeling or diving to explore the diverse marine life and coral formations.
"Afternoon: Snorkeling and Diving"
Take part in guided snorkel tours or introductory dives if you're a beginner.
Marine Biologist Presentation
Attend a marine biologist presentation on the boat to learn about the reef's ecology and conservation efforts.
"Evening: Sunset Cruise"
Consider a sunset cruise to enjoy the colors of the evening over the Coral Sea.
Return to Cairns for the night
        `,
      },
      {
        dayHeading: `Day 3: Scenic Flight and Reef Town`,
        dayContent: `
        "Morning: Scenic Flight"
Take a scenic helicopter or seaplane flight over the Great Barrier Reef.
Enjoy breathtaking aerial views of the coral formations and turquoise waters.
"Afternoon: Port Douglas"
Travel to Port Douglas, another gateway to the Great Barrier Reef.
Explore the town, its marina, and the scenic Four Mile Beach.
Take an afternoon cruise to Low Isles, a coral cay near Port Douglas.
Snorkel, relax on the beach, or join a guided reef walk with a marine biologist.
"Evening: Macrossan Street"
Explore Macrossan Street in Port Douglas for boutique shopping and dining.
Enjoy a farewell dinner at one of the local seafood restaurants.
        `,
      },
    ],
    cost: 35000,
    reviews: 5,
    numOfDaysToStay: 3,
  },
  {
    name: 'Tasmania',
    imageUrl: '',
    country: 'Australia',
    description: [
      {
        dayHeading: `Day 1: Hobart and Surroundings`,
        dayContent: `
        "Morning: Explore Hobart"
Begin your journey in Hobart, the capital city.
Visit Salamanca Place and explore the vibrant markets (if on a weekend).
Take a stroll around Battery Point, known for its historic houses.
"Afternoon: MONA and Mount Wellington"
Visit the Museum of Old and New Art (MONA), a unique and modern art museum.
Drive or take a bus to the summit of Mount Wellington for panoramic views of Hobart and the surrounding area.
"Evening: Waterfront Dinner"
Enjoy dinner at one of the waterfront restaurants in the historic Sullivan's Cove area.
        `,
      },
      {
        dayHeading: `Day 2: Port Arthur and Tasman Peninsula`,
        dayContent: `
        "Morning: Drive to Port Arthur"
Drive to the Tasman Peninsula.
Explore the historic Port Arthur site, a former penal colony.
"Afternoon: Tasman Arch and Devil's Kitchen"
Visit natural attractions like Tasman Arch and Devil's Kitchen.
Take a walk along the coastal trails for breathtaking views of the cliffs and sea.
"Evening: Wildlife Spotting at Eaglehawk Neck"
Visit Eaglehawk Neck for a chance to spot Tasmanian devils and other wildlife.
Consider taking a night tour for nocturnal wildlife encounters.
        `,
      },
      {
        dayHeading: `Day 3: Cradle Mountain and Wilderness`,
        dayContent: `
        "Morning: Drive to Cradle Mountain"
Drive to Cradle Mountain-Lake St Clair National Park.
Start your day with a walk around Dove Lake, enjoying views of Cradle Mountain.
"Afternoon: Enchanted Walk and Waldheim Chalet"
Take the Enchanted Walk, a short and scenic forest walk.
Visit Waldheim Chalet to learn about the park's history.
"Evening: Stargazing and Wilderness Experience"
If the weather is clear, indulge in some stargazing in the pristine wilderness.
Consider staying in a wilderness lodge for a unique and immersive experience
        `,
      },
    ],
    cost: 35000,
    reviews: 5,
    numOfDaysToStay: 3,
  },
  {
    name: 'Uluru & Kata Tjuta',
    imageUrl: '',
    country: 'Australia',
    description: [
      {
        dayHeading: `Day 1: Arrival and Uluru Sunset`,
        dayContent: `
        "Morning: Arrival in Ayers Rock Resort"
Arrive in Ayers Rock Resort and check into your accommodation.
Get familiar with the surroundings and take in the vastness of the red desert.
"Afternoon: Uluru Cultural Centre"
Visit the Uluru-Kata Tjuta Cultural Centre to gain insights into the local Anangu culture.
Learn about the significance of Uluru and Kata Tjuta to the Indigenous people.
"Evening: Uluru Sunset Viewing"
Head to the designated sunset viewing area for a spectacular view of Uluru as it changes colors with the setting sun.
Enjoy a peaceful evening in the heart of the Outback.
        `,
      },
      {
        dayHeading: `Day 2: Uluru Base Walk and Field of Light`,
        dayContent: `
        "Morning: Uluru Base Walk"
Start your day with a sunrise viewing of Uluru.
Embark on the Uluru Base Walk, a 10-kilometer circuit around the rock. Learn about its geology and cultural significance.
"Afternoon: Maruku Arts Dot Painting Workshop"
Participate in a dot painting workshop with local artists from Maruku Arts.
Create your own artwork and gain insights into Indigenous art techniques.
"Evening: Field of Light"
Experience the mesmerizing Field of Light, an art installation by Bruce Munro.
Wander through a field of illuminated stems that change colors as the night falls.
        `,
      },
      {
        dayHeading: `Day 3: Kata Tjuta and Departure`,
        dayContent: `
        "Morning: Kata Tjuta Sunrise"
Witness the sunrise at Kata Tjuta, a group of large, domed rock formations.
Choose from various viewing platforms for a breathtaking morning panorama.
"Afternoon: Valley of the Winds Walk"
Embark on the Valley of the Winds Walk, a trail that takes you through the domes of Kata Tjuta.
Enjoy the unique landscapes and stunning views.
"Evening: Departure"
Depending on your departure time, spend some relaxing moments reflecting on your experiences.
Depart from Ayers Rock Resort.
        `,
      },
    ],
    cost: 35000,
    reviews: 5,
    numOfDaysToStay: 3,
  },
  {
    name: 'Whiteheaven Beach',
    imageUrl: '',
    country: 'Australia',
    description: [
      {
        dayHeading: `Day 1: Arrival in Airlie Beach`,
        dayContent: `
        "Morning: Arrive in Airlie Beach"
Arrive in Airlie Beach, the gateway to the Whitsunday Islands.
Check into your accommodation and get oriented with the town.
"Afternoon: Airlie Beach Lagoon"
Relax at the Airlie Beach Lagoon, a man-made swimming area with tropical surroundings.
Stroll along the Airlie Beach Main Street for shopping and dining options.
"Evening: Sunset Cruise"
Take a sunset cruise from Airlie Beach to enjoy the stunning views over the Coral Sea.
Consider a dinner cruise for a memorable evening.
        `,
      },
      {
        dayHeading: `Day 2: Full-Day Whitehaven Beach Experience`,
        dayContent: `
        "Morning: Depart for Whitsunday Islands"
Embark on a full-day cruise or sailing trip to the Whitsunday Islands.
Enjoy breakfast on board as you cruise towards Whitehaven Beach.
Arrive at Whitehaven Beach and spend the late morning exploring the beach.
Swim in the clear waters, relax on the pristine silica sand, and take in the breathtaking scenery.
"Afternoon: Hill Inlet Lookout"
Hike to the Hill Inlet Lookout for panoramic views of Whitehaven Beach and the swirling sands.
Capture memorable photos of the unique patterns created by the tide.
"Evening: Return to Airlie Beach"
Return to Airlie Beach in the late afternoon.
Have dinner at one of the local restaurants or cafes.
        `,
      },
      {
        dayHeading: `Day 3: Great Barrier Reef Day Trip`,
        dayContent: `
        "Morning: Great Barrier Reef Excursion"
Embark on a full-day cruise to the Great Barrier Reef from Airlie Beach.
Snorkel or dive to explore the vibrant underwater world.
"Afternoon: Reef Activities"
Participate in guided reef activities such as coral viewing or a semi-submersible tour.
Enjoy a delicious lunch on board.
"Evening: Return to Airlie Beach"
Return to Airlie Beach in the late afternoon.
Relax or explore Airlie Beach for your final evening.
        `,
      },
    ],
    cost: 35000,
    reviews: 5,
    numOfDaysToStay: 3,
  },
  {
    name: 'Copacabana Beach',
    imageUrl: '',
    country: 'Brazil',
    description: [
      {
        dayHeading: `Day 1: Arrival and Beach Relaxation`,
        dayContent: `
        "Morning: Arrive in Rio de Janeiro"
Arrive in Rio de Janeiro and check into your accommodation in the Copacabana area.
Take some time to settle in and enjoy the views from your accommodation.
"Afternoon: Copacabana Beach Relaxation"
Head to Copacabana Beach for an afternoon of relaxation.
Enjoy the sun, swim in the ocean, and take a leisurely stroll along the iconic boardwalk.
"Evening: Sunset at Forte de Copacabana"
Visit Forte de Copacabana for panoramic views of the beach and a beautiful sunset.
Explore the historic fort and its museum.
        `,
      },
      {
        dayHeading: `Day 2: Explore Ipanema and Arpoador`,
        dayContent: `
        "Morning: Ipanema Beach"
Spend the morning exploring Ipanema Beach, located adjacent to Copacabana.
Visit the vibrant Ipanema Market for local crafts and souvenirs.
"Afternoon: Lunch at Garota de Ipanema"
Have lunch at Garota de Ipanema, a historic restaurant with ties to the famous bossa nova song.
Explore the charming streets of Ipanema.
"Evening: Arpoador Sunset"
Head to Arpoador, the rocky promontory between Copacabana and Ipanema.
Watch the sunset over the ocean and experience the nightly applause from locals.
        `,
      },
      {
        dayHeading: `Day 3: Sugarloaf Mountain and Nightlife`,
        dayContent: `
        "Morning: Sugarloaf Mountain"
Take a morning cable car ride to the summit of Sugarloaf Mountain.
Enjoy breathtaking views of Rio de Janeiro, Copacabana, and the surrounding landscapes.
"Afternoon: Beach Time"
Spend the afternoon relaxing on Copacabana Beach.
Try beachside vendors for refreshing coconut water or traditional Brazilian snacks.
"Evening: Copacabana Nightlife"
Explore the vibrant nightlife of Copacabana.
Visit local bars, dance clubs, or attend a live music performance.
        `,
      },
      {
        dayHeading: `Day 4: Christ the Redeemer and Botanical Garden`,
        dayContent: `
        "Morning: Christ the Redeemer"
Take a morning trip to Christ the Redeemer, one of the New Seven Wonders of the World.
Enjoy panoramic views of the city and coastline.
"Afternoon: Botanical Garden"
Visit the Rio de Janeiro Botanical Garden in the afternoon.
Explore the lush greenery, exotic plants, and the Avenue of Royal Palms.
"Evening: Dinner at Copacabana"
Have dinner at a beachfront restaurant in Copacabana.
Enjoy Brazilian cuisine while listening to the sounds of the ocean.
        `,
      },
      {
        dayHeading: `Day 5: Favela Tour and Shopping`,
        dayContent: `
        "Morning: Favela Tour"
Take a guided tour of a favela (shantytown) to learn about the local culture and community initiatives.
Gain a different perspective on Rio's social landscape.
"Afternoon: Copacabana Shopping"
Spend the afternoon shopping along the streets of Copacabana.
Explore local boutiques and pick up souvenirs.
"Evening: Farewell Dinner"
Enjoy a farewell dinner at a beachside restaurant, savoring the last moments in Copacabana.
Reflect on the memories created during your stay.
        `,
      },
    ],
    cost: 65000,
    reviews: 5,
    numOfDaysToStay: 5,
  },
  {
    name: 'Iguazu Falls',
    imageUrl: '',
    country: 'Brazil',
    description: [
      {
        dayHeading: `Day 1: Arrival in Puerto Iguazu`,
        dayContent: `
        "Morning: Arrive in Puerto Iguazu"
Arrive in Puerto Iguazu, the gateway to Iguazu Falls.
Check into your accommodation and take some time to rest.
"Afternoon: Explore Puerto Iguazu"
Explore the town of Puerto Iguazu.
Visit the Three Borders Landmark to see the meeting point of Argentina, Brazil, and Paraguay.
"Evening: Sunset at Hito Tres Fronteras"
Witness the sunset at Hito Tres Fronteras for stunning views over the Iguazu and Paraná rivers.
        `,
      },
      {
        dayHeading: `Day 2: Argentine Side of Iguazu Falls`,
        dayContent: `
        "Morning: Visit Iguazu Falls National Park (Argentina)"
Spend the day exploring the Argentine side of Iguazu Falls.
Take the train to Devil's Throat, one of the most impressive sections of the falls.
"Afternoon: Upper and Lower Circuits"
Explore the Upper Circuit and Lower Circuit trails for different perspectives of the falls.
Enjoy the lush rainforest surroundings and diverse wildlife.
"Evening: Dinner in Puerto Iguazu"
Return to Puerto Iguazu for a relaxing evening.
Have dinner at a local restaurant to savor Argentine cuisine.
        `,
      },
      {
        dayHeading: `Day 3: Brazilian Side of Iguazu Falls`,
        dayContent: `
        "Morning: Cross to Foz do Iguaçu (Brazil)"
Cross the border to Foz do Iguaçu in Brazil.
Visit the Brazilian side of Iguazu Falls for panoramic views.
"Afternoon: Explore the Brazilian Park"
Walk along the panoramic walkways for breathtaking views of the falls.
Visit the Bird Park to see a variety of exotic bird species.
"Evening: Brazilian Cuisine"
Enjoy dinner at a Brazilian restaurant in Foz do Iguaçu.
Sample local dishes and relax after a day of exploration.
        `,
      },
      {
        dayHeading: `Day 4: Adventure Activities and Itaipu Dam`,
        dayContent: `
        "Morning: Adventure Activities"
Choose from adventure activities like a boat ride to the base of the falls or a helicopter tour.
Experience the falls from different angles for an adrenaline rush.
"Afternoon: Itaipu Dam"
Visit the Itaipu Dam, one of the largest hydroelectric dams in the world.
Take a guided tour to learn about its construction and significance.
"Evening: Sunset at Itaipu Dam"
Experience the sunset at the Itaipu Dam.
Consider taking a special sunset tour for a memorable experience.
        `,
      },
      {
        dayHeading: `Day 5: Free Day and Departure`,
        dayContent: `
        "Morning: Free Time"
Spend your last morning in Puerto Iguazu at your leisure.
Explore any additional sites or relax before departure.
"Afternoon: Souvenir Shopping"
Shop for souvenirs and local crafts in Puerto Iguazu.
Pick up some mementos to remember your time at Iguazu Falls.
"Evening: Departure"
Depending on your flight schedule, enjoy a final dinner in Puerto Iguazu.
Depart for your next destination.
        `,
      },
    ],
    cost: 65000,
    reviews: 5,
    numOfDaysToStay: 5,
  },
  {
    name: 'Sugarloaf Mountain',
    imageUrl: '',
    country: 'Brazil',
    description: [
      {
        dayHeading: `Day 1: Arrival in Rio de Janeiro`,
        dayContent: `
        "Morning: Arrive in Rio de Janeiro"
Arrive in Rio de Janeiro and check into your accommodation in the Copacabana or Ipanema areas.
Get acclimated to the surroundings and enjoy a relaxing morning.
"Afternoon: Copacabana Beach"
Spend the afternoon relaxing on Copacabana Beach.
Take a leisurely stroll along the iconic Copacabana boardwalk.
"Evening: Dinner in Ipanema"
Have dinner at a beachside restaurant in Ipanema.
Enjoy Brazilian cuisine while experiencing the vibrant atmosphere of Rio's nightlife.
        `,
      },
      {
        dayHeading: `Day 2: Sugarloaf Sunset Experience`,
        dayContent: `
        "Morning: Explore Ipanema"
Explore the Ipanema neighborhood, its boutiques, and lively streets.
Visit the iconic "Girl from Ipanema" street.
"Afternoon: Sugarloaf Mountain"
Take a cable car ride to the summit of Sugarloaf Mountain.
Enjoy the breathtaking views of Rio de Janeiro and its landmarks.
"Evening: Sunset at Sugarloaf"
Stay at Sugarloaf to witness the sunset over Rio.
Capture the city lights coming to life as the sun sets.
        `,
      },
      {
        dayHeading: `Day 3: Historical Rio and Santa Teresa`,
        dayContent: `
        "Morning: Christ the Redeemer"
Visit Christ the Redeemer, another iconic Rio landmark.
Take the train or hike to the top for panoramic views.
"Afternoon: Lunch in Santa Teresa"
Explore the historic Santa Teresa neighborhood.
Have lunch at one of the charming restaurants in Santa Teresa.
"Evening: Selarón Steps"
Visit the Selarón Steps, a vibrant mosaic staircase connecting Santa Teresa to the neighborhoods below.
Explore the nearby neighborhoods and enjoy a relaxing evening.
        `,
      },
      {
        dayHeading: `Day 4: Beach Day and Botanical Garden`,
        dayContent: `
        "Morning: Botanical Garden"
Visit the Rio de Janeiro Botanical Garden.
Explore the lush greenery, exotic plants, and the Avenue of Royal Palms.
"Afternoon: Beach Day"
Spend the afternoon at the beach, either Copacabana or Ipanema.
Try beachside vendors for refreshing coconut water or traditional Brazilian snacks.
"Evening: Dinner in Leblon"
Have dinner in the upscale neighborhood of Leblon.
Enjoy a sophisticated dining experience in one of the local restaurants.
        `,
      },
      {
        dayHeading: `Day 5: Tijuca National Park and Farewell`,
        dayContent: `
        "Morning: Tijuca National Park"
Explore Tijuca National Park, the largest urban rainforest in the world.
Hike to Pico da Tijuca, the highest peak, or visit the Cascatinha Waterfall.
"Afternoon: Farewell in Rio"
Spend your last afternoon in Rio at leisure.
Reflect on your experiences and pick up any last-minute souvenirs.
"Evening: Farewell Dinner"
Enjoy a farewell dinner in Copacabana or Ipanema.
Savor the flavors of Brazilian cuisine one last time.
        `,
      },
    ],
    cost: 65000,
    reviews: 5,
    numOfDaysToStay: 5,
  },
  {
    name: ' Lake balaton',
    imageUrl: '',
    country: 'Hungary',
    description: [
      {
        dayHeading: `Day 1: Arrival in Siófok`,
        dayContent: `
        "Morning: Arrive in Siófok"
Start your journey by arriving in Siófok, known as the "Capital of Balaton."
Check into your accommodation and take a moment to enjoy the lakeside views.
"Afternoon: Siófok Promenade and Beach"
Explore Siófok's lively promenade along the lake.
Relax on Siófok Beach and take a dip in Lake Balaton.
"Evening: Dinner at a Lakeside Restaurant"
Have dinner at a lakeside restaurant, enjoying Hungarian cuisine.
Stroll along the illuminated promenade in the evening.
        `,
      },
      {
        dayHeading: `Day 2: Tihany and Balatonfüred`,
        dayContent: `
        "Morning: Visit Tihany"
Drive or take a boat to Tihany Peninsula.
Explore the Tihany Abbey and enjoy panoramic views of the lake from the Tihany Echo.
"Afternoon: Balatonfüred"
Head to Balatonfüred, a charming town with a historic lakeside promenade.
Visit the Anna Ballroom and stroll through the Tagore Promenade.
"Evening: Sunset at Tagore Promenade"
Enjoy the sunset over Lake Balaton from Tagore Promenade.
Have dinner at a local restaurant in Balatonfüred.
        `,
      },
      {
        dayHeading: `Day 3: Hévíz and Departure`,
        dayContent: `
        "Morning: Relax at Hévíz Thermal Lake"
Drive to Hévíz and visit the Hévíz Thermal Lake, the largest thermal lake in the world.
Relax in the warm, healing waters surrounded by water lilies.
"Afternoon: Explore Keszthely"
Visit Keszthely, a town with a rich history and the Festetics Palace.
Explore the palace and its gardens.
"Evening: Farewell Dinner"
Have a farewell dinner at a local restaurant in Keszthely.
Reflect on your Lake Balaton experience.
        `,
      },
    ],
    cost: 25000,
    reviews: 4,
    numOfDaysToStay: 3,
  },
  {
    name: 'Budapest',
    imageUrl: '',
    country: 'Hungary',
    description: [
      {
        dayHeading: `Day 1: Buda Castle District and Danube River`,
        dayContent: `
        "Morning: Buda Castle and Matthias Church"
Start your day exploring the Buda Castle District.
Visit Buda Castle and enjoy panoramic views of the city from Fisherman's Bastion.
Explore Matthias Church, known for its Gothic architecture.
"Afternoon: Lunch in Castle District"
Have lunch at a local restaurant in the Castle District.
Explore the charming streets and take in the historical ambiance.
Take the Castle Hill Funicular down to the Danube River.
Stroll along the Danube Promenade and enjoy the view of the iconic Parliament Building.
"Evening: Dinner Cruise on the Danube"
Experience Budapest's landmarks illuminated at night on a dinner cruise along the Danube.
Enjoy a relaxing evening with a delicious dinner.
        `,
      },
      {
        dayHeading: `Day 2: Pest Side and Thermal Baths`,
        dayContent: `
        "Morning: Heroes' Square and City Park"
Visit Heroes' Square, a symbolic square with statues representing Hungarian historical figures.
Explore City Park and visit Vajdahunyad Castle.
"Afternoon: Széchenyi Thermal Bath"
Relax in the famous Széchenyi Thermal Bath in City Park.
Enjoy the thermal pools and the unique architecture of the bath complex.
"Evening: Dinner in the Jewish Quarter"
Head to the Jewish Quarter for dinner.
Explore the vibrant nightlife and trendy ruin pubs in the area.
        `,
      },
      {
        dayHeading: `Day 3: Parliament, Margaret Island, and Gellért Hill`,
        dayContent: `
        "Morning: Hungarian Parliament Building"
Take a guided tour of the Hungarian Parliament Building.
Admire the grand architecture and learn about Hungary's history.
"Afternoon: Margaret Island"
Spend the afternoon on Margaret Island in the middle of the Danube.
Enjoy the gardens, musical fountain, and the relaxing atmosphere.
Hike or take a bus to the top of Gellért Hill.
Visit the Citadella for panoramic views of Budapest.
"Evening: Farewell Dinner in Pest"
Have a farewell dinner at a restaurant in Pest.
Consider enjoying traditional Hungarian cuisine.
        `,
      },
    ],
    cost: 25000,
    reviews: 4,
    numOfDaysToStay: 3,
  },
  {
    name: 'Komodo National Park',
    imageUrl: '',
    country: 'Indonesia',
    description: [
      {
        dayHeading: `Day 1: Arrival and Rinca Island`,
        dayContent: `
        "Morning: Arrival in Labuan Bajo"
Arrive in Labuan Bajo, the gateway to Komodo National Park.
Check into your accommodation and take a moment to relax.
"Afternoon: Boat to Rinca Island"
Take a boat trip to Rinca Island, one of the main islands in Komodo National Park.
Go on a guided trek to spot Komodo dragons in their natural habitat.
Explore the island's diverse flora and fauna.
"Evening: Sunset at Kalong Island"
Cruise to Kalong Island to witness the spectacular sight of thousands of flying foxes (fruit bats) during sunset.
Return to Labuan Bajo for dinner.
        `,
      },
      {
        dayHeading: `Day 2: Komodo Island and Pink Beach`,
        dayContent: `
        "Morning: Komodo Island"
Embark on a boat journey to Komodo Island, the largest island in the national park.
Trek with a guide to observe Komodo dragons and other wildlife.
Visit the Komodo Village to learn about the local community.
"Afternoon: Snorkeling at Pink Beach"
Head to Pink Beach for snorkeling in the clear turquoise waters.
Enjoy the vibrant coral reefs and diverse marine life.
Relax on the unique pink-colored beach.
"Evening: Dinner on the Boat"
Have dinner on the boat while enjoying the tranquil surroundings.
Stargazing on the boat deck can be a memorable experience.
        `,
      },
      {
        dayHeading: `Day 3: Padar Island and Manta Point`,
        dayContent: `
        "Morning: Padar Island"
Visit Padar Island for a hike to the viewpoint, offering panoramic vistas of three different-colored beaches.
Capture stunning photos of the landscapes.
"Afternoon: Manta Point"
Explore Manta Point for the chance to snorkel or dive with majestic manta rays.
Witness these graceful creatures in their natural habitat.
Enjoy additional snorkeling at nearby coral reefs.
"Evening: Return to Labuan Bajo"
Return to Labuan Bajo in the late afternoon.
Spend your last evening exploring Labuan Bajo or relaxing by the waterfront.
        `,
      },
    ],
    cost: 25000,
    reviews: 4,
    numOfDaysToStay: 3,
  },
  {
    name: 'Raja Ampat West Papua',
    imageUrl: '',
    country: 'Indonesia',
    description: [
      {
        dayHeading: `Day 1: Arrival and Fam Islands`,
        dayContent: `
        "Morning: Arrival in Sorong"
Arrive in Sorong, the gateway to Raja Ampat.
Transfer to your accommodation and take some time to rest.
"Afternoon: Boat to Fam Islands"
Board a boat to the picturesque Fam Islands.
Snorkel or dive in the crystal-clear waters, exploring the vibrant coral reefs.
Enjoy the breathtaking scenery and white sandy beaches.
"Evening: Sunset at Fam Islands"
Witness the sunset from a viewpoint on the Fam Islands.
Return to your accommodation for a relaxing evening.
        `,
      },
      {
        dayHeading: `Day 2: Wayag Islands`,
        dayContent: `
        "Morning: Boat to Wayag Islands"
Embark on a boat journey to the iconic Wayag Islands, known for their dramatic karst limestone formations.
Hike to the panoramic viewpoints for unparalleled views of the turquoise lagoons and islands.
"Afternoon: Snorkeling in Wayag"
Snorkel in the vibrant coral gardens surrounding Wayag.
Explore hidden lagoons and underwater caves.
"Evening: Beachside Dinner"
Enjoy a beachside dinner on one of the Wayag Islands.
Relax under the stars and take in the serenity of this remote paradise.
        `,
      },
      {
        dayHeading: `Day 3: Piaynemo and Yeben Islands`,
        dayContent: `
        "Morning: Piaynemo Viewpoint"
Visit Piaynemo, another breathtaking viewpoint in Raja Ampat.
Hike to the top for a panoramic view of the mushroom-shaped islands and vibrant blue waters.
"Afternoon: Yeben Islands"
Explore the Yeben Islands, known for their diverse marine life.
Snorkel or dive in the coral-rich areas and encounter various species of fish and marine creatures.
"Evening: Farewell Sunset"
Enjoy a farewell sunset from a scenic spot in Raja Ampat.
Reflect on your incredible experiences in this natural paradise.
        `,
      },
    ],
    cost: 25000,
    reviews: 4,
    numOfDaysToStay: 3,
  },
  {
    name: 'Gili Islands',
    imageUrl: '',
    country: 'Indonesia',
    description: [
      {
        dayHeading: `Day 1: Arrival and Gili Trawangan`,
        dayContent: `
        "Morning: Arrival in Gili Trawangan"
Arrive on Gili Trawangan, the largest of the three Gili Islands.
Check into your accommodation and drop off your luggage.
"Afternoon: Beach Time"
Spend the afternoon relaxing on the beaches of Gili Trawangan.
Enjoy the white sandy shores and turquoise waters.
"Evening: Sunset at Sunset Point"
Head to Sunset Point for a stunning view of the sunset.
Explore the lively night market and choose from various dining options.
        `,
      },
      {
        dayHeading: `Day 2: Snorkeling and Cycling`,
        dayContent: `
        "Morning: Snorkeling Trip"
Join a morning snorkeling trip around the Gili Islands.
Explore underwater wonders, including coral gardens and vibrant marine life.
"Afternoon: Bike around Gili Trawangan"
Rent a bicycle and explore the car-free island at your own pace.
Visit local shops, beach bars, and cafes.
"Evening: Nightlife in Gili Trawangan"
Experience the vibrant nightlife of Gili Trawangan.
Attend a beach party or relax in one of the beachfront bars
        `,
      },
      {
        dayHeading: `Day 3: Gili Air and Water Activities`,
        dayContent: `
        "Morning: Boat to Gili Air"
Take a boat to Gili Air, a more laid-back island.
Explore the local villages and enjoy the relaxed atmosphere.
"Afternoon: Kayaking or Paddleboarding"
Engage in water activities such as kayaking or paddleboarding.
Relax on the quieter beaches of Gili Air.
"Evening: Dinner by the Beach"
Have dinner at a beachfront restaurant on Gili Air.
Enjoy fresh seafood and the tranquil ambiance.
        `,
      },
    ],
    cost: 25000,
    reviews: 4,
    numOfDaysToStay: 3,
  },
  {
    name: 'Ubud',
    imageUrl: '',
    country: 'Indonesia',
    description: [
      {
        dayHeading: `Day 1: Cultural Exploration`,
        dayContent: `
        "Morning: Campuhan Ridge Walk"
Start your day with a peaceful walk along the Campuhan Ridge.
Enjoy panoramic views of the lush rice terraces and surrounding countryside.
Visit the Ubud Monkey Forest, a sanctuary and temple complex with playful macaques.
Explore the lush forest and admire ancient temple structures.
"Afternoon: Lunch at a Local Warung"
Have lunch at a local warung (traditional eatery) to savor authentic Balinese flavors.
Visit the Tegalalang Rice Terraces, known for their stunning green landscapes.
Take a stroll through the terraces and capture scenic photos.
"Evening: Dinner in Ubud Center"
Head to the central area of Ubud for dinner.
Explore the vibrant streets, art markets, and choose from a variety of restaurants.
        `,
      },
      {
        dayHeading: `Day 2: Arts and Wellness`,
        dayContent: `
        "Morning: Visit Ubud Palace"
Explore Ubud Palace (Puri Saren Agung), known for its traditional Balinese architecture.
Witness traditional dance performances in the adjacent courtyard.
Stroll through the Ubud Art Market for local crafts, textiles, and souvenirs.
Bargain with local artisans for unique items.
"Afternoon: Balinese Cooking Class"
Join a Balinese cooking class to learn the art of traditional Balinese cuisine.
Enjoy the fruits of your labor for lunch.
Pamper yourself with a traditional Balinese spa treatment.
Relax and rejuvenate with a massage in a serene setting.
"Evening: Dinner at a Garden Restaurant"
Have dinner at a garden restaurant surrounded by lush greenery.
Experience the tranquil ambiance of Ubud at night.
        `,
      },
      {
        dayHeading: `Day 3: Nature and Yoga`,
        dayContent: `
        "Morning: Visit Goa Gajah"
Explore Goa Gajah (Elephant Cave), an ancient archaeological site.
Marvel at the stone carvings and bathing pools.
Join a cycling tour through the picturesque Ubud countryside.
Ride through rice paddies, traditional villages, and lush landscapes.
"Afternoon: Yoga Class"
Experience a yoga class in one of Ubud's renowned yoga studios.
Reconnect with your mind and body in a serene environment.
Enjoy a healthy lunch at one of Ubud's health-focused cafes.
Sample fresh juices, salads, and organic dishes.
"Evening: Campuhan Ridge Sunset"
Conclude your trip with a sunset walk along the Campuhan Ridge.
Reflect on your Ubud experience with the sun setting over the lush landscapes.
        `,
      },
    ],
    cost: 25000,
    reviews: 4,
    numOfDaysToStay: 3,
  },
  {
    name: 'Yogyakarta',
    imageUrl: '',
    country: 'Indonesia',
    description: [
      {
        dayHeading: `Day 1: Heritage and Temples`,
        dayContent: `
        "Morning: Sultan's Palace (Kraton)"
Start your day at the Kraton, the Sultan's Palace, to learn about the Javanese royal history and culture.
Explore the palace grounds, including the Taman Sari Water Castle.
Visit Tamansari, the royal garden and bathing complex.
Explore the historical site and its unique architecture.
"Afternoon: Lunch in Malioboro"
Head to Malioboro Street for lunch, known for its vibrant street life and shopping.
Try local specialties at one of the street-side eateries.
Visit Prambanan Temple, a UNESCO World Heritage Site known for its intricate Hindu architecture.
Explore the temples dedicated to Brahma, Vishnu, and Shiva.
"Evening: Ramayana Ballet"
Attend the Ramayana Ballet performance at Prambanan.
Enjoy this traditional Javanese dance drama against the backdrop of the temple.
        `,
      },
      {
        dayHeading: `Day 2: Borobudur and Traditional Arts`,
        dayContent: `
        "Morning: Borobudur Sunrise"
Rise early for a sunrise visit to Borobudur, the largest Buddhist temple in the world.
Witness the stunning sunrise over the temple and surrounding landscapes.
Explore the different levels and galleries of Borobudur.
Learn about the historical and cultural significance of this ancient monument.
"Afternoon: Visit Mendut and Pawon Temples"
Visit Mendut and Pawon, two smaller temples near Borobudur.
Explore the intricacies of these temples and their historical context.
Participate in a traditional batik workshop to create your own batik fabric.
Learn about the artistry and cultural importance of batik.
"Evening: Dinner in Prawirotaman"
Have dinner in the Prawirotaman area, known for its cozy cafes and restaurants.
Explore the vibrant nightlife in this part of Yogyakarta.
        `,
      },
      {
        dayHeading: `Day 3: Arts and Culinary Delights`,
        dayContent: `
        "Morning: Visit Kotagede"
Explore Kotagede, the historical district of Yogyakarta.
Visit the Kotagede Mosque and the Royal Cemetery.
Visit a silver workshop in Kotagede to witness the traditional craftsmanship.
Consider purchasing unique silver jewelry as souvenirs.
"Afternoon: Taman Sari Underground Mosque"
Visit the underground mosque within the Taman Sari complex.
Explore the hidden gem with its unique architectural features.
"Evening: Malioboro Street"
Spend your final evening strolling along Malioboro Street.
Shop for souvenirs, try local snacks, and enjoy the lively atmosphere.
Visit Alun-Alun Kidul, the southern square, in the evening.
Try the unique experience of crossing the "Southern Square Alun-Alun Kidul" in the dark with your eyes closed for good luck.
        `,
      },
    ],
    cost: 25000,
    reviews: 4,
    numOfDaysToStay: 3,
  },
  {
    name: 'Kathmandu',
    imageUrl: '',
    country: 'Nepal',
    description: [
      {
        dayHeading: `Day 1: Heritage and Culture`,
        dayContent: `
        "Morning: Boudhanath Stupa"
Start your day early with a visit to Boudhanath Stupa, one of the largest stupas in Nepal.
Explore the surroundings and join the locals in the morning rituals.
Enjoy a traditional Nepali breakfast in one of the local cafes near Boudhanath.
Visit Pashupatinath Temple, a sacred Hindu temple on the banks of the Bagmati River.
Explore the temple complex and witness the religious ceremonies.
"Afternoon: Lunch"
Have lunch at a local restaurant near Pashupatinath, offering both local and international cuisine.
Head to Kathmandu Durbar Square, a UNESCO World Heritage Site.
Explore the historical architecture, including the Kumari Ghar (Kumari's residence).
"Evening: Thamel"
Spend your evening in Thamel, Kathmandu's bustling neighborhood known for its shops, restaurants, and vibrant nightlife.
Enjoy dinner at a local restaurant.
        `,
      },
      {
        dayHeading: `Day 2: Nature and History`,
        dayContent: `
        "Morning: Swayambhunath (Monkey Temple)"
Begin your day with a visit to Swayambhunath, also known as the Monkey Temple.
Climb the stairs for panoramic views of Kathmandu Valley.
Have breakfast at a café with a view of Swayambhunath.
Consider taking a scenic flight over the Kathmandu Valley to get a bird's eye view of the Himalayas and surrounding landscapes.
"Afternoon: Lunch"
Enjoy lunch in a local restaurant, perhaps in the Patan Durbar Square area.
Explore Patan Durbar Square, another UNESCO World Heritage Site with a rich display of Newari architecture.
Visit the Patan Museum and Hiranya Varna Mahavihar (Golden Temple).
"Evening: Dinner"
Have dinner at a rooftop restaurant in Patan, enjoying the views of the historic city.
        `,
      },
    ],
    cost: 15000,
    reviews: 4,
    numOfDaysToStay: 2,
  },
  {
    name: 'Pokhara',
    imageUrl: '',
    country: 'Nepal',
    description: [
      {
        dayHeading: `Day 1: Lakeside and Mountain Views`,
        dayContent: `
        "Morning: Arrival in Pokhara"
Arrive in Pokhara and check into your hotel.
Head straight to Lakeside, the vibrant area surrounding Phewa Lake.
Take a serene boat ride on Phewa Lake, enjoying the reflection of the Annapurna range.
Visit Bindhyabasini Temple, a sacred Hindu temple with panoramic views of Pokhara.
"Afternoon: Lunch at Lakeside"
Enjoy lunch at one of the lakeside restaurants with a view.
Explore Devil's Fall, a unique waterfall where the Pardi Khola stream vanishes underground.
"Evening: Gupteshwor Cave"
Visit Gupteshwor Cave, located near Devi's Fall, known for its stalactites and stalagmites.
Take a boat across Phewa Lake and hike or drive to the World Peace Pagoda for a spectacular sunset view.
Enjoy dinner at a lakeside restaurant, soaking in the relaxed atmosphere.
        `,
      },
      {
        dayHeading: `Day 2: Adventure and Cultural Exploration`,
        dayContent: `
        "Morning: Early Morning Paragliding"
Experience the thrill of paragliding from Sarangkot for panoramic views of Pokhara and the Himalayas.
Have breakfast at a café in Sarangkot enjoying the mountain scenery.
"Afternoon: International Mountain Museum"
Visit the International Mountain Museum to learn about the culture, history, and fauna of the Himalayas.
Return to Lakeside for lunch at a restaurant of your choice.
"Evening: Phewa Lakeside Stroll"
Take a leisurely stroll along the lakeside, exploring shops and enjoying the views.
Have dinner at a restaurant offering a cultural show, featuring traditional Nepali music and dance.
        `,
      },
    ],
    cost: 15000,
    reviews: 4,
    numOfDaysToStay: 2,
  },
  {
    name: 'Interlaken',
    imageUrl: '',
    country: 'Switzerland',
    description: [
      {
        dayHeading: `Day 1: Arrival and Lakeside Relaxation`,
        dayContent: `
        "Morning: Arrival in Interlaken"
Arrive in Interlaken and check into your hotel.
Take a stroll along the beautiful Höheweg promenade.
"Afternoon: Boat Cruise on Lake Thun"
In the afternoon, enjoy a boat cruise on Lake Thun.
Take in the panoramic views of the surrounding mountains.
"Evening: Dinner at Lakeside Restaurant"
Have dinner at a lakeside restaurant with views of the sunset over Lake Thun.
        `,
      },
      {
        dayHeading: `Day 2: Jungfraujoch Excursion`,
        dayContent: `
        "Morning: Jungfraujoch Railway Excursion"
Take an early morning train to Jungfraujoch, the "Top of Europe."
Explore the Ice Palace and enjoy the panoramic views of the Aletsch Glacier.
"Afternoon: Lunch at Jungfraujoch"
Have lunch at one of the mountain restaurants.
Return to Interlaken in the late afternoon.
Rest and relax at your hotel or explore Interlaken's charming town.
"Evening: Dinner at Swiss Fondue Restaurant"
Experience traditional Swiss fondue for dinner at a local restaurant.
        `,
      },
      {
        dayHeading: `Day 3: Adventure in the Mountains`,
        dayContent: `
        "Morning: Schynige Platte Railway"
Take the historic Schynige Platte Railway for stunning views of the Eiger, Mönch, and Jungfrau mountains.
Explore the hiking trails or visit the Alpine Botanical Garden at Schynige Platte.
"Afternoon: Picnic Lunch or Mountain Restaurant"
Enjoy a picnic lunch or dine at the mountain restaurant.
In the afternoon, try paragliding for a thrilling adventure and panoramic aerial views.
"Evening: Dinner at Traditional Swiss Restaurant"
Have dinner at a traditional Swiss restaurant in Interlaken
        `,
      },
      {
        dayHeading: `Day 4: Adventure and Relaxation`,
        dayContent: `
        "Morning: Harder Kulm"
Take the funicular to Harder Kulm, offering breathtaking views of the Jungfrau region.
Visit the viewpoint and enjoy the mountain air.
"Afternoon: Lunch at Harder Kulm Restaurant"
Have lunch at the restaurant on Harder Kulm.
In the afternoon, take a boat cruise on the turquoise waters of Lake Brienz.
"Evening: Dinner in Interlaken Old Town"
Explore the charming streets of Interlaken Old Town.
Have dinner at a local Swiss or international restaurant.
        `,
      },
    ],
    cost: 35000,
    reviews: 5,
    numOfDaysToStay: 4,
  },
  {
    name: 'Jungfraujoch',
    imageUrl: '',
    country: 'Switzerland',
    description: [
      {
        dayHeading: `Day 1: Arrival in Interlaken`,
        dayContent: `
        "Morning: Arrival in Interlaken"
Arrive in Interlaken and check into your hotel.
Explore the charming town and enjoy the views of the surrounding mountains.
"Afternoon: Leisure Time"
Take a leisurely walk along the Höheweg promenade or explore the lakeside area.
Visit the Interlaken Casino or take a boat cruise on Lake Thun or Lake Brienz.
"Evening: Dinner in Interlaken"
Have dinner at a local Swiss or international restaurant.
Rest and prepare for your Jungfraujoch adventure the next day.
        `,
      },
      {
        dayHeading: `Day 2: Jungfraujoch Excursion`,
        dayContent: `
        "Morning: Jungfraujoch Train Journey"
Early morning, take a train from Interlaken to Jungfraujoch.
Enjoy the scenic journey through picturesque landscapes.
Explore the attractions at Jungfraujoch, including the Sphinx Observatory and Ice Palace.
Take in the panoramic views of the surrounding peaks, including the Eiger, Mönch, and Jungfrau.
"Afternoon: Lunch at Jungfraujoch"
Have lunch at one of the mountain restaurants with stunning views.
Depending on the season, engage in snow activities like skiing or snowboarding or enjoy a short hike.
"Evening: Return to Interlaken"
Return to Interlaken in the evening.
Relax and have dinner at a local restaurant.
        `,
      },
      {
        dayHeading: `Day 3: Schilthorn Adventure`,
        dayContent: `
        "Morning: Schilthorn Cable Car Ride"
Take a cable car to Schilthorn, famous for its panoramic views of the Swiss Alps.
Explore Piz Gloria, the revolving restaurant and observation deck at the top of Schilthorn.
Enjoy the views of iconic peaks, including the Eiger, Mönch, and Jungfrau.
"Afternoon: Thrill Walk or Birg Adventure"
Experience the Thrill Walk or visit Birg for additional adrenaline-pumping activities.
Have lunch at Piz Gloria, taking in the spectacular alpine scenery.
"Evening: Return to Interlaken"
Return to Interlaken in the evening.
Relax, stroll around, and have dinner at a restaurant of your choice.
        `,
      },
      {
        dayHeading: `Day 4: Outdoor Adventures`,
        dayContent: `
        "Morning: Paragliding or Outdoor Activity"
Engage in an outdoor adventure like paragliding, hiking, or biking in the surrounding areas.
Take a boat cruise on Lake Thun, exploring the charming lakeside villages.
"Afternoon: Lunch at Lakeside Restaurant"
Enjoy lunch at a lakeside restaurant with picturesque views.
Explore the old town of Interlaken, known for its historic charm and boutique shops.
"Evening: Farewell Dinner"
Have a farewell dinner at a Swiss or international restaurant.
Reflect on your Jungfraujoch adventure.
        `,
      },
    ],
    cost: 35000,
    reviews: 5,
    numOfDaysToStay: 4,
  },
  {
    name: 'Lake Geneva',
    imageUrl: '',
    country: 'Switzerland',
    description: [
      {
        dayHeading: `Day 1: Geneva City and Lakefront`,
        dayContent: `
        "Morning: Arrival in Geneva"
Arrive in Geneva and check into your hotel.
Start your exploration at Lake Geneva's iconic Jet d'Eau fountain.
Visit Parc des Bastions and the Reformation Wall, an outdoor monument depicting key figures of the Reformation.
"Afternoon: Lunch in Old Town"
Enjoy lunch at a charming café in Geneva's Old Town.
Explore the narrow streets, St. Pierre Cathedral, and Maison Tavel (Switzerland's oldest house).
Visit the United Nations Office at Geneva for a guided tour and insights into international diplomacy.
"Evening: Lake Geneva Cruise"
Take an evening cruise on Lake Geneva for panoramic views of the city and mountains.
Dinner on the boat or lakeside restaurant.
        `,
      },
      {
        dayHeading: `Day 2: Lausanne and Lavaux Vineyards`,
        dayContent: `
        "Morning: Train to Lausanne"
Take a morning train to Lausanne (approximately 35 minutes from Geneva).
Explore the Olympic Museum in Lausanne, dedicated to the history of the Olympic Games.
"Afternoon: Lunch in Ouchy"
Have lunch in Ouchy, Lausanne's lakeside district.
Stroll along the promenade and enjoy the views.
Afternoon visit to the Lavaux region, a UNESCO World Heritage site known for its terraced vineyards.
Wine tasting at a local winery.
"Evening: Return to Geneva"
Return to Geneva in the evening.
Dinner at a Swiss or international restaurant in the city.
        `,
      },
      {
        dayHeading: `Day 3: Montreux and Chillon Castle`,
        dayContent: `
        "Morning: Train to Montreux"
Take a morning train to Montreux (approximately 1 hour from Geneva).
Stroll along the beautiful Montreux lakeside promenade.
Visit the Freddie Mercury statue.
"Afternoon: Chillon Castle"
Explore Chillon Castle, a medieval fortress on the shores of Lake Geneva.
Enjoy the castle's history and scenic surroundings.
Have lunch in Montreux, known for its culinary scene.
"Evening: Optional Jazz Festival"
If visiting during July, attend the Montreux Jazz Festival.
Dinner at a lakeside restaurant.
        `,
      },
      {
        dayHeading: `Day 4: Yvoire and Nyon`,
        dayContent: `
        "Morning: Boat to Yvoire"
Take a boat across Lake Geneva to Yvoire, a medieval village in France.
Explore the charming streets, gardens, and the Jardin des Cinq Sens (Garden of the Five Senses).
"Afternoon: Boat to Nyon"
Return to Switzerland by boat and head to Nyon.
Visit Nyon Castle and the Roman Museum, offering insights into the region's history.
"Evening: Dinner in Nyon"
Have dinner in Nyon at a local restaurant.
Enjoy the ambiance of the lakeside town.
        `,
      },
    ],
    cost: 35000,
    reviews: 5,
    numOfDaysToStay: 4,
  },
  {
    name: 'Lucerne',
    imageUrl: '',
    country: 'Switzerland',
    description: [
      {
        dayHeading: `Day 1: Arrival and Old Town Exploration`,
        dayContent: `
        "Morning: Arrival in Lucerne"
Arrive in Lucerne and check into your hotel.
Start your exploration with a leisurely stroll along the Chapel Bridge and Water Tower.
Explore the iconic Chapel Bridge, the Water Tower, and the picturesque Old Town.
"Afternoon: Lunch in Old Town"
Have lunch at a charming restaurant in Lucerne's Old Town.
Try Swiss specialties like Rösti or cheese fondue.
Visit the Lion Monument, a poignant sculpture carved into a sandstone rock face.
"Evening: Dinner by the Lake"
Enjoy dinner by the lakeside, savoring the views of Lake Lucerne and the surrounding mountains.
        `,
      },
      {
        dayHeading: `Day 2: Mount Pilatus Adventure`,
        dayContent: `
        "Morning: Boat and Cogwheel Railway to Mount Pilatus"
Take a boat from Lucerne to Alpnachstad, then the cogwheel railway to the summit of Mount Pilatus.
Explore the summit, enjoy the panoramic views, and consider hiking some trails.
"Afternoon: Lunch at Mount Pilatus"
Have lunch at one of the mountaintop restaurants.
Descend from Mount Pilatus via the cable car to Kriens.
"Evening: Return to Lucerne"
Return to Lucerne and relax in the Old Town.
Dinner at a Swiss or international restaurant.
        `,
      },
      {
        dayHeading: `Day 3: Lake Lucerne and Rigi`,
        dayContent: `
        "Morning: Steamboat Cruise on Lake Lucerne"
Take a morning steamboat cruise on Lake Lucerne, passing by charming lakeside villages.
Arrive in Vitznau and take the cogwheel train to the summit of Mount Rigi.
"Afternoon: Lunch on Mount Rigi"
Have lunch at a mountaintop restaurant with panoramic views.
Explore the hiking trails or relax and enjoy the scenery.
"Evening: Return to Lucerne"
Descend from Mount Rigi and return to Lucerne.
Enjoy dinner at a lakeside restaurant, soaking in the evening ambiance.
        `,
      },
      {
        dayHeading: `Day 4: Day Trip to Engelberg and Titlis`,
        dayContent: `
        "Morning: Train to Engelberg"
Take a morning train to Engelberg.
Cable Car to Mount Titlis
Ascend to Mount Titlis using the cable car and revolving Rotair gondola.
Explore the summit, visit the Glacier Cave, and walk on the Cliff Walk suspension bridge.
Enjoy lunch with panoramic views.
"Afternoon: Return to Lucerne"
Descend from Mount Titlis and return to Lucerne.
Spend the afternoon shopping for Swiss watches, chocolates, and souvenirs in Lucerne.
"Evening: Farewell Dinner"
Have a farewell dinner at a traditional Swiss restaurant.
Reflect on your memorable time in Lucerne.
        `,
      },
    ],
    cost: 35000,
    reviews: 5,
    numOfDaysToStay: 4,
  },
  {
    name: 'Zermatt',
    imageUrl: '',
    country: 'Switzerland',
    description: [
      {
        dayHeading: `Day 1: Arrival and Village Exploration`,
        dayContent: `
        "Morning: Arrival in Zermatt"
Arrive in Zermatt and check into your hotel.
Enjoy the picturesque car-free village ambiance.
Take the Gornergrat Railway for panoramic views of the surrounding peaks.
"Afternoon: Lunch with a View"
Have lunch at a restaurant with a view of the Matterhorn.
Explore Bahnhofstrasse, Zermatt's main street, for shopping.
Visit the Matterhorn Museum to learn about the history of Zermatt and the iconic Matterhorn.
"Evening: Dinner in the Village"
Enjoy dinner at a Swiss or international restaurant in the village.
Stroll through the charming streets and savor the alpine atmosphere.
        `,
      },
      {
        dayHeading: `Day 2: Klein Matterhorn and Glacier Paradise`,
        dayContent: `
        "Morning: Klein Matterhorn (Matterhorn Glacier Paradise)"
Take the cable car to Klein Matterhorn, also known as the Matterhorn Glacier Paradise.
Explore the ice palace and enjoy breathtaking views of the Alps.
"Afternoon: Lunch at Glacier Paradise"
Have lunch at one of the restaurants at the Glacier Paradise.
Engage in snow activities like skiing or snowboarding.
Take a scenic hike to Schwarzsee, enjoying the alpine scenery.
"Evening: Return to Zermatt"
Return to Zermatt in the evening.
Relax and have dinner at a cozy restaurant.
        `,
      },
      {
        dayHeading: `Day 3: Sunnegga and Hiking`,
        dayContent: `
        "Morning: Sunnegga"
Take the funicular to Sunnegga, a beautiful area with flower-filled meadows.
Explore the Sunnegga Paradise playground.
Embark on a picturesque hike from Sunnegga to Fluhalp.
Enjoy the stunning views of the surrounding peaks.
"Afternoon: Lunch at Fluhalp"
Have lunch at the mountain hut Fluhalp, indulging in Swiss specialties.
Afternoon leisure time for relaxation or exploring more trails.
Consider visiting the Leisee lake for a tranquil experience.
"Evening: Dinner in Zermatt"
Return to Zermatt in the evening.
Enjoy dinner at a local Swiss restaurant.
        `,
      },
      {
        dayHeading: `Day 4: Hiking and Relaxation`,
        dayContent: `
        "Morning: Gourmet Hike"
Join a gourmet hike, combining scenic trails with culinary experiences.
Visit mountain restaurants for local dishes and panoramic views.
"Afternoon: Spa and Wellness"
Spend the afternoon relaxing at a spa or wellness center in Zermatt.
Take in the serene mountain surroundings.
"Evening: Farewell Dinner"
Have a farewell dinner at a fine dining restaurant, savoring Swiss cuisine.
Reflect on your Zermatt adventure.
        `,
      },
    ],
    cost: 35000,
    reviews: 5,
    numOfDaysToStay: 4,
  },
  {
    name: 'Glacier National Park',
    imageUrl: '',
    country: 'America',
    description: [
      {
        dayHeading: `Day 1: Arrival and Lake McDonald`,
        dayContent: `
        "Morning: Arrival in Glacier National Park"
Arrive and check into your accommodation.
If flying, consider arriving at Glacier Park International Airport.
"Afternoon: Lake McDonald"
Spend the afternoon exploring Lake McDonald.
Relax by the lake, take a scenic boat tour, or go for a hike.
"Evening: Dinner at Lake McDonald Lodge"
Have dinner at Lake McDonald Lodge, enjoying views of the lake
        `,
      },
      {
        dayHeading: `Day 2: Going-to-the-Sun Road (West to East)`,
        dayContent: `
        "Morning: Drive Going-to-the-Sun Road (West to East)"
Begin your journey on the iconic Going-to-the-Sun Road.
Stop at the Logan Pass Visitor Center and take a short hike.
"Afternoon: St. Mary Lake"
Explore St. Mary Lake and take a boat tour (if available).
Visit the Rising Sun Motor Inn for stunning views.
"Evening: Dinner in St. Mary"
Have dinner in St. Mary, experiencing local cuisine.
        `,
      },
      {
        dayHeading: `Day 3: Many Glacier Area`,
        dayContent: `
        "Morning: Hike in Many Glacier"
Choose a scenic hike in the Many Glacier area.
Consider trails like Grinnell Glacier or Iceberg Lake.
"Afternoon: Boat Tour on Swiftcurrent Lake and Lake Josephine"
Take a boat tour on Swiftcurrent Lake and Lake Josephine.
Enjoy the views of glaciers and wildlife.
"Evening: Dinner at Many Glacier Hotel"
Have dinner at Many Glacier Hotel, a historic and picturesque lodge.
        `,
      },
      {
        dayHeading: `Day 4: Two Medicine Area`,
        dayContent: `
        "Morning: Drive to Two Medicine"
Head to the Two Medicine area, known for its serene lakes and trails.
Consider a boat tour on Two Medicine Lake.
"Afternoon: Scenic Hike"
Hike one of the scenic trails in the Two Medicine area.
Grizzly Falls and Running Eagle Falls are notable spots.
"Evening: Dinner in East Glacier Park Village"
Enjoy dinner in East Glacier Park Village.
        `,
      },
      {
        dayHeading: `Day 5: Explore the Southern Area`,
        dayContent: `
        "Morning: Hike in the Southern Area"
Choose a hike in the southern part of the park, like Avalanche Lake.
Enjoy the pristine wilderness and diverse flora.
"Afternoon: Red Bus Tour"
Take a historic Red Bus Tour for a narrated journey through the park's highlights.
"Evening: Dinner in Apgar Village"
Have dinner in Apgar Village, celebrating your adventures.
        `,
      },
    ],
    cost: 75000,
    reviews: 5,
    numOfDaysToStay: 5,
  },
  {
    name: 'Grand Canyon National Park',
    imageUrl: '',
    country: 'America',
    description: [
      {
        dayHeading: `Day 1: South Rim Arrival and Orientation`,
        dayContent: `
        "Morning: Arrival at Grand Canyon Village"
Arrive at Grand Canyon Village and check into your accommodation.
Begin your exploration at the Visitor Center for an orientation.
"Afternoon: Mather Point and Rim Trail"
Visit Mather Point for your first breathtaking view of the Grand Canyon.
Take a leisurely walk along the Rim Trail.
"Evening: Sunset at Hopi Point"
Experience a mesmerizing sunset at Hopi Point.
Attend a ranger-led program if available.
        `,
      },
      {
        dayHeading: `Day 2: Bright Angel Trail Hike`,
        dayContent: `
        "Morning: Bright Angel Trailhead"
Start your day early with a hike along the Bright Angel Trail.
Consider hiking to Indian Garden or Plateau Point for stunning canyon views.
"Afternoon: Lunch at Phantom Ranch"
Have lunch at Phantom Ranch (if hiking to the bottom).
Explore the area around the Colorado River.
"Evening: Return to the Rim"
Hike back to the rim in the late afternoon.
Relax and have dinner in Grand Canyon Village.
        `,
      },
      {
        dayHeading: `Day 3: Desert View Drive`,
        dayContent: `
        "Morning: Desert View Watchtower"
Drive along Desert View Drive, stopping at various viewpoints.
Explore the historic Desert View Watchtower.
"Afternoon: Lunch at Desert View"
Have a picnic lunch at Desert View with panoramic canyon views.
Visit the Tusayan Ruins and Museum.
"Evening: Stargazing Program"
Attend a ranger-led stargazing program.
Experience the dark skies and celestial wonders.
        `,
      },
      {
        dayHeading: `Day 4: Grand Canyon Railway and Williams`,
        dayContent: `
        "Morning: Grand Canyon Railway"
Take the historic Grand Canyon Railway from Williams to the South Rim.
Enjoy the scenic ride through the pine forests.
"Afternoon: Williams Exploration"
Explore the charming town of Williams, known for its Route 66 history.
Visit the historic Grand Canyon Brewing Company.
"Evening: Return to Grand Canyon Village"
Return to Grand Canyon Village in the evening.
Have dinner at one of the local restaurants.
        `,
      },
      {
        dayHeading: `Day 5: Grand Canyon Helicopter Tour and Departure`,
        dayContent: `
        "Morning: Helicopter Tour"
Experience a thrilling helicopter tour over the Grand Canyon.
Capture aerial views of the canyon's vastness.
"Afternoon: Final Exploration"
Spend your last afternoon exploring any missed viewpoints or trails.
Reflect on your Grand Canyon adventure.
"Evening: Departure"
Depart from Grand Canyon Village or nearby airports.
Carry with you memories of the Grand Canyon's awe-inspiring beauty.
        `,
      },
    ],
    cost: 75000,
    reviews: 5,
    numOfDaysToStay: 5,
  },
  {
    name: 'Las Vegas',
    imageUrl: '',
    country: 'America',
    description: [
      {
        dayHeading: `Day 1: Arrival and Strip Exploration`,
        dayContent: `
        "Morning: Check into your Hotel"
Arrive in Las Vegas and check into your chosen hotel.
Consider staying on the iconic Las Vegas Strip.
"Afternoon : Explore the Strip"
Take a leisurely walk along the Strip, marveling at the themed hotels and attractions.
Visit iconic landmarks like the Bellagio Fountains and The Mirage volcano.
"Evening: Dinner and Entertainment"
Enjoy dinner at one of the many restaurants on the Strip.
Attend a live show or performance.
        `,
      },
      {
        dayHeading: `Day 2: Downtown Las Vegas and Fremont Street`,
        dayContent: `
        "Morning: Visit the Neon Museum"
Explore the Neon Museum, home to iconic Las Vegas signs.
Learn about the city's history through its neon lights.
"Afternoon: Lunch at Container Park"
Have lunch at Container Park in Downtown Las Vegas.
Explore the unique shops and art installations.
Experience the Fremont Street canopy light show.
Try your luck at one of the historic casinos.
"Evening: Dinner and Live Music"
Choose a restaurant in the Fremont East District for dinner.
Enjoy live music or entertainment in the area.
        `,
      },
      {
        dayHeading: `Day 3: Red Rock Canyon`,
        dayContent: `
        "Morning: Drive to Red Rock Canyon"
Head to Red Rock Canyon for a morning of hiking or scenic drives.
Explore the Visitor Center and learn about the area's geology.
"Afternoon: Picnic at Red Rock"
Enjoy a picnic lunch amidst the stunning red rock formations.
Continue exploring the scenic loop.
"Evening: Dinner and Relaxation"
Return to the Strip for dinner at a restaurant of your choice.
Relax or attend a late-night show.
        `,
      },
      {
        dayHeading: `Day 4: Arts and Culture Day`,
        dayContent: `
        "Morning: Visit The Arts District"
Explore the Las Vegas Arts District.
Visit galleries, studios, and unique boutiques.
"Afternoon: Lunch at a Cultural Venue"
Have lunch at a cultural venue like The Smith Center for the Performing Arts.
Enjoy a matinee performance if available.
"Evening: Dinner and Nightlife"
Experience the city's diverse culinary scene for dinner.
Explore the nightlife in areas like the LINQ Promenade or the High Roller.
        `,
      },
      {
        dayHeading: `Day 5: Spa Day and Farewell`,
        dayContent: `
        "Morning: Relaxation Day"
Spend the morning at a spa for relaxation and rejuvenation.
"Afternoon: Shopping and Souvenirs"
Explore shopping centers like The Forum Shops at Caesars or Miracle Mile Shops.
Purchase souvenirs to remember your Las Vegas trip.
"Evening: Farewell Dinner"
Have a farewell dinner at a top-rated restaurant.
Reflect on your week in Las Vegas and enjoy your final evening.
        `,
      },
    ],
    cost: 75000,
    reviews: 5,
    numOfDaysToStay: 5,
  },
  {
    name: 'Maui ',
    imageUrl: '',
    country: 'America',
    description: [
      {
        dayHeading: `Day 1: Arrival and Relaxation`,
        dayContent: `
        "Morning: Arrival in Maui"
Arrive at Kahului Airport and check into your accommodation.
"Afternoon: Explore Local Beaches"
Spend the afternoon relaxing on a nearby beach.
Consider beaches like Ka'anapali Beach or Wailea Beach.
"Evening: Dinner with Ocean Views"
Enjoy dinner at a restaurant with ocean views.
Experience your first Hawaiian sunset.
        `,
      },
      {
        dayHeading: `Day 2: Haleakalā National Park`,
        dayContent: `
        "Morning: Sunrise at Haleakalā"
Wake up early for a sunrise visit to Haleakalā National Park.
Explore the volcanic landscapes and the unique summit area.
"Afternoon: Explore Upcountry Maui"
Visit Upcountry Maui for its farms, lavender fields, and charming towns.
Have lunch at a local eatery.
"Evening: Stargazing at Haleakalā"
Return to Haleakalā for a stargazing experience (if available).
Learn about the night sky with park rangers.
        `,
      },
      {
        dayHeading: `Day 3: Lahaina and Ka'anapali`,
        dayContent: `
        "Morning: Explore Lahaina"
Spend the morning exploring Lahaina Town.
Visit historic sites like the Lahaina Banyan Court.
"Afternoon: Lunch at Ka'anapali Beach"
Head to Ka'anapali Beach for lunch and water activities.
Relax on the beach or try snorkeling.
"Evening: Sunset Dinner Cruise"
Take a sunset dinner cruise along the coast.
Enjoy a delicious meal with ocean views.
        `,
      },
      {
        dayHeading: `Day 4: Snorkeling and Beach Day`,
        dayContent: `
        "Morning: Molokini Crater Snorkeling"
Take a boat trip to Molokini Crater for snorkeling.
Explore the vibrant underwater world.
"Afternoon: Beach Relaxation"
Spend the afternoon relaxing at a beautiful beach.
Consider Big Beach or Makena Beach.
"Evening: Dinner in Kihei"
Have dinner in Kihei, known for its diverse dining options.
Enjoy local flavors.
        `,
      },
      {
        dayHeading: `Day 5: Iao Valley State Park and Surfing`,
        dayContent: `
        "Morning: Iao Valley State Park"
Explore Iao Valley State Park and its iconic Iao Needle.
Take a short hike through the lush valley.
"Afternoon: Learn to Surf"
Try your hand at surfing with a lesson at a local surf school.
Enjoy the waves and the beautiful coastline.
"Evening: Dinner in Paia"
Head to the town of Paia for dinner.
Explore the vibrant artsy atmosphere.
        `,
      },
      {
        dayHeading: `Day 6: Snorkel at Turtle Town and Farewell`,
        dayContent: `
        "Morning: Snorkel at Turtle Town"
Take a boat trip to Turtle Town for snorkeling.
Encounter sea turtles and colorful marine life.
"Afternoon: Final Beach Day"
Spend your final afternoon at a favorite beach.
Soak in the sun and enjoy the ocean.
"Evening: Farewell Dinner"
Have a farewell dinner at a beachfront restaurant.
Reflect on your week in Maui.
        `,
      },
    ],
    cost: 75000,
    reviews: 5,
    numOfDaysToStay: 6,
  },
  {
    name: 'New Orlans',
    imageUrl: '',
    country: 'America',
    description: [
      {
        dayHeading: `Day 1: French Quarter Introduction`,
        dayContent: `
        "Morning: Arrival in New Orleans"
Arrive at Louis Armstrong New Orleans International Airport and check into your accommodation, preferably in the French Quarter.
"Afternoon: French Quarter Exploration"
Spend the afternoon strolling through the iconic French Quarter.
Visit Jackson Square, Royal Street, and Bourbon Street.
"Evening: Dinner and Jazz Music"
Have dinner at a local Creole or Cajun restaurant.
Enjoy live jazz music at one of the many renowned jazz clubs in the French Quarter.
        `,
      },
      {
        dayHeading: `Day 2: Garden District and Uptown`,
        dayContent: `
        "Morning: Breakfast at Café du Monde"
Start your day with breakfast at Café du Monde for beignets and coffee.
Take the St. Charles Avenue streetcar to the Garden District.
Explore the historic mansions and oak-lined streets.
"Afternoon: Lunch on Magazine Street"
Have lunch at one of the charming eateries on Magazine Street.
Explore the boutiques and galleries.
Visit Audubon Park for a leisurely stroll and maybe a picnic.
"Evening: Dinner at Commander's Palace"
Enjoy dinner at the iconic Commander's Palace in the Garden District.
        `,
      },
      {
        dayHeading: `Day 3: Historic and Cultural Sites`,
        dayContent: `
        "Morning: National WWII Museum"
Spend the morning at the National WWII Museum.
Explore exhibits highlighting the war's impact on New Orleans.
"Afternoon: Lunch in Warehouse District"
Have lunch in the Warehouse District, known for its artsy vibe and trendy restaurants.
Visit the Ogden Museum of Southern Art to appreciate Southern masterpieces.
"Evening: Dinner and Live Music"
Enjoy dinner at a restaurant in the Arts/Warehouse District.
Attend a live music performance at a nearby venue.
        `,
      },
      {
        dayHeading: `Day 4: Swamp Tour and Culinary Delights`,
        dayContent: `
        "Morning: Swamp Tour"
Take a morning swamp tour to explore Louisiana's bayous and encounter wildlife.
"Afternoon: Lunch in the French Quarter"
Return to the French Quarter for lunch at a classic Creole restaurant.
Experience the unique jazz at Preservation Hall in the afternoon.
"Evening: Dinner at French Market"
Have dinner at stalls in the lively French Market.
Enjoy the vibrant atmosphere and street performers.
        `,
      },
      {
        dayHeading: `Day 5: Music and Entertainment`,
        dayContent: `
        "Morning: Breakfast at Stanley"
Start your day with breakfast at Stanley in Jackson Square.
Explore Frenchmen Street, known for its live music venues and vibrant nightlife.
"Afternoon: Lunch at Coop's Place"
Have lunch at Coop's Place for classic New Orleans cuisine.
Walk through the Treme neighborhood, rich in African American and Creole culture.
"Evening: Dinner at Restaurant R'evolution"
Enjoy a fine dining experience at Restaurant R'evolution in the French Quarter.
        `,
      },
      {
        dayHeading: `Day 6: Riverfront and Departure`,
        dayContent: `
        "Morning: Café Beignet at Riverfront"
Have breakfast at Café Beignet while overlooking the Mississippi River.
Take a morning cruise on the Steamboat Natchez for riverfront views.
"Afternoon: Lunch at Jax Brewery"
Have lunch at Jax Brewery on the riverfront.
Explore the shops and art galleries in the area.
"Evening: Farewell Dinner"
Enjoy your farewell dinner at a waterfront restaurant.
Reflect on your week in the vibrant city of New Orleans.
        `,
      },
    ],
    cost: 75000,
    reviews: 5,
    numOfDaysToStay: 6,
  },
  {
    name: 'New York City',
    imageUrl: '',
    country: 'America',
    description: [
      {
        dayHeading: `Day 1: Arrival and Lower Manhattan`,
        dayContent: `
        "Afternoon: Arrival in NYC"
Arrive at your accommodation and settle in.
Choose a hotel in Lower Manhattan for easy access to downtown attractions.
"Afternoon: Stroll in Battery Park"
Take a leisurely stroll in Battery Park and enjoy views of the Statue of Liberty.
"Evening: Dinner in Tribeca"
Have dinner in the trendy Tribeca neighborhood.
Explore the cobblestone streets and boutique shops.
        `,
      },
      {
        dayHeading: `Day 2: Financial District and Brooklyn`,
        dayContent: `
        "Morning: Visit One World Observatory"
Start your day with a visit to One World Observatory at One World Trade Center.
Explore the 9/11 Memorial and Museum.
"Afternoon: Lunch in Chinatown"
Have lunch in Chinatown, known for its diverse culinary offerings.
Explore the vibrant streets and markets.
Walk across the Brooklyn Bridge for panoramic views of the city skyline.
"Evening: Dinner in DUMBO"
Enjoy dinner in DUMBO (Down Under the Manhattan Bridge Overpass).
Take in the stunning views of Manhattan and the bridges.
        `,
      },
      {
        dayHeading: `Day 3: Midtown Manhattan`,
        dayContent: `
        "Morning: Explore Central Park"
Spend the morning exploring Central Park.
Visit iconic spots like Bethesda Terrace and Bow Bridge.
"Afternoon: Lunch at The Plaza Hotel"
Have lunch at The Plaza Hotel, an iconic New York landmark.
Explore Museum Mile along Fifth Avenue.
Visit the Metropolitan Museum of Art or the Guggenheim Museum.
"Evening: Times Square and Broadway Show"
Experience the vibrant energy of Times Square.
Attend a Broadway show in the Theater District.
        `,
      },
      {
        dayHeading: `Day 4: Uptown Manhattan`,
        dayContent: `
        "Morning: Harlem Exploration"
Spend the morning exploring Harlem.
Visit the Apollo Theater and stroll along historic streets.
"Afternoon: Lunch in Harlem"
Have lunch at a local soul food restaurant in Harlem.
Experience the rich cultural heritage of the neighborhood.
Explore the Columbia University campus and Morningside Heights.
Visit Riverside Church and Grant's Tomb.
"Evening: Dinner on the Upper West Side"
Enjoy dinner at a restaurant on the Upper West Side.
Explore the neighborhood's cultural institutions.
        `,
      },
      {
        dayHeading: `Day 5: Greenwich Village and Chelsea`,
        dayContent: `
        "Morning: Washington Square Park"
Start your day in Washington Square Park.
Admire the Washington Arch and the vibrant atmosphere.
"Afternoon: Lunch in Greenwich Village"
Have lunch in Greenwich Village, known for its eclectic charm.
Explore the streets and historic sites like Stonewall Inn.
Walk the High Line Park, an elevated urban park in Chelsea.
Enjoy art installations and city views.
"Evening: Dinner in Meatpacking District"
Have dinner in the trendy Meatpacking District.
Experience the nightlife in this vibrant area.
        `,
      },
      {
        dayHeading: `Day 6: Queens and Flushing`,
        dayContent: `
        "Morning: Queens Botanical Garden"
Start your day with a visit to Queens Botanical Garden.
Explore the diverse plant collections.
"Afternoon: Lunch in Flushing"
Have lunch in Flushing, a diverse neighborhood with a thriving food scene.
Explore Flushing Meadows-Corona Park.
Visit The Queens Museum in Flushing Meadows-Corona Park.
Explore exhibits, including the Panorama of the City of New York.
"Evening: Dinner in Astoria"
Have dinner in Astoria, known for its Greek cuisine.
Explore the neighborhood's cultural attractions.
        `,
      },
      {
        dayHeading: `Day 7: Staten Island and Departure`,
        dayContent: `
        "Morning: Staten Island Ferry"
Take the Staten Island Ferry for stunning views of the Statue of Liberty and the Manhattan skyline.
"Afternoon: Staten Island Exploration"
Spend the afternoon exploring Staten Island.
Visit Snug Harbor Cultural Center and Botanical Garden.
"Evening: Farewell Dinner"
Have a farewell dinner at a restaurant of your choice.
Reflect on your week in the city that never sleeps.
        `,
      },
    ],
    cost: 75000,
    reviews: 5,
    numOfDaysToStay: 7,
  },
  {
    name: 'San Fransisco',
    imageUrl: '',
    country: 'America',
    description: [
      {
        dayHeading: `Day 1: Arrival and Downtown San Francisco`,
        dayContent: `
        "Morning : Arrival in San Francisco"
Arrive at San Francisco International Airport and check into your accommodation.
"Afternoon : Union Square and Shopping"
Spend the afternoon exploring Union Square and nearby shopping districts.
Enjoy a leisurely walk around the area.
"Evening: Dinner in Chinatown"
Have dinner in San Francisco's historic Chinatown.
Explore the vibrant streets and shops.
        `,
      },
      {
        dayHeading: `Day 2: Alcatraz Island and Fisherman's Wharf`,
        dayContent: `
        "Morning: Alcatraz Island Tour" 
Take a morning ferry to Alcatraz Island.
Explore the infamous prison and enjoy breathtaking views of the city.
"Afternoon: Lunch at Fisherman's Wharf"
Have lunch at Fisherman's Wharf, a bustling waterfront area.
Explore Pier 39 and its sea lions.
Visit Ghirardelli Square for some chocolate indulgence.
Enjoy the scenic views of the bay.
"Evening: Dinner at Boudin Bakery"
Have dinner at Boudin Bakery and try their famous sourdough bread.
Walk along the waterfront and enjoy the evening atmosphere.
        `,
      },
      {
        dayHeading: `Day 3: Golden Gate Park and Haight-Ashbury`,
        dayContent: `
        "Morning: Explore Golden Gate Park"
Spend the morning exploring Golden Gate Park.
Visit the California Academy of Sciences, Japanese Tea Garden, and Stow Lake.
"Afternoon: Lunch in Inner Sunset"
Have lunch in the Inner Sunset neighborhood.
Explore the local shops and cafes.
Visit the iconic Haight-Ashbury district, known for its counterculture history.
Explore vintage shops and street art.
"Evening: Dinner in NOPA"
Have dinner in the NOPA (North of the Panhandle) neighborhood.
Experience the local culinary scene.
        `,
      },
      {
        dayHeading: `Day 4: Twin Peaks and Castro District`,
        dayContent: `
        "Morning: Twin Peaks Viewpoint"
Start your day with a visit to Twin Peaks for panoramic views of the city.
Enjoy the morning breeze.
"Afternoon: Lunch in Castro"
Have lunch in the vibrant Castro District.
Explore the LGBTQ+ history and culture.
Visit Mission Dolores Park for a relaxing afternoon.
Enjoy the city skyline and diverse community.
"Evening: Dinner in Mission District"
Have dinner in the Mission District, known for its culinary diversity.
Explore the neighborhood's vibrant street art.
        `,
      },
      {
        dayHeading: `Day 5: Embarcadero and Farewell`,
        dayContent: `
        "Morning: Embarcadero and Ferry Building"
Spend the morning along the Embarcadero.
Explore the Ferry Building Marketplace for artisanal goods.
"Afternoon: Bay Cruise"
Take a bay cruise for stunning views of the Golden Gate Bridge and Alcatraz.
Enjoy the sea breeze.
Have lunch at one of the waterfront restaurants.
Enjoy your last meal with a view.
"Evening: Farewell Dinner in Nob Hill"
Have a farewell dinner in Nob Hill.
Reflect on your week in San Francisco.
        `,
      },
    ],
    cost: 75000,
    reviews: 5,
    numOfDaysToStay: 5,
  },
  {
    name: 'Washington D.C.',
    imageUrl: '',
    country: 'America',
    description: [
      {
        dayHeading: `Day 1: National Mall and Monuments`,
        dayContent: `
        "Morning: Arrival in Washington, D.C"
Arrive at Ronald Reagan Washington National Airport and check into your accommodation.
"Afternoon: National Mall Exploration"
Spend the afternoon exploring the National Mall.
Visit the Washington Monument, Lincoln Memorial, and Vietnam Veterans Memorial.
"Evening: Dinner in Penn Quarter"
Have dinner in Penn Quarter, known for its diverse culinary scene.
Stroll around the area and enjoy the lively atmosphere.
        `,
      },
      {
        dayHeading: `Day 2: Smithsonian Museums`,
        dayContent: `
        "Morning: Smithsonian Museums"
Spend the morning visiting the Smithsonian Museums on the National Mall.
Explore the National Air and Space Museum or the National Museum of American History.
"Afternoon: Lunch at the National Gallery of Art"
Have lunch at the National Gallery of Art Sculpture Garden.
Explore the museum's impressive art collections.
"Evening: Dinner in Capitol Hill"
Have dinner in Capitol Hill, near the U.S. Capitol.
Explore the neighborhood and perhaps visit Eastern Market.
        `,
      },
      {
        dayHeading: `Day 3: U.S. Capitol and Library of Congress`,
        dayContent: `
        "Morning: U.S. Capitol Tour"
Take a guided tour of the U.S. Capitol.
Explore the Capitol Visitor Center and the surrounding grounds.
"Afternoon: Library of Congress"
Visit the Library of Congress, known for its stunning architecture and vast collections.
Explore the Thomas Jefferson Building.
"Evening: Dinner in Union Station"
Have dinner in Union Station, a historic transportation hub.
Enjoy the grandeur of the station's architecture.
        `,
      },
      {
        dayHeading: `Day 4: National Archives and Spy Museum`,
        dayContent: `
        "Morning: National Archives"
Begin your day at the National Archives to view the Declaration of Independence, Constitution, and Bill of Rights.
"Afternoon: Lunch at Old Ebbitt Grill"
Have lunch at the historic Old Ebbitt Grill, located near the White House.
Spend the afternoon at the International Spy Museum.
Explore exhibits on espionage and intelligence.
"Evening: Dinner in Foggy Bottom"
Have dinner in Foggy Bottom, a neighborhood known for its historic character.
Enjoy a relaxing evening.
        `,
      },
      {
        dayHeading: `Day 5: White House and Lafayette Square`,
        dayContent: `
        "Morning: White House Tour"
Take a tour of the White House (if available).
Explore Lafayette Square and nearby St. John's Church.
"Afternoon: Lunch at Founding Farmers"
Have lunch at Founding Farmers, a popular farm-to-table restaurant.
Visit the National Geographic Museum for informative exhibits.
Explore the museum's captivating content.
"Evening: Dinner in Dupont Circle"
Have dinner in Dupont Circle, a vibrant neighborhood.
Enjoy the eclectic mix of shops and restaurants.
        `,
      },
      {
        dayHeading: `Day 6: Arlington National Cemetery and Pentagon`,
        dayContent: `
        "Morning: Arlington National Cemetery"
Spend the morning at Arlington National Cemetery.
Visit the Tomb of the Unknown Soldier and the Arlington House.
"Afternoon: Pentagon Tour"
Take a guided tour of the Pentagon (advance reservations required).
Explore the 9/11 Pentagon Memorial.
"Evening: Dinner in Crystal City"
Have dinner in Crystal City, known for its diverse dining options.
Reflect on the day's experiences.
        `,
      },
      {
        dayHeading: `Day 7: Georgetown and Kennedy Center`,
        dayContent: `
        "Morning: Georgetown Exploration"
Spend the morning exploring Georgetown.
Walk along the historic streets and visit the C&O Canal.
"Afternoon: Lunch at M Street"
Have lunch on M Street in Georgetown, known for its trendy shops and eateries.
Take a guided tour of the John F. Kennedy Center for the Performing Arts.
Enjoy views of the Potomac River from the terrace.
"Evening: Farewell Dinner in Georgetown"
Have a farewell dinner in Georgetown.
Reflect on your week in Washington, D.C.
        `,
      },
    ],
    cost: 75000,
    reviews: 5,
    numOfDaysToStay: 7,
  },
  {
    name: 'Yellowstone National Park',
    imageUrl: '',
    country: 'America',
    description: [
      {
        dayHeading: `Day 1: Arrival in Yellowstone`,
        dayContent: `
        "Morning: Arrival in Yellowstone"
Arrive at Yellowstone and check into your accommodation.
Familiarize yourself with the park's map and regulations.
"Afternoon: West Thumb Geyser Basin"
Begin your exploration with a visit to the West Thumb Geyser Basin.
Marvel at the colorful hot springs along the edge of Yellowstone Lake.
"Evening: Dinner in Grant Village"
Have dinner in Grant Village, located near West Thumb.
Enjoy a peaceful evening in the park.
        `,
      },
      {
        dayHeading: `Day 2: Old Faithful and Upper Geyser Basin`,
        dayContent: `
        "Morning: Old Faithful"
Start your day at Old Faithful.
Witness the iconic geyser erupt and explore the Old Faithful Inn.
Hike the boardwalks of the Upper Geyser Basin.
Visit other geysers like Castle Geyser and Grand Geyser.
"Afternoon: Lunch at Old Faithful Lodge"
Have lunch at Old Faithful Lodge.
Relax and enjoy the scenic surroundings.
Visit the Morning Glory Pool, known for its vibrant colors.
Explore the nearby features.
Evening: Dinner at Snow Lodge
Have dinner at the Old Faithful Snow Lodge.
Consider attending an evening ranger program.
        `,
      },
      {
        dayHeading: `Day 3: Canyon Village and Grand Canyon of the Yellowstone`,
        dayContent: `
        "Morning: Canyon Village"
Drive to Canyon Village and explore the visitor center.
Plan your day to visit the Grand Canyon of the Yellowstone.
"Afternoon: Grand Canyon of the Yellowstone"
Hike the South Rim Trail for stunning views of the canyon.
Visit Artist Point for panoramic views of the Lower Falls.
"Evening: Dinner in Canyon Village"
Have dinner in Canyon Village.
Relax and enjoy the evening in the park.
        `,
      },
      {
        dayHeading: `Day 4: Lamar Valley and Wildlife Watching`,
        dayContent: `
        "Morning: Lamar Valley"
Spend the morning in Lamar Valley, known for wildlife viewing.
Look for bison, elk, wolves, and other animals.
"Afternoon: Picnic Lunch in Lamar Valley"
Have a picnic lunch in Lamar Valley.
Continue wildlife watching or embark on a short hike.
Visit Tower Fall, a 132-foot waterfall.
Explore the area and nearby viewpoints.
"Evening: Dinner in Cooke City"
Have dinner in Cooke City, the nearest town to Lamar Valley.
Enjoy the small-town atmosphere.
        `,
      },
      {
        dayHeading: `Day 5: Mammoth Hot Springs and Gardiner`,
        dayContent: `
        "Morning: Mammoth Hot Springs"
Explore the Mammoth Hot Springs area.
Walk the boardwalks and terraces.
"Afternoon: Lunch in Mammoth Village"
Have lunch in Mammoth Village.
Visit the historic Fort Yellowstone.
Explore Gardiner, Montana, the north entrance town.
Visit the Roosevelt Arch and the Yellowstone Heritage Center.
"Evening: Dinner in Gardiner"
Have dinner in Gardiner.
Enjoy the evening in this charming gateway town.
        `,
      },
      {
        dayHeading: `Day 6: Norris Geyser Basin and Madison Junction`,
        dayContent: `
        "Morning: Norris Geyser Basin"
Head to Norris Geyser Basin.
Explore the geothermal features, including Steamboat Geyser.
"Afternoon: Lunch at Madison Junction"
Have lunch at Madison Junction.
Enjoy a relaxing picnic along the Madison River.
Drive the Firehole Canyon Drive for scenic views.
Stop at Firehole Falls for a picturesque spot.
"Evening: Dinner at Old Faithful"
Return to the Old Faithful area for dinner.
Enjoy the evening ambiance around the geyser.
        `,
      },
      {
        dayHeading: `Day 7: West Yellowstone and Departure`,
        dayContent: `
        "Morning: West Yellowstone Exploration"
Head to West Yellowstone, a town just outside the park.
Explore the Grizzly & Wolf Discovery Center.
"Afternoon: Lunch in West Yellowstone"
Have lunch in West Yellowstone.
Visit the Yellowstone Historic Center.
"Evening: Departure"
If time allows, enjoy a final stroll in West Yellowstone.
Depart from Yellowstone National Park.
        `,
      },
    ],
    cost: 75000,
    reviews: 5,
    numOfDaysToStay: 7,
  },
  {
    name: 'Yosemite National Park',
    imageUrl: '',
    country: 'America',
    description: [
      {
        dayHeading: `Day 1: Arrival and Yosemite Valley`,
        dayContent: `
        "Morning: Arrival in Yosemite"
Arrive at Yosemite National Park and check into your accommodation.
Obtain park maps and information at the visitor center.
"Afternoon: Yosemite Valley"
Spend the afternoon exploring Yosemite Valley.
Visit iconic viewpoints like Tunnel View and Bridalveil Fall.
"Evening: Dinner in Yosemite Valley"
Have dinner at one of the dining options in Yosemite Valley.
Enjoy the serene evening atmosphere
        `,
      },
      {
        dayHeading: `Day 2: Half Dome and Mist Trail`,
        dayContent: `
        "Morning: Half Dome Viewpoints"
Begin your day with viewpoints showcasing Half Dome.
Explore Sentinel Dome for panoramic vistas.
Hike the Mist Trail to experience the spray of Vernal and Nevada Falls.
Enjoy lunch at the top.
"Afternoon: John Muir Trail Descent"
Descend via the John Muir Trail for a different perspective.
Explore the Happy Isles area.
"Evening: Dinner at Curry Village"
Have dinner at Curry Village.
Relax and reflect on the day's adventures.
        `,
      },
      {
        dayHeading: `Day 3: Mariposa Grove of Giant Sequoias`,
        dayContent: `
        "Morning: Mariposa Grove"
Head to Mariposa Grove to see the giant sequoias.
Explore the Grizzly Giant and California Tunnel Tree.
"Afternoon: Picnic Lunch in Mariposa Grove"
Enjoy a picnic lunch surrounded by ancient trees.
Take a leisurely stroll among the sequoias.
Visit Wawona and explore the historic district.
Stop by the Pioneer Yosemite History Center.
"Evening: Dinner in Wawona"
Have dinner in Wawona.
Experience the quiet charm of this area.
        `,
      },
      {
        dayHeading: `Day 4: Glacier Point and Taft Point`,
        dayContent: `
        "Morning: Glacier Poin"
Drive to Glacier Point for breathtaking views.
Explore the area and take in panoramic vistas.
"Afternoon: Hike to Taft Point"
Hike to Taft Point for stunning views of El Capitan and Yosemite Valley.
Enjoy a picnic lunch with a view.
"Evening: Dinner at The Ahwahnee"
Have dinner at The Ahwahnee, a historic hotel in Yosemite.
Relish the elegant dining experience.
        `,
      },
      {
        dayHeading: `Day 5: Tenaya Lake and Tuolumne Meadows`,
        dayContent: `
        "Morning: Tenaya Lake"
Spend the morning at Tenaya Lake.
Enjoy the pristine alpine setting and, if interested, go for a swim.
"Afternoon: Tuolumne Meadows"
Drive to Tuolumne Meadows for high-country scenery.
Explore the meadows and the Tuolumne Visitor Center.
"Evening: Dinner in Tuolumne Meadows"
Have dinner in Tuolumne Meadows.
Experience the tranquility of this alpine region.
        `,
      },
      {
        dayHeading: `Day 6: High Sierra Trails and Waterfalls`,
        dayContent: `
        "Morning: High Sierra Trails"
Choose a high-country trail, such as Cathedral Lakes or Clouds Rest.
Enjoy a morning hike with panoramic views.
"Afternoon: Waterfalls"
Visit other waterfalls in Yosemite Valley.
Explore Lower Yosemite Fall and Upper Yosemite Fall.
"Evening: Dinner at Yosemite Village"
Have dinner at Yosemite Village.
Reflect on your week and enjoy the vibrant atmosphere.
        `,
      },
      {
        dayHeading: `Day 7: Sunrise at Glacier Point and Departure`,
        dayContent: `
        "Morning: Sunrise at Glacier Point"
Rise early for a sunrise visit to Glacier Point.
Witness the first light illuminating the Yosemite Valley.
"Afternoon: Lunch in Yosemite Valley"
Have breakfast in Yosemite Valley.
If time allows, visit any missed spots.
"Evening: Departure"
Check out of your accommodation.
Depart from Yosemite National Park.
        `,
      },
    ],
    cost: 75000,
    reviews: 5,
    numOfDaysToStay: 7,
  },
];
