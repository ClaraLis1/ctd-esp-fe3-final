import { ComicData } from "dh-marvel/features/marvel/comic.types"
import {render, screen} from "@testing-library/react";
import { CharacterDataResult } from "dh-marvel/features/marvel/character.types";
import Index from "dh-marvel/pages/confirmacion-compra/index.page"

// const defaultValue:ComicData ={
//     id: 1010911,
//     name: "Black Widow (Ultimate)",
//     description: "",
//     modified: "2014-03-05T13:19:36-0500",
//     thumbnail: {
//       path: "http://i.annihil.us/u/prod/marvel/i/mg/2/03/53176a690b261",
//       extension: "jpg"
//     },
//     resourceURI: "http://gateway.marvel.com/v1/public/characters/1010911",
//     comics: {
//       available: 18,
//       collectionURI: "http://gateway.marvel.com/v1/public/characters/1010911/comics",
//       items: [
       
//       ],
//       returned: 18
//     },
//     series: {
//       available: 10,
//       collectionURI: "http://gateway.marvel.com/v1/public/characters/1010911/series",
//       items: [
//         {
//           resourceURI: "http://gateway.marvel.com/v1/public/series/8498",
//           name: "Ultimate Avengers (2009 - 2010)"
//         },
//         {
//           resourceURI: "http://gateway.marvel.com/v1/public/series/9867",
//           name: "Ultimate Avengers 3 (2010 - 2011)"
//         },
//         {
//           resourceURI: "http://gateway.marvel.com/v1/public/series/2311",
//           name: "Ultimate Marvel Team-Up (2001 - 2002)"
//         },
//         {
//           resourceURI: "http://gateway.marvel.com/v1/public/series/1823",
//           name: "Ultimate Marvel Team-Up Ultimate Collection (2006)"
//         },
//         {
//           resourceURI: "http://gateway.marvel.com/v1/public/series/760",
//           name: "Ultimate Nightmare (2004 - 2005)"
//         },
//         {
//           resourceURI: "http://gateway.marvel.com/v1/public/series/3659",
//           name: "Ultimate War (2003)"
//         },
//         {
//           resourceURI: "http://gateway.marvel.com/v1/public/series/474",
//           name: "Ultimate X-Men (2001 - 2009)"
//         },
//         {
//           resourceURI: "http://gateway.marvel.com/v1/public/series/216",
//           name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB (1999)"
//         },
//         {
//           resourceURI: "http://gateway.marvel.com/v1/public/series/3188",
//           name: "Ultimates 3 (2007 - 2008)"
//         },
//         {
//           resourceURI: "http://gateway.marvel.com/v1/public/series/7515",
//           name: "Ultimates 3: Who Killed the Scarlet Witch? (2009 - Present)"
//         }
//       ],
//       returned: 10
//     },
//     stories: {
//       available: 18,
//       collectionURI: "http://gateway.marvel.com/v1/public/characters/1010911/stories",
//       items: [       
//       ],
//       returned: 18
//     },
//     events: {
//       available: 0,
//       collectionURI: "http://gateway.marvel.com/v1/public/characters/1010911/events",
//       items: [],
//       returned: 0
//     },
//     urls: [
     
//     ]
//   }

//   describe('Confirmacion', () => {
//     describe('when rendering default', () => {
//         it('should render the title', () => {
//             render(<Index comic={defaultValue} id={1}/>)
//             const title = screen.getByText('...')
//             expect(title).toBeInTheDocument()
//         })
//     })

// })