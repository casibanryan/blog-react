import homeBg from '../assets/img/home-bg.png';


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
    content: 'One of the things that makes Cebu popular is its awesome marine life and diving spots. Just a few minutes drive away from the main city will take you to diving spots with Mactan Island where you can witness a school of sardines swimming every now and then. There are also great diving sites along the Mactan Channel if you don’t want to travel far. But if you want some deep diving adventure, drive 2-4 hours north or south. You can find some school of sardines, thresher sharks, whale sharks and sea turtles along Moalboal’s Panagsama Beach and Pescador Island in the south western region. Malapascua Island, a 3-hr drive up north and a boat ride away is famous for its white tip sharks.',
    background: homeBg,
    img: 'post-image1',
    postedOn: postedDate,
  },
  {
    title: 'Cebu is home to an incredible number of spectacular waterfalls.',
    subtitle: 'Living waterfalls',
    content: "With a mountainous spine and abundant rainforest, Cebu is home to an incredible number of spectacular waterfalls. Kawasan Falls is arguably the most beguiling, boasting a beautiful setting and a pool of water that is an extraordinary shade of blue. It’s perfect for thrill-seekers too: the area is a popular spot for waterfall jumping, rapelling, rock climbing and canyoning. Tumalog Falls, near Oslob, is worth a visit too. Inside the cascade you'll find lots of convenient natural nooks and crannies, forming perfect seats for a therapeutic water massage.",
    img: 'post-image2',
    postedOn: postedDate,
  }

];


export default blogData;