const TOGGLE_WISHLIST = "TOGGLE_WISHLIST";

const initialState = { games : [
  
  {id:1, banner:"https://cdn-ext.fanatical.com/production/product/1280x720/d5f7dc78-2c2d-4604-90ee-79ca108c01fc.jpeg", desires:true,
  price:360, rating:1147, description:"Horizon Zero Dawn — компьютерная игра в жанре Action/RPG с открытым миром"},
  
  {id:2, banner:"https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Astroneer_image1600w.jpg", desires:false,
  price:690, rating:4569, description:"Astroneer — компьютерная игра, разработанная студией System Era Softworks. Astroneer представляет собой научно-фантастическую «песочницу» — игроку в роли космонавта предлагается колонизировать планеты, создавать структуры и добывать ресурсы."},
  
  {id:3, banner:"https://cdn.akamai.steamstatic.com/steam/apps/497780/capsule_616x353.jpg?t=1572396603", desires:true,
  price:530, rating:1, description:"Головоломка, в которой комнаты - это предметы, а предметы - комнаты. Достигни цели, переставляя и клонируя комнаты и меняя структуру мира."},
  
  {id:4, banner:"https://www.overclockers.ua/news/games/129480-Battlefield-2042.jpg", desires:false,
  price:610, rating:2, description:"Battlefield 2042 — компьютерная игра в жанре шутера от первого лица"},
  
  {id:5, banner:"https://i.ytimg.com/vi/nLd_ylwop0U/maxresdefault.jpg", desires:false,
  price:760, rating:4385, description:"Grounded — симулятор выживания"},
  
  {id:6, banner:"https://cdn.akamai.steamstatic.com/steam/apps/1506830/capsule_616x353.jpg?t=1633014038", desires:true,
  price:490, rating:1646, description:"Самый популярый футбольный симулятор"},
  
  {id:7, banner:"https://coop-land.ru/uploads/posts/2020-10/1602358179_maxresdefault.jpg", desires:false,
  price:190, rating:350, description:"Raft - это видеоигра на выживание в открытом мире"},
  
  {id:8, banner:"https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_MonsterHunterRise.jpg", desires:true,
  price:269, rating:4679, description:"Monster Hunter: Rise — компьютерная ролевая игра"},
  
  {id:9, banner:"https://i.ytimg.com/vi/iN5tEkmED-Q/maxresdefault.jpg", desires:false,
  price:357, rating:2567, description:"Team Fortress 2 — компьютерная игра в жанре многопользовательского шутера от первого лица"},
  
  {id:10, banner:"https://realnoevremya.ru/uploads/news/58/e9/f9acda971eb41019.jpg", desires:false,
   price:360, rating:1147, description:"CS:GO операция Riptide: новый кейс, скины и агент времен CS"},
  
  {id:11, banner:"https://cdn1.epicgames.com/ark/offer/EGS_ARKSurvivalEvolved_StudioWildcard_S1-2560x1440-c316afb7c33a9dfb892eef6b99169e43.jpg", desires:true,
  price:486, rating:3469, description:"ARK: Survival Evolved — многопользовательская компьютерная игра в жанре симулятора выживания"},

  {id:12, banner:"https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_MarvelsGuardiansoftheGalaxy_EidosMontral_S3_2560x1440-6aecbc6825954678a5a4f3b625988b19", desires:false,
  price:267, rating:1649, description:"Marvel’s Guardians of the Galaxy — приключенческая компьютерная игра, разработанная Eidos Montreal в сотрудничестве с Marvel Games и изданная Square Enix. Игра основана на серии комиксов Marvel Comics «Стражи Галактики»."}
]};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_WISHLIST: {
      let newGames = [...state.games];
      let index = newGames.findIndex((el) => {
        return el.id === action.id;
      });
      let newElement = {...state.games[index]};
      newElement.desires = !newElement.desires;
      newGames[index] = newElement;
      console.log(newElement.desires);
      return { ...state, games: newGames};
    }

    default:
      return { ...state };
  }
}

export const toggleWishlist = (id) => ({type:TOGGLE_WISHLIST,id});