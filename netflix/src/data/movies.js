// Movie data

const movies = [
  // Trending Now
   {
    id: 1,
    title: "One Piece",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg758serE2VUGvwTLhMoQyMarx2IEeZSLnAQ&s",
    category: "Trending Now"
  },
  {
    id: 2,
    title: "Steel Ball Run",
    image: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQRCZtzSPFAc01j6_GQXBqDmO4XRDuMcPMuE9E2grzqU83BA2SaHjmu4k_qmlhhT1f5FJtDaGrqRFysytK8N1pr2-1objIXVPC5CwHQ040glPwKa6xQRNdynqTY8xRzP-cpmpwvnVr0ZaEkLgX0sll_4M.jpg",
    category: "Trending Now"
  },
  {
    id: 3,
    title: "Stranger Things",
    image: "https://flixpatrol.com/runtime/cache/files/posters/c/w350/cvxvgwhce6xnw8uavuggapxbmoe.webp",
    category: "Trending Now"
  },
  {
    id: 4,
    title: "Peaky Blinders: The Immortal Man",
    image: "https://i.redd.it/u3l3mvshhe5g1.jpeg",
    category: "Trending Now"
  },
  {
    id: 5,
    title: "Detective Hole",
    image: "https://www.flickeringmyth.com/jo-nesbos-detective-hole-gets-a-trailer-from-netflix/detective-hole-poster/",
    category:"Trending Now",
  },
  {
    id: 6,
    title: "Something Very Bad Is Going to Happen",
    image: "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2026/02/somethingverybad-poster.jpg",
    category:"Trending Now",
  },
  {
    id: 7,
    title: "The Predator Of Seville",
    image: "https://resizing.flixster.com/1mYohmm-2gASUNROZgdUeZ6rf64=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p32660792_b_v7_ab.jpg",
    category:"Trending Now",
  },
  {
    id: 8,
    title: "Radioactive Emergency",
    image: "https://flixpatrol.com/runtime/cache/files/posters/i/w350/i8iztvfkh5ks29qoaz1bvxt5hvm.webp",
    category:"Trending Now",
  },
  {
    id: 9,
    title: "Ripple",
    image: "https://flixpatrol.com/runtime/cache/files/posters/e/w350/exodcwuef7dtpcdath23oammvq7.webp",
    category:"Trending Now",
  },
  {
    id: 10,
    title: "Beauty in Black",
    image: "https://flixpatrol.com/runtime/cache/files/posters/i/w350/i98jl46wbpk7ymttnoakowtnuff.webp",
    category:"Trending Now",
  },
  {
    id: 11,
    title: "Homicide",
    image: "https://flixpatrol.com/runtime/cache/files/posters/b/w350/byh0uhyyogjkpl9ulhlyabnftpx.webp",
    category:"Trending Now",
  },
  {
    id: 12,
    title: "Heartbreak High",
    image: "https://flixpatrol.com/runtime/cache/files/posters/1/w350/1ktymk7n2vre8powcyb799dbdrr.webp",
    category:"Trending Now",
  },
  {
    id: 13,
    title: "Phantom Lawyer",
    image: "https://flixpatrol.com/runtime/cache/files/posters/j/w350/j3w0uzi4thurh1jb8gf452mrlq7.webp",
    category:"Trending Now",
  },


  {
    id: 14,
    title: "Breaking Bad",
    image: "https://m.media-amazon.com/images/I/61jROqa02yL._AC_UF894,1000_QL80_.jpg",
    category: "Popular on Netflix"
  },
  
  {
    id: 15,
    title: "Wednesday",
    image: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQdttJvszpXZZDRBx6bLQprJt918HrS1MGOej3W88GrkfOeL-kUJn66TfXKYxd1B7r3ZDxo2Wlo-FjgzFUvSNrR9FRSrUq-aW0Jzip6mBrJvjEm7pVt72u_XErbyxZZ5RJNJpnOdy_3z2VabskP99G_ie.jpg",
    category: "Popular on Netflix"
  },
  {
    id: 16,
    title: "Squid Game",
    image: "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
    category: "Popular on Netflix"
  },
  {
    id: 17,
    title: "Ozark",
    image: "https://m.media-amazon.com/images/I/515sDuU241L._AC_.jpg",
    category: "Popular on Netflix"
  },
  {
    id: 18,
    title: "Money Heist",
    image: "https://m.media-amazon.com/images/I/61boFr6SYZL._SL1000_.jpg",
    category: "Popular on Netflix"
  },
  {
    id: 10,
    title: "KPop Demon Hunters",
    image: "https://flixpatrol.com/runtime/cache/files/posters/d/w350/dt7kn47oksrcy4flktwvvcdq93y.webp",
    category: "Popular on Netflix"
  },
  {
    id: 20,
    title: "The Witcher",
    image: "https://m.media-amazon.com/images/I/91XdNTAoguL._AC_SL1500_.jpg",
    category: "Popular on Netflix"
  },
  {
    id: 21,
    title: "Frankenstein",
    image: "https://flixpatrol.com/runtime/cache/files/posters/v/w350/v9nlalbbrkdwq44qg51v8t6spui.webp",
    category: "Popular on Netflix"
  },
  {
    id: 22,
    title: "Shrek 2",
    image: "https://flixpatrol.com/runtime/cache/files/posters/2/w350/2yyp0pqjg8zvqturh1baqu2tixl.webp",
    category: "Popular on Netflix"
  },
  {
    id: 23,
    title: "Boots",
    image: "https://flixpatrol.com/runtime/cache/files/posters/e/w350/eewe68opffdu4ehz3sxiete44rt.webp",
    category: "Popular on Netflix"
  },
  {
    id: 24,
    title: "The Old Guard 2",
    image: "https://flixpatrol.com/runtime/cache/files/posters/q/w350/qjvmsjv7umspi1aha9wtl1v8cxr.webp",
    category: "Popular on Netflix"
  },
  {
    id: 25,
    title: "A House of Dynamite",
    image: "https://flixpatrol.com/runtime/cache/files/posters/a/w350/aij8l90ftpawvf3sdx7fj9imzoy.webp",
    category: "Popular on Netflix"
  },
  {
    id: 26,
    title: "The Grinch",
    image: "https://flixpatrol.com/runtime/cache/files/posters/r/w350/rwqvj6z8kpdsbt7xpjvbcltxq90.webp",
    category: "Popular on Netflix"
  },
  {
    id: 26,
    title: "El Camino",
    image: "https://m.media-amazon.com/images/M/MV5BYTYxMjI2YzUtODQ5Mi00M2JmLTlmNzItOTlkM2MyM2ExM2RlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    category: "Popular on Netflix"
  },

  
]

export default movies