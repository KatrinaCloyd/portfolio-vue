const work = [
  {
    id: "SP",
    category: "dev",
    title: "Schema Partners",
    oneLiner:
      " Schema Partners is a primary marketing site for a local M&A Consultant and Certified Valuation Analyst ",
    note: "Edward Roney.",
    tech: "JavaScript | React | Next | HTML | CSS",
    github: "https://github.com/KatrinaCloyd/schemapartners",
    liveSite: "https://www.schemapartners.com/",
    npmLink: null,
    blurb1:
      "This is a new contact and informational site for a local Portland Consultant and Valuation Analyst. This was a freelance project built for the client from initial logo design, through UI/UX design, and to this live site. Created with clarity, simplicity, and design in mind, the site carries these things responsively through all screen sizes.",
    blurb2: null,
    blurb3:
      "To read more about the design process or to see the evolution of the Schema Partners logo, see my design work page. (coming soon...)",
    video: "/SP.mp4",
    image1: "/SP.png",
    image2: null,
    image3: "/SP2.png",
    image4: null,
  },
  {
    id: "GIM",
    category: "dev",
    title: "GIM LCC.",
    oneLiner:
      "GIM LLC is an escape room inspired website where players work together to find clues to free the ghost!",
    note: null,
    tech: "JavaScript | React | Socket.io | Context Api | Node | Express",
    github: "https://github.com/GIM-LLC",
    liveSite: "https://www.escapegim.com/",
    npmLink: null,
    blurb1:
      "Created by a remote team of five over an eight day sprint. Inspired by escape rooms and ghost stories, GIM (or the Ghost In the Machine) appears to be an innocuous corporate website, but as users explore they find clues about what is actually happening. Built using Socket.io, the initial idea was that the site would host multiple visitors at the same time, so that users could interact and work together to free the ghost before time ran out, and the ghost gets trapped forever. Users can chat with one another, see what other users are doing, and work together! The ghost can be freed on your own, but it is much more difficult.",
    blurb2:
      "Our first hurdle with this project was getting multiple cursors to render on the screen at once and update with each and every mouse move for all users. Once we got that functionality figured out over the socket connections, all other interactions were fun to figure out!",
    blurb3:
      "This project was really an adventure in CSS animations. Images degrade over time, clues glow, sound effects, shake animations, and modal windows let you know you are making progress, elements flip, move, and dissapear. Explore for yourself to see if you can find all the surprises and free the ghost!",
    video: "/GIMvid.mp4",
    image1: "/GIM.png",
    image2: "/GIM2.png",
    image3: "/GIM3.png",
    image4: "/GIM4.png",
  },
  {
    id: "PP",
    category: "dev",
    title: "Pixel Pusher",
    oneLiner:
      "Published NPM package to create unique art right in the terminal window! Users can also save, upload and view artwork in the gallery.",
    note: null,
    tech: "JavaScript | Node | Express | GitHub OAuth | Axios | Inquirer | Blessed",
    github: "https://github.com/st-ART-up",
    liveSite: null,
    npmLink: "https://www.npmjs.com/package/@st-art-up/pixel-pusher",
    blurb1:
      "PixelPusher by stARTup creates a canvas and gallery experience right in the users terminal window by simply running the command. In the canvas view users can change the canvas color, paint color, brush sizes, erase, and even add text (a poem, maybe?) to their creations. Using GitHub oAuth, users can save and upload their completed art to be viewed in the gallery. When in gallery view users can manage their own artworks or view artworks created by all other PixelPushers!",
    blurb2:
      "Created by a fully remote team of eight developers, this app was a completely new undertaking for everyone on the team. The biggest challenge was navigating how to integrate two very different libraries within node to run in the terminal window.",
    blurb3:
      "This project was so fun to be a part of, being able to bring art and tech together in the terminal window was an adventure. We look forward to seeing your artworks in the gallery collection!",
    video: "/PPvid.mp4",
    image1: "/PP1.png",
    image2: "/PP2.png",
    image3: "/PP3.png",
    image4: null,
  },
  {
    id: "VM",
    category: "dev",
    title: "Vampire Match",
    oneLiner:
      "Memory card match game based on the movie and television series ",
    note: "What We Do In The Shadows.",
    tech: "JavaScript | HTML | CSS | QUnit",
    github: "https://github.com/UniKittyCorns/MemoryCardGame",
    liveSite: "https://vampirematch.netlify.app/",
    npmLink: null,
    blurb1:
      "A memory matching card game created with vanilla javascript, HTML, and CSS. This vampire themed game is a homage to the movie and series What We Do In The Shadows. This app was completed in a five day sprint by a remote team  of four working collaboratively.",
    blurb2:
      "Users are asked to input their name and select one of the three difficulty levels. This info is saved using the browser's local storage for display and for determining the number of cards in the game. A fun challenge was utilizing CSS transform and rotate animations for the card flips.",
    blurb3:
      "User's scores are also added to the local storage info in order to feed the scoreboard page. Because we were so proud of these awesome illustrations, we had to build in a \"give up\" functionality so that even if you can't beat the hardest level, you can still see all of the cards face up! Illustration credit to Soraya Benson, you can find her on the GitHub link above.",
    video: "/VampVid.mp4",
    image1: "/Vamp1.png",
    image2: "/Vamp2.png",
    image3: "/Vamp3.png",
    image4: "/Vamp4.png",
  },
  {
    id: "GG",
    category: "dev",
    title: "GainfulGarden",
    oneLiner:
      "Gardening site for users to search for new plants, and track their garden info. ",
    note: "Live site under construction, as our source API was discontinued.",
    tech: "JavaScript | React | Node | Express | Superagent | Toastify",
    github: "https://github.com/GainfulGarden",
    liveSite: "https://gainfulgarden.netlify.app/",
    npmLink: null,
    blurb1:
      "GainfulGarden is a place for gardeners new and seasoned alike to search for new plants to add to their gardens, keep a wishlist of plants that would like to grow, and keep detailed notes on the plants they are already growing. Both front and back ends for this app were built by a fully remote team of four in one week. Our back end has three relational tables: user information, wishlist items and garden items both which include an owner id to tie the item to the appropriate user, and lastly notes which carries a owner id and a plant id so the note is tied to the correct plant in the correct users garden.",
    blurb2:
      "After narrowing down the search results by name, edible part, required light or whether it is a vegetable or not, users then get an updated list of plant results. From this matrix users can add the plant directly into their garden or wishlist by clicking on the icons on the card, or they can view a detail page. The detail page calls the plant API once again to get the most detailed info available, including water and light requirement details, genius name, soil needs, and additional photos. If this plant is in your garden this is also where you can add notes to your plant's care journal.",
    blurb3:
      "I designed the logo, icons, branding and look of the entire frontend, personally styling the search results page as a roadmap so other team members could take on the styling of other pages while maintaining a seamless look across the site. Sadly, this app was built referencing information from the Trefle API, which has since been taken down. The team loves GainfulGarden so much that we do have plans to build out our own API to power the backend. So check back soon!",
    video: null,
    image1: "/GG1.png",
    image2: null,
    image3: "/GG2.png",
    image4: "/GG3.png",
  },
];

export default work;
