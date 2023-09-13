import {render, screen} from "@testing-library/react";
import { CharacterDataResult } from "dh-marvel/features/marvel/character.types";
import Index from "dh-marvel/pages/personajes/[id].page"
import character from "dh-marvel/test/mocks/character";



const defaultValue:CharacterDataResult ={
    id: 1010911,
    name: "Black Widow (Ultimate)",
    description: "",
    modified: "2014-03-05T13:19:36-0500",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/2/03/53176a690b261",
      extension: "jpg"
    },
    resourceURI: "http://gateway.marvel.com/v1/public/characters/1010911",
    comics: {
      available: 18,
      collectionURI: "http://gateway.marvel.com/v1/public/characters/1010911/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/26843",
          name: "Ultimate Avengers (2009) #4"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/30598",
          name: "Ultimate Avengers 3 (2010) #5"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/15773",
          name: "Ultimate Marvel Team-Up (2001) #14"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/5132",
          name: "Ultimate Marvel Team-Up Ultimate Collection (Trade Paperback)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/568",
          name: "Ultimate Nightmare (2004) #1"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/817",
          name: "Ultimate Nightmare (2004) #2"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/869",
          name: "Ultimate Nightmare (2004) #3"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/41",
          name: "Ultimate Nightmare (2004) #4"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/1439",
          name: "Ultimate Nightmare (2004) #5"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/18474",
          name: "Ultimate War (2003) #1"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/18476",
          name: "Ultimate War (2003) #3"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/18477",
          name: "Ultimate War (2003) #4"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/15727",
          name: "Ultimate X-Men (2001) #35"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/2476",
          name: "Ultimate X-Men (2001) #64"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/1158",
          name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB (Trade Paperback)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/17378",
          name: "Ultimates 3 (2007) #1"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/17618",
          name: "Ultimates 3 (2007) #2"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/24316",
          name: "Ultimates 3: Who Killed the Scarlet Witch? (Trade Paperback)"
        }
      ],
      returned: 18
    },
    series: {
      available: 10,
      collectionURI: "http://gateway.marvel.com/v1/public/characters/1010911/series",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/8498",
          name: "Ultimate Avengers (2009 - 2010)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/9867",
          name: "Ultimate Avengers 3 (2010 - 2011)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/2311",
          name: "Ultimate Marvel Team-Up (2001 - 2002)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/1823",
          name: "Ultimate Marvel Team-Up Ultimate Collection (2006)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/760",
          name: "Ultimate Nightmare (2004 - 2005)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/3659",
          name: "Ultimate War (2003)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/474",
          name: "Ultimate X-Men (2001 - 2009)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/216",
          name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB (1999)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/3188",
          name: "Ultimates 3 (2007 - 2008)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/7515",
          name: "Ultimates 3: Who Killed the Scarlet Witch? (2009 - Present)"
        }
      ],
      returned: 10
    },
    stories: {
      available: 18,
      collectionURI: "http://gateway.marvel.com/v1/public/characters/1010911/stories",
      items: [       
      ],
      returned: 18
    },
    events: {
      available: 0,
      collectionURI: "http://gateway.marvel.com/v1/public/characters/1010911/events",
      items: [],
      returned: 0
    },
    urls: [
      {
        type: "detail",
        url: "http://marvel.com/characters/6/black_widow?utm_campaign=apiRef&utm_source=d20df9ed7325ee18deffd75239134494"
      },
      {
        type: "wiki",
        url: "http://marvel.com/universe/Black_Widow_(Ultimate)?utm_campaign=apiRef&utm_source=d20df9ed7325ee18deffd75239134494"
      },
      {
        type: "comiclink",
        url: "http://marvel.com/comics/characters/1010911/black_widow_ultimate?utm_campaign=apiRef&utm_source=d20df9ed7325ee18deffd75239134494"
      }
    ]
  }

describe('Personajes', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<Index character={defaultValue} id={1}/>)
            const title = screen.getByText('Personaje')
            expect(title).toBeInTheDocument()
        })
    })

})