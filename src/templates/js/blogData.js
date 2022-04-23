//backgrounds
import underwaterBg from '../assets/img/post-background/underwater-bg.png';
import fallsBg from '../assets/img/post-background/falls-bg.png'
import bantayanBg from '../assets/img/post-background/bantayan-bg.png';
import wildLifeBg from '../assets/img/post-background/wildLifeBg.png';

//images
import fallsImg from '../assets/img/post-image/falls.jpg';
import turtleImg from '../assets/img/post-image/turtle.jpg';
import wildLifeImg from '../assets/img/post-image/wildlife.png';
import bantayanImg from '../assets/img/post-image/bantayan.png';

const date = new Date();
const monthArray = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];
// random day 
const day = Math.ceil(Math.random() * 29 + 1);
//year
const year = date.getFullYear();
//month
const month = monthArray[Math.ceil(Math.random() * 10 + 1)];
// format
const postedDate = `${month}, ${day} ${year}`;

const blogData = [
  {
    title: 'One of the things that makes Cebu popular is its awesome marine life and diving spots.',
    subtitle: 'Amazing underwater life',
    background: fallsBg,
    image: turtleImg,
    postedOn: postedDate,
    content: [
      'One of the things that makes Cebu popular is its awesome marine life and diving spots. Just a few minutes drive away from the main city will take you to diving spots with Mactan Island where you can witness a school of sardines swimming every now and then. There are also great diving sites along the Mactan Channel if you don’t want to travel far. But if you want some deep diving adventure, drive 2-4 hours north or south. You can find some school of sardines, thresher sharks, whale sharks and sea turtles along Moalboal’s Panagsama Beach and Pescador Island in the south western region. Malapascua Island, a 3-hr drive up north and a boat ride away is famous for its white tip sharks.',
      'Cebu’s neighbouring islands, Bohol and Negros are both home to amazing underwater life too. You only need to ride a fast craft boat or ferry to take you to those islands. You can book your tickets for Cebu to Bohol here and back.'
    ]

  },
  {
    title: 'Cebu is home to an incredible number of spectacular waterfalls.',
    subtitle: 'Living waterfalls',
    background: underwaterBg,
    image: fallsImg,
    postedOn: postedDate,
    content: [
      "Kawasan Falls is one of the top Cebu South tourist spots. It is a three-stage cascade of clear turquoise water from the mountain springs of Mantalongon mountain range. Aside from its natural beauty, Kawasan Falls has also become famous because one of the most popular activities in Cebu is done here—Canyoneering. The canyoneering adventure starts at Canlaob river downstream going to Kawasan Falls.There are local accredited guides who accompany all tourists and facilitate activities at this tourist attraction in Cebu such as walking, jumping, swimming, climbing, and abseiling through the streams.",
      "With a mountainous spine and abundant rainforest, Cebu is home to an incredible number of spectacular waterfalls. Kawasan Falls is arguably the most beguiling, boasting a beautiful setting and a pool of water that is an extraordinary shade of blue. It’s perfect for thrill-seekers too: the area is a popular spot for waterfall jumping, rapelling, rock climbing and canyoning. Tumalog Falls, near Oslob, is worth a visit too. Inside the cascade you'll find lots of convenient natural nooks and crannies, forming perfect seats for a therapeutic water massage.",
    ]
  },

  {
    title: ' Bantayan Island is not as commercialized and crowded as Boracay',
    subtitle: 'White sand Island',
    background: bantayanBg,
    image: bantayanImg,
    postedOn: postedDate,
    content: [
      'Cebu Island is long and narrow, stretching 196 kilometres from north to south, and only 32 kilometres across its widest point. It has countless coves and beaches, but it is the tiny islands just offshore that will capture your heart. Boasting sugar-white beaches, clear azure waters and astounding coral reefs just offshore, they are holiday-brochure perfect, but without the crowds.Bantayan Island is probably the most famous, with its dazzling white beaches, cool breezes and friendly locals.Camotes Island boasts beautiful beaches too, particularly around Mangodlong and Santiago Bay, but offers other activities for visitors as well.Danao Lake is worth a visit, as is Bukilat Cave, or trek to the Altavista view point for a breathtaking panorama of the whole island.Finally, Nalusuan Island is perfect for divers, surrounded by a protected marine garden, with colourful fish and neon coral.Make sure you try the fresh seafood served in beach shack restaurants here too.But be warned: you may never want to leave.',
      'Bantayan Island is a small island off the coast of northern Cebu. Don’t be fooled by this sleepy fishing village, the beaches of this humble island exude the same charm and beauty as the famous Boracay Island.The best part is, Bantayan Island is not as commercialized and crowded as Boracay.If you want a relaxing vacation by the beach and witness one of the most beautiful sunsets, Bantayan Island won\’t disappoint you.Bantayan Island is blessed with several sprawling white- sand beaches and calm azure waters.Most of the beaches in Bantayan Island are within resorts or owned privately, but they are accessible to the public for a small fee.You also don\’t need to check in at any of the resorts to enjoy the beaches.It\'s one of the best tourist spots in Bantayan Island.Bantayan Island\'s Kota Beach is one of the best beaches in the Philippines. It features a sandbar and a lagoon that makes a perfect spot for wading in and sunbathing. Paradise Beach, on the other hand, is a serene stretch of white sand beach that features beautiful rock formations. Bantayan Island also boasts two natural cave pools, the Ogtong Cave and the Sto.Niño Cave.A natural cold spring feeds both caves, so you can expect chilly water that\'s great for cooling off after a morning of beach- hopping.',
    ]
  },

  {
    title: 'Give Me 10 Minutes, I\'ll Give You The Truth About Wildlife',
    subtitle: 'One Word: Wildlife',
    background: wildLifeBg,
    image: wildLifeImg,
    postedOn: postedDate,
    content: [
      'Everything is within easy reach in Cebu, including a number of mountain treks. Each trail offers something for everyone – beginners, hardcore trekkers and all points between. What’s more, the mountainous interior is home to a huge variety of wildlife, including the incredibly rare tarsier. Being nocturnal, they\'re best seen on a night, dawn or dusk tour.Watch for their bulbous eyes, peaking out from trees and bushes.    At 1, 013m above sea level, Osmeña Peak in Dalaguete is the highest point in Cebu, but one of the easiest to conquer.Sirao Peak is one of the most challenging and scenic treks, a four hour hike past hidden waterfalls and breathtaking vistas.The best trek, through relatively untouched forests and hence the best place to spot a tarsier, is the hike to Mt.Babag.Winding its way through thick foliage, along occasionally muddy paths, it takes three hours to complete, finishing near the Chalet Hills, another popular destination.Here you\’ll find the Temple of Leah, which locals say is Cebu\’s Taj Mahal.',
      'here are five interesting facts about baby giraffes you may want to know.',
      '1. Did you know that after 10 hours after birth, a baby giraffe can run?',
      'When a baby giraffe is born, it struggles to stand and walk on its feet.However, after minutes of practice, the baby giraffe can already walk and after 10 hours, it can already run at full speed.Interesting, right ?',
      '2. Did you know that a baby giraffe uses its bottom to sleep?',
      'Imagine this, a baby giraffe reaching its long neck around its body to rest its head on its bottom to sleep. Yes, that’s how a baby giraffe sleeps for about three or four hours, but it can also sleep standing up only for a few minutes.',
      '3. Did you know that a baby giraffe can moo like a cow?',
      'Moo! Yes, a baby giraffe’s voice is more familiar than you might think.',
      '4. Did you know that a baby giraffe is six-feet tall when it is born?',
      'Yes, a baby giraffe is a giant baby. It’s born to be taller than the average human. Aside from being 6ft tall, a calf usually weighs 220 pounds.',
      '5. Did you know that a baby giraffe gets its spot patterns from its mother?',
      'The orange spot patterns in a baby giraffe are unique. The calf gets those spot patterns from its mother, according to new research. In a study published in the PeerJ journal, scientists Derek Lee, Monica Bond, and Douglas Cavener found that certain aspects of a giraffe’s spot pattern are heritable. In the same study, the scientists said that these inherited spots impact a young giraffe’s likelihood of survival. The spot patterns help protect them from predators in the wild and also help maintain the body temperature.'
    ]
  }

];


export default blogData;