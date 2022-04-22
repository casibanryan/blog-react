const date = new Date;
const month = date.getMonth();
const day = date.getDay();
const year = date.getFullYear();


const blogData = [
  {
    title: 'One of the things that makes Cebu popular is its awesome marine life and diving spots.',
    subtitle: 'Amazing underwater life',
    content: 'One of the things that makes Cebu popular is its awesome marine life and diving spots. Just a few minutes drive away from the main city will take you to diving spots with Mactan Island where you can witness a school of sardines swimming every now and then. There are also great diving sites along the Mactan Channel if you don’t want to travel far. But if you want some deep diving adventure, drive 2-4 hours north or south. You can find some school of sardines, thresher sharks, whale sharks and sea turtles along Moalboal’s Panagsama Beach and Pescador Island in the south western region. Malapascua Island, a 3-hr drive up north and a boat ride away is famous for its white tip sharks.'
    ,
    postedDate: `${month}`,
    img: 'https://i0.wp.com/thetravellingfeet.com/wp-content/uploads/2020/06/sea-turtles-in-pescador-island-cebu.jpg?resize=696%2C522&ssl=1'
  },
  {
    title: 'Cebu is home to an incredible number of spectacular waterfalls.',
    subtitle: 'Living waterfalls',
    content: "With a mountainous spine and abundant rainforest, Cebu is home to an incredible number of spectacular waterfalls. Kawasan Falls is arguably the most beguiling, boasting a beautiful setting and a pool of water that is an extraordinary shade of blue. It’s perfect for thrill-seekers too: the area is a popular spot for waterfall jumping, rapelling, rock climbing and canyoning. Tumalog Falls, near Oslob, is worth a visit too. Inside the cascade you'll find lots of convenient natural nooks and crannies, forming perfect seats for a therapeutic water massage.",
    img: 'https://cdn2.wanderlust.co.uk/media/1024/cropped-dreamstime_xxl_70061264.jpg?anchor=center&mode=crop&width=1440&height=0&format=auto&quality=90&rnd=131546994040000000'

  }

];


export default blogData;