import underwaterBg from '../assets/img/post-background/underwater-bg.png';
import fallsBg from '../assets/img/post-background/falls-bg.png'
import fallsImg from '../assets/img/post-image/falls.jpg';
import turtleImg from '../assets/img/post-image/turtle.jpg';


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
    ],

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
    ],

  }

];


export default blogData;