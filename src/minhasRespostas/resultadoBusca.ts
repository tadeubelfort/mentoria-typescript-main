export interface resultadoBusca  {
    adult:boolean;
    backdrop_path:string;
    belong_to_collecton?:boolean;
    budget: number;
    genres: genre[];
    homepage: string;
    imdb_id:string;
    original_language:string;
    original_title:string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: production[];
    release_date:string;
    revenue:number;
    runtime:number;
    spoken_languages:language[];
    status:Status;
    tagline:string;
    title:string;
    video:boolean;
    vote_average:number;
    vote_count:number
  } 

  enum Status {
    Released,
    Unreleased
      
  }

  type genre = {
    id:number;
    name:string
  }

  type language = {
    english_name:string;
    iso_639_1:string;
    name:string
  }

  type production = {
    id: number;
    logo_path:string;
    name: string;
    origin_country:string
  }