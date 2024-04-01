import React from "react";
import { render, screen, cleanup, queryAllByTitle } from '@testing-library/react';
import { MemoryRouter, RouterProvider } from 'react-router-dom';

import '@testing-library/jest-dom';

import InfoPicLeft from '../components/InfoPicLeft'
import InfoPicRight from '../components/InfoPicRight'
import AdvertBar from "../components/AdvertBar";
import ImageBlock from "../components/ImageBlock";
import Facilities from "../components/Facilities";
import Featured from "../components/Featured";
import FinePrint from "../components/FinePrint";
import ImageBlock2 from "../components/ImageBlock2";
import ImageGrid from "../components/ImageGrid";
import ImageGrid2 from "../components/ImageGrid2";
import LongCard from "../components/LongCard";
import MapIconBar from "../components/MapIconBar";
import PlaceCards from "../components/PlaceCards";
import PlaceHighlightsBlock from "../components/PlaceHighlightsBlock";

describe('Component Tests', () => {

    it('should display InfoPicLeft correctly', () => {

        const details = {
            location: 'Edinburgh',
            name: 'Dynamic Earth',
            info: `Dynamic Earth, a five star visitor attraction in Edinburgh, gives you the chance to experience the primeval forces of nature as they shaped our planet, to journey through space and time and even go on a 4DVENTURE around the world. You'll be embarking on the interactive adventure of a lifetime - the lifetime of our planet.`,
            pic: 'https://images.pexels.com/photos/14551495/pexels-photo-14551495.jpeg',
            refID: 'r3Jf824NqIuRup9oBwpc'

        }

        render(<MemoryRouter><InfoPicLeft details={details} /></MemoryRouter>)

        //screen.debug();

        const testImage = screen.getByRole('img')
        const testText = screen.getByText(details.info)

        expect(testImage.src).toEqual(`https://images.pexels.com/photos/14551495/pexels-photo-14551495.jpeg`);
        expect(testImage.id).toEqual(`r3Jf824NqIuRup9oBwpc`);
        expect(testImage.alt).toEqual(`Dynamic Earth in Edinburgh`);
        expect(testText).toBeInTheDocument()
    });

    it('should display InfoPicRight correctly', () => {

        const details = {
            location: 'Glasgow',
            name: 'The Social',
            info: `Welcome to The Social, your ultimate destination for a vibrant late-night experience in the heart of Glasgow city centre. Nestled in the bustling Royal Exchange Square, our stylish cocktail bar and restaurant boasts one of the best outdoor terraces in the city, offering breathtaking views and a perfect spot to unwind.`,
            pic: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg',
            refID: 'MWZ3JGwThj6wM9oLpY4v'
        }

        render(<MemoryRouter><InfoPicRight details={details} /></MemoryRouter>)

        //screen.debug();

        const testImage = screen.getByRole('img')
        const testText = screen.getByText(details.info)

        expect(testImage.src).toEqual(`https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg`);
        expect(testImage.id).toEqual(`MWZ3JGwThj6wM9oLpY4v`);
        expect(testImage.alt).toEqual(`The Social in Glasgow`);
        expect(testText).toBeInTheDocument()
    });

    it('should display AdvertBar correctly', async () => {

        const adverts = [
            {
                icon: 'fa-hotel',
                stat: '1200+',
                title: 'Stays',
                message: 'From executive suites to camping, you are sure to find a place to stay'
            },
            {
                icon: 'fa-binoculars',
                stat: '800+',
                title: 'Attractions',
                message: 'Top attractions to catch the interest of anyone or keep the family entertained'
            },
            {
                icon: 'fa-utensils',
                stat: '1800+',
                title: 'Dining',
                message: 'Even the most fussiest of eaters will struggle to not find their perfect meal'
            }
        ]

        render(<MemoryRouter><AdvertBar adverts={adverts} /></MemoryRouter>)

        //screen.debug();

        const cards = await screen.findAllByTitle('Advert Card')
        const card1 = screen.getByText('Stays')
        const card2 = screen.getByText('Attractions')
        const card3 = screen.getByText('Dining')

        expect(cards.length).toBe(3)
        expect(card1).toBeInTheDocument()
        expect(card2).toBeInTheDocument()
        expect(card3).toBeInTheDocument()
    });

    it('should display ImageBlock correctly', async () => {

        const images = [
            {
                location: 'Aberdeen',
                category: 'location',
                name: 'Aberdeen',
                refID: 'kOdNplPNb5qN0q87p8FI',
                image: 'https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg'
            },
            {
                location: 'Glasgow',
                category: 'location',
                name: 'Glasgow',
                refID: 'kOdNplPNb5qN0q87p8FI',
                image: 'https://images.pexels.com/photos/11142526/pexels-photo-11142526.jpeg'
            },
            {
                location: 'Edinburgh',
                category: 'location',
                name: 'Edinburgh',
                refID: 'kOdNplPNb5qN0q87p8FI',
                image: 'https://images.pexels.com/photos/7813912/pexels-photo-7813912.jpeg'
            },
            {
                location: 'Newcastle',
                category: 'location',
                name: 'Newcastle',
                refID: 'kOdNplPNb5qN0q87p8FI',
                image: 'https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg'
            },
            {
                location: 'London',
                category: 'location',
                name: 'London',
                refID: 'kOdNplPNb5qN0q87p8FI',
                image: 'https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg'
            },
            {
                location: 'Cardiff',
                category: 'location',
                name: 'Cardiff',
                refID: 'kOdNplPNb5qN0q87p8FI',
                image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg'
            }
        ]

        render(<MemoryRouter><ImageBlock popularArray={images} /></MemoryRouter>)

        //screen.debug();

        const imageBlock = await screen.findAllByRole('img')
        const cardiff = screen.queryByText('Cardiff')

        const aberdeenAlt = screen.getByAltText('Landscape of Aberdeen')
        const glasgowAlt = screen.getByAltText('Landscape of Glasgow')
        const edinburghAlt = screen.getByAltText('Landscape of Edinburgh')
        const newcastleAlt = screen.getByAltText('Landscape of Newcastle')
        const londonAlt = screen.getByAltText('Landscape of London')

        const aberdeenText = screen.getByText('Aberdeen')
        const glasgowText = screen.getByText('Glasgow')
        const edinburghText = screen.getByText('Edinburgh')
        const newcastleText = screen.getByText('Newcastle')
        const londonText = screen.getByText('London')

        expect(imageBlock.length).toBe(5)

        expect(cardiff).not.toBeInTheDocument()

        expect(aberdeenAlt).toBeInTheDocument()
        expect(aberdeenAlt.src).toBe('https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg')

        expect(glasgowAlt).toBeInTheDocument()
        expect(glasgowAlt.src).toBe('https://images.pexels.com/photos/11142526/pexels-photo-11142526.jpeg')

        expect(edinburghAlt).toBeInTheDocument()
        expect(edinburghAlt.src).toBe('https://images.pexels.com/photos/7813912/pexels-photo-7813912.jpeg')

        expect(newcastleAlt).toBeInTheDocument()
        expect(newcastleAlt.src).toBe('https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg')

        expect(londonAlt).toBeInTheDocument()
        expect(londonAlt.src).toBe('https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg')

        expect(aberdeenText).toBeInTheDocument()
        expect(glasgowText).toBeInTheDocument()
        expect(edinburghText).toBeInTheDocument()
        expect(newcastleText).toBeInTheDocument()
        expect(londonText).toBeInTheDocument()
    });

    it('should display Facilities correctly', async () => {

        const facilities = [
            {
                category: 'Bathroom',
                icon: 'fa-bath',
                items: ['Towels', 'Bath', 'Shower', 'Hairdryer']
            },
            {
                category: 'Bedroom',
                icon: 'fa-bed',
                items: ['Double Bed', 'Linen', 'Extra Pillows']
            },
            {
                category: 'General',
                icon: 'fa-circle',
                items: ['Designated smoking area', 'Wake-up service']
            },

        ]

        render(<MemoryRouter><Facilities facilities={facilities} /></MemoryRouter>)

        //screen.debug();

        const lists = screen.getAllByTitle('Facility List')
        const icons = await screen.findAllByTitle('Facility Icon')
        const ticks = await screen.findAllByTitle('List Tick')

        const bathroom = screen.getByText('Bathroom')
        const bedroom = screen.getByText('Bedroom')
        const general = screen.getByText('General')

        const towels = screen.getByText('Towels')
        const bath = screen.getByText('Bath')
        const shower = screen.getByText('Shower')
        const hairdryer = screen.getByText('Hairdryer')

        const bed = screen.getByText('Double Bed')
        const linen = screen.getByText('Linen')
        const pillows = screen.getByText('Extra Pillows')

        const smoking = screen.getByText('Designated smoking area')
        const wake = screen.getByText('Wake-up service')

        expect(lists.length).toBe(3)
        expect(icons.length).toBe(3)
        expect(ticks.length).toBe(9)

        expect(bathroom).toBeInTheDocument()
        expect(bedroom).toBeInTheDocument()
        expect(general).toBeInTheDocument()

        expect(towels).toBeInTheDocument()
        expect(bath).toBeInTheDocument()
        expect(shower).toBeInTheDocument()
        expect(hairdryer).toBeInTheDocument()

        expect(bed).toBeInTheDocument()
        expect(linen).toBeInTheDocument()
        expect(pillows).toBeInTheDocument()

        expect(smoking).toBeInTheDocument()
        expect(wake).toBeInTheDocument()

    });

    it('should display Featured correctly', async () => {


        const myFeatured = {
            location: 'Aberdeen',
            category: 'location',
            name: 'Aberdeen',
            refID: 'kOdNplPNb5qN0q87p8FI',
            images: [{
                image: 'https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg',
                info: 'Image 1 info'
            },
            {
                image: 'https://images.pexels.com/photos/7245098/pexels-photo-7245098.jpeg',
                info: 'Image 2 info'
            },
            {
                image: 'https://images.pexels.com/photos/3061345/pexels-photo-3061345.jpeg',
                info: 'Image 3 info'
            }]
        }

        render(<MemoryRouter><Featured myFeatured={myFeatured} /></MemoryRouter>)

        //screen.debug();

        const images = await screen.findAllByRole('img')

        const name = screen.getAllByText('Aberdeen')
        const info1 = screen.getByText('Image 1 info')
        const info2 = screen.getByText('Image 2 info')
        const info3 = screen.getByText('Image 2 info')

        expect(images.length).toBe(3)
        expect(images[0].src).toBe('https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg')
        expect(images[0].alt).toBe('Image 1 info')

        expect(images[1].src).toBe('https://images.pexels.com/photos/7245098/pexels-photo-7245098.jpeg')
        expect(images[1].alt).toBe('Image 2 info')

        expect(images[2].src).toBe('https://images.pexels.com/photos/3061345/pexels-photo-3061345.jpeg')
        expect(images[2].alt).toBe('Image 3 info')

        expect(name.length).toBe(3)
        expect(info1).toBeInTheDocument()
        expect(info2).toBeInTheDocument()
        expect(info3).toBeInTheDocument()
    });

    it('should display Fine print correctly', async () => {

        const fine = 'ID is required if making payment with cash'

        render(<MemoryRouter><FinePrint fine={fine} /></MemoryRouter>)


        const text = screen.getByText(/payment with cash/i)

        expect(text).toBeInTheDocument()
    });

    it('should display ImageBlock2 correctly', async () => {

        const images = [
            {
                location: 'London',
                category: 'dining',
                name: 'Cahoots',
                refID: 'MWZ3JGwThj6wM9oLpY4v',
                image: 'https://images.pexels.com/photos/36741/cork-bowls-wine-glass-of-wine.jpg'
            },
            {
                location: 'London',
                category: 'location',
                name: 'Silverleaf',
                refID: 'MWZ3JGwThj6wM9oLpY4v',
                image: 'https://images.pexels.com/photos/95960/pexels-photo-95960.jpeg'
            },
            {
                location: 'Edinburgh',
                category: 'location',
                name: 'Cairngorm',
                refID: 'MWZ3JGwThj6wM9oLpY4v',
                image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
            },
            {
                location: 'London',
                category: 'location',
                name: 'Wellington Coffee',
                refID: 'MWZ3JGwThj6wM9oLpY4v',
                image: 'https://images.pexels.com/photos/327136/pexels-photo-327136.jpeg'
            },
            {
                location: 'Aberdeen',
                category: 'location',
                name: 'Yorokobi',
                refID: 'MWZ3JGwThj6wM9oLpY4v',
                image: 'https://images.pexels.com/photos/5774152/pexels-photo-5774152.jpeg'
            },
            {
                location: 'Cardiff',
                category: 'location',
                name: 'Cardiff',
                refID: 'MWZ3JGwThj6wM9oLpY4v',
                image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg'
            }
        ]

        render(<MemoryRouter><ImageBlock2 popularArray={images} /></MemoryRouter>)

        //screen.debug();

        const imageBlock = await screen.findAllByRole('img')
        const six = screen.queryByText('Cardiff')

        const oneAlt = screen.getByAltText('Landscape of Cahoots')
        const twoAlt = screen.getByAltText('Landscape of Silverleaf')
        const threeAlt = screen.getByAltText('Landscape of Cairngorm')
        const fourAlt = screen.getByAltText('Landscape of Wellington Coffee')
        const fiveAlt = screen.getByAltText('Landscape of Yorokobi')

        const oneText = screen.getByText('Cahoots')
        const twoText = screen.getByText('Silverleaf')
        const threeText = screen.getByText('Cairngorm')
        const fourText = screen.getByText('Wellington Coffee')
        const fiveText = screen.getByText('Yorokobi')

        expect(imageBlock.length).toBe(5)

        expect(six).not.toBeInTheDocument()

        expect(oneAlt).toBeInTheDocument()
        expect(oneAlt.src).toBe('https://images.pexels.com/photos/36741/cork-bowls-wine-glass-of-wine.jpg')

        expect(twoAlt).toBeInTheDocument()
        expect(twoAlt.src).toBe('https://images.pexels.com/photos/95960/pexels-photo-95960.jpeg')

        expect(threeAlt).toBeInTheDocument()
        expect(threeAlt.src).toBe('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg')

        expect(fourAlt).toBeInTheDocument()
        expect(fourAlt.src).toBe('https://images.pexels.com/photos/327136/pexels-photo-327136.jpeg')

        expect(fiveAlt).toBeInTheDocument()
        expect(fiveAlt.src).toBe('https://images.pexels.com/photos/5774152/pexels-photo-5774152.jpeg')

        expect(oneText).toBeInTheDocument()
        expect(twoText).toBeInTheDocument()
        expect(threeText).toBeInTheDocument()
        expect(fourText).toBeInTheDocument()
        expect(fiveText).toBeInTheDocument()
    });

    it('should display ImageGrid correctly', async () => {

        const data = [
            {
                location: 'Aberdeen',
                category: 'location',
                name: 'Aberdeen',
                refID: 'kOdNplPNb5qN0q87p8FI',
                image: 'https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg',
                price: 84
            },
            {
                location: 'Glasgow',
                category: 'location',
                name: 'Glasgow',
                refID: 'kOdNplPNb5qN0q87p8FI',
                image: 'https://images.pexels.com/photos/11142526/pexels-photo-11142526.jpeg',
                price: 92
            },
            {
                location: 'Edinburgh',
                category: 'location',
                name: 'Edinburgh',
                refID: 'kOdNplPNb5qN0q87p8FI',
                image: 'https://images.pexels.com/photos/7813912/pexels-photo-7813912.jpeg',
                price: 97
            },
            {
                location: 'Newcastle',
                category: 'location',
                name: 'Newcastle',
                refID: 'kOdNplPNb5qN0q87p8FI',
                image: 'https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg',
                price: 79
            },
            {
                location: 'London',
                category: 'location',
                name: 'London',
                refID: 'kOdNplPNb5qN0q87p8FI',
                image: 'https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg',
                price: 80
            },
            {
                location: 'Cardiff',
                category: 'location',
                name: 'Cardiff',
                refID: 'kOdNplPNb5qN0q87p8FI',
                image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg',
                price: 85
            },
            {
                location: 'York',
                category: 'location',
                name: 'York',
                refID: 'kOdNplPNb5qN0q87p8FI',
                image: 'https://images.pexels.com/photos/18381522/pexels-photo-18381522/free-photo-of-historic-york-minster-in-england.jpeg',
                price: 102
            },
            {
                location: 'Birmingham',
                category: 'location',
                name: 'Birmingham',
                refID: 'kOdNplPNb5qN0q87p8FI',
                image: 'https://images.pexels.com/photos/17861995/pexels-photo-17861995/free-photo-of-baskerville-house-in-birmingham.jpeg',
                price: 89
            },
            {
                location: 'Manchester',
                category: 'location',
                name: 'Manchester',
                refID: 'kOdNplPNb5qN0q87p8FI',
                image: 'https://images.pexels.com/photos/15023016/pexels-photo-15023016/free-photo-of-aerial-view-of-manchester-town-hall.jpeg',
                price: 87
            },
            {
                location: 'Leeds',
                category: 'location',
                name: 'Leeds',
                refID: 'kOdNplPNb5qN0q87p8FI',
                image: 'https://images.pexels.com/photos/8070156/pexels-photo-8070156.jpeg',
                price: 82
            }
        ]

        render(<MemoryRouter><ImageGrid data={data} /></MemoryRouter>)

        const imageGrid = await screen.findAllByTitle('Grid Card')

        const ten = screen.queryByText('Leeds')

        const oneText = screen.getByText('Aberdeen')
        const twoText = screen.getByText('Glasgow')
        const threeText = screen.getByText('Edinburgh')
        const fourText = screen.getByText('Newcastle')
        const fiveText = screen.getByText('London')
        const sixText = screen.getByText('Cardiff')
        const sevenText = screen.getByText('York')
        const eightText = screen.getByText('Birmingham')
        const nineText = screen.getByText('Manchester')

        const onePrice = screen.getByText(/84/i)
        const twoPrice = screen.getByText(/92/i)
        const threePrice = screen.getByText(/97/i)
        const fourPrice = screen.getByText(/79/i)
        const fivePrice = screen.getByText(/80/i)
        const sixPrice = screen.getByText(/85/i)
        const sevenPrice = screen.getByText(/102/i)
        const eightPrice = screen.getByText(/89/i)
        const ninePrice = screen.getByText(/87/i)

        expect(imageGrid.length).toBe(9)

        expect(ten).not.toBeInTheDocument()

        expect(oneText).toBeInTheDocument()
        expect(twoText).toBeInTheDocument()
        expect(threeText).toBeInTheDocument()
        expect(fourText).toBeInTheDocument()
        expect(fiveText).toBeInTheDocument()
        expect(sixText).toBeInTheDocument()
        expect(sevenText).toBeInTheDocument()
        expect(eightText).toBeInTheDocument()
        expect(nineText).toBeInTheDocument()

        expect(onePrice).toBeInTheDocument()
        expect(twoPrice).toBeInTheDocument()
        expect(threePrice).toBeInTheDocument()
        expect(fourPrice).toBeInTheDocument()
        expect(fivePrice).toBeInTheDocument()
        expect(sixPrice).toBeInTheDocument()
        expect(sevenPrice).toBeInTheDocument()
        expect(eightPrice).toBeInTheDocument()
        expect(ninePrice).toBeInTheDocument()
    });

    it('should display ImageGrid2 correctly', async () => {

        const data = [
            {
                location: 'London',
                category: 'attraction',
                name: 'The British Museum',
                refID: 'r3Jf824NqIuRup9oBwpc',
                image: 'https://images.pexels.com/photos/4588837/pexels-photo-4588837.jpeg',
                type: 'Museum'
            },
            {
                location: 'London',
                category: 'attraction',
                name: 'Natural History Museum',
                refID: 'r3Jf824NqIuRup9oBwpc',
                image: 'https://images.pexels.com/photos/12227297/pexels-photo-12227297.jpeg',
                type: 'Museum'
            },
            {
                location: 'London',
                category: 'attraction',
                name: 'Holland Park',
                refID: 'r3Jf824NqIuRup9oBwpc',
                image: 'https://images.pexels.com/photos/10011207/pexels-photo-10011207.jpeg',
                type: 'Park'
            },
            {
                location: 'London',
                category: 'attraction',
                name: 'The Shard',
                refID: 'r3Jf824NqIuRup9oBwpc',
                image: 'https://images.pexels.com/photos/11001430/pexels-photo-11001430.jpeg',
                type: 'Sightseeing'
            },
            {
                location: 'London',
                category: 'attraction',
                name: 'Tower Of London',
                refID: 'r3Jf824NqIuRup9oBwpc',
                image: 'https://images.pexels.com/photos/248193/pexels-photo-248193.jpeg',
                type: 'Sightseeing'
            },
            {
                location: 'London',
                category: 'attraction',
                name: 'The Green Park',
                refID: 'r3Jf824NqIuRup9oBwpc',
                image: 'https://images.pexels.com/photos/260259/pexels-photo-260259.jpeg',
                type: 'Park'
            },
            {
                location: 'Edinburgh',
                category: 'attraction',
                name: 'Leith Beach',
                refID: 'r3Jf824NqIuRup9oBwpc',
                image: 'https://images.pexels.com/photos/133614/pexels-photo-133614.jpeg',
                type: 'Beach'
            }

        ]

        render(<MemoryRouter><ImageGrid2 data={data} /></MemoryRouter>)

        const imageGrid = await screen.findAllByTitle('Grid Card')

        const seven = screen.queryByText('Leith Beach')

        const oneName = screen.getByText(/The British Museum/i)
        const twoName = screen.getByText(/Natural History Museum/i)
        const threeName = screen.getByText(/Holland Park/i)
        const fourName = screen.getByText(/The Shard/i)
        const fiveName = screen.getByText(/Tower Of London/i)
        const sixName = screen.getByText(/The Green Park/i)

        const museumCount = screen.getAllByText(/Museum/i)
        const parkCount = screen.getAllByText(/Park/i)
        const sightseeingCount = screen.getAllByText(/Sightseeing/i)

        expect(imageGrid.length).toBe(6)

        expect(seven).not.toBeInTheDocument()

        expect(oneName).toBeInTheDocument()
        expect(twoName).toBeInTheDocument()
        expect(threeName).toBeInTheDocument()
        expect(fourName).toBeInTheDocument()
        expect(fiveName).toBeInTheDocument()
        expect(sixName).toBeInTheDocument()

        // Two of the places have museum in their name
        expect(museumCount.length).toBe(4)
        // Two of the places have park in their name
        expect(parkCount.length).toBe(4)
        expect(sightseeingCount.length).toBe(2)

    });

    it('should display LongCard correctly', async () => {

        const data = [
            {
                address: '5 Hill Rd, AB11 6JL',
                category: 'stay',
                image: 'https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg',
                location: 'Aberdeen',
                name: 'Holiday Inn',
                ourPick: 'false',
                price: 95,
                refID: 'fXsDuP5ZMGHwk8otM2wp',
                reviewCount: 586,
                reviewScore: 7.5,
                reviewText: 'Good',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                text: 'Center of the city, making it a excellent hub location for your visit.',
                type: 'Studio',
                visited: 322
            },
            {
                address: '1 Princes St, EH2 2EQ',
                category: 'stay',
                image: 'https://images.pexels.com/photos/2908978/pexels-photo-2908978.jpeg',
                location: 'Edinburgh',
                name: 'The Balmoral',
                ourPick: 'true',
                price: 265,
                refID: 'fXsDuP5ZMGHwk8otM2wp',
                reviewCount: 59,
                reviewScore: 9.4,
                reviewText: 'Great',
                stars: ['fa-star', 'fa-star', 'fa-star', 'fa-star'],
                text: 'Refined area with trendy bars & Georgian architecture.',
                type: 'Apartment',
                visited: 124
            }
        ]

        render(<MemoryRouter><LongCard data={data} /></MemoryRouter>)

        //screen.debug()

        const cards = await screen.findAllByTitle('Search Info Card')

        const name1 = screen.getByText(/Holiday Inn/i)
        const location1 = screen.getByText(/Aberdeen/i)
        const address1 = screen.getByText(/5 Hill Rd, AB11 6J/i)
        const type1 = screen.getByText(/Studio/i)
        const text1 = screen.getByText(/Center of the city, making it a excellent hub location for your visit./i)
        const visited1 = screen.getByText(/Visited: 322/i)
        const reviewCount1 = screen.getByText(/Reviews: 586/i)
        // Two numbers are created and displayed based on screen size
        const reviewScore1 = screen.getAllByText(/7.5/i)
        const reviewText1 = screen.getByText(/Good/i)
        const price1 = screen.getByText(/£95/i)

        const name2 = screen.getByText(/The Balmoral/i)
        const location2 = screen.getByText(/Edinburgh/i)
        const address2 = screen.getByText(/1 Princes St, EH2 2EQ/i)
        const type2 = screen.getByText(/Apartment/i)
        const text2 = screen.getByText(/Refined area with trendy bars & Georgian architecture./i)
        const visited2 = screen.getByText(/Visited: 124/i)
        const reviewCount2 = screen.getByText(/Reviews: 59/i)
        // Two numbers are created and displayed based on screen size
        const reviewScore2 = screen.getAllByText(/9.4/i)
        const reviewText2 = screen.getByText(/Great/i)
        const price2 = screen.getByText(/£265/i)

        expect(cards.length).toBe(2)

        expect(name1).toBeInTheDocument()
        expect(location1).toBeInTheDocument()
        expect(address1).toBeInTheDocument()
        expect(type1).toBeInTheDocument()
        expect(text1).toBeInTheDocument()
        expect(visited1).toBeInTheDocument()
        expect(reviewCount1).toBeInTheDocument()
        // Two numbers are created and displayed based on screen size
        expect(reviewScore1.length).toBe(2)
        expect(reviewText1).toBeInTheDocument()
        expect(price1).toBeInTheDocument()

        expect(name2).toBeInTheDocument()
        expect(location2).toBeInTheDocument()
        expect(address2).toBeInTheDocument()
        expect(type2).toBeInTheDocument()
        expect(text2).toBeInTheDocument()
        expect(visited2).toBeInTheDocument()
        expect(reviewCount2).toBeInTheDocument()
        // Two numbers are created and displayed based on screen size
        expect(reviewScore2.length).toBe(2)
        expect(reviewText2).toBeInTheDocument()
        expect(price2).toBeInTheDocument()
    });

    it('should display MapIconBar correctly', async () => {

        render(<MemoryRouter><MapIconBar /></MemoryRouter>)

        //screen.debug()

        const icons = await screen.findAllByTitle('Map Icon')

        const stays = screen.queryByText(/Stays/i)
        const attractions = screen.queryByText(/Attractions/i)
        const restaurants = screen.queryByText(/Restaurants/i)
        const bars = screen.queryByText(/Bars/i)
        const coffee = screen.queryByText(/Coffee Shops/i)

        expect(icons.length).toBe(5)

        expect(stays).toBeInTheDocument()
        expect(attractions).toBeInTheDocument()
        expect(restaurants).toBeInTheDocument()
        expect(bars).toBeInTheDocument()
        expect(coffee).toBeInTheDocument()
    });

    it('should display PlaceCards correctly', async () => {


        const data = [
            {
                address: '5 Hill Rd, Aberdeen AB11 6JL',
                category: 'stay',
                image: '',
                images: [],
                location: 'Aberdeen',
                name: 'Holiday Inn',
                ourPick: 'false',
                price: 95,
                refID: 'fXsDuP5ZMGHwk8otM2wp',
                reviewCount: 586,
                reviewScore: 7.5,
                reviewText: 'Good',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                text: 'Center of the city, making it a excellent hub location for your visit.',
                type: 'Studio',
                visited: 322
            },
            {
                address: '1 Princes St, Edinburgh EH2 2EQ',
                category: 'stay',
                image: '',
                images: [],
                location: 'Edinburgh',
                name: 'The Balmoral',
                ourPick: 'true',
                price: 265,
                refID: 'fXsDuP5ZMGHwk8otM2wp',
                reviewCount: 59,
                reviewScore: 9.4,
                reviewText: 'Great',
                stars: ['fa-star', 'fa-star', 'fa-star', 'fa-star'],
                text: 'Refined area with trendy bars & Georgian architecture.',
                type: 'Apartment',
                visited: 124
            },
            {
                address: '15 Union St, Aberdeen AB11 5BU',
                category: 'stay',
                image: '',
                images: [],
                location: 'Aberdeen',
                name: 'Royal Athenaeum Suites',
                ourPick: 'true',
                price: 150,
                refID: 'fXsDuP5ZMGHwk8otM2wp',
                reviewCount: 234,
                reviewScore: 9.3,
                reviewText: 'Great',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                text: 'Center Of The City',
                type: 'Hotel',
                visited: 213
            },
            {
                address: '32 Coates Gardens, Edinburgh EH12 5LE',
                category: 'stay',
                image: '',
                images: [],
                location: 'Edinburgh',
                name: 'No.32 Hotel',
                ourPick: 'true',
                price: 115,
                refID: 'fXsDuP5ZMGHwk8otM2wp',
                reviewCount: 358,
                reviewScore: 9.0,
                reviewText: 'Great',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                text: 'Set in a Georgian townhouse on a cobblestone road, this casual hotel is a 4-minute walk from Haymarket train station.',
                type: 'Hotel',
                visited: 500
            },
            {
                address: 'N Deeside Rd, Pitfodels, Aberdeen AB15 9YA',
                category: 'stay',
                image: '',
                images: [],
                location: 'Aberdeen',
                name: 'The Marcliffe',
                ourPick: 'false',
                price: 160,
                refID: 'fXsDuP5ZMGHwk8otM2wp',
                reviewCount: 420,
                reviewScore: 8.7,
                reviewText: 'Good',
                stars: ['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star'],
                text: 'Hotel & Spa',
                type: 'Studio',
                visited: 289
            },
            {
                address: '100 Minories, London EC3N 1JY',
                category: 'stay',
                image: '',
                images: [],
                location: 'London',
                name: 'Blue Orchid',
                ourPick: 'true',
                price: 99,
                refID: 'fXsDuP5ZMGHwk8otM2wp',
                reviewCount: 639,
                reviewScore: 8.7,
                reviewText: 'Good',
                stars: ['fa-star', 'fa-star'],
                text: 'Financial district, home to banking institutions, St. Paul’s Cathedral & Barbican arts centre.',
                type: 'Apartment',
                visited: 1248
            },
            {
                address: 'Souter Head Rd, Cove Bay, Aberdeen AB12 3LF',
                category: 'stay',
                image: '',
                images: [],
                location: 'Aberdeen',
                name: 'The Aberdeen Altens',
                ourPick: 'false',
                price: 115,
                refID: 'fXsDuP5ZMGHwk8otM2wp',
                reviewCount: 859,
                reviewScore: 8.6,
                reviewText: 'Good',
                stars: ['fa-star', 'fa-star', 'fa-star', 'fa-star'],
                text: '2nd Floor Full Apartment',
                type: 'Apartment',
                visited: 322
            },
        ]

        render(<MemoryRouter><PlaceCards data={data} /></MemoryRouter>)

        //screen.debug()

        const cards = screen.queryAllByTitle(/Place Card/i)

        const altens = screen.queryByText(/The Aberdeen Altens/i)

        const name1 = screen.queryAllByText(/Holiday Inn/i)
        const location1 = screen.queryAllByText(/Aberdeen/i)
        const text1 = screen.queryAllByText(/Center of the city, making it a excellent hub location for your visit./i)
        const reviewScore1 = screen.queryAllByText(/7.5/i)
        const price1 = screen.queryAllByText(/From £95 Per Night/i)

        const name6 = screen.queryAllByText(/Blue Orchid/i)
        const location6 = screen.queryAllByText(/London/i)
        const text6 = screen.queryAllByText(/Financial district, home to banking institutions, St. Paul’s Cathedral & Barbican arts centre./i)
        const reviewScore6 = screen.queryAllByText(/8.7/i)
        const price6 = screen.queryAllByText(/From £95 Per Night/i)

        const name4 = screen.queryAllByText(/No.32 Hotel/i)
        const location4 = screen.queryAllByText(/Edinburgh/i)
        const text4 = screen.queryAllByText(/Set in a Georgian townhouse on a cobblestone road, this casual hotel is a 4-minute walk from Haymarket train station./i)
        const reviewScore4 = screen.queryAllByText(/9.0/i)
        const price4 = screen.queryAllByText(/From £115 Per Night/i)

        expect(cards.length).toBe(6)

        expect(altens).not.toBeInTheDocument()

        expect(name1.length).toBeGreaterThan(0)
        expect(location1.length).toBeGreaterThan(0)
        expect(text1.length).toBeGreaterThan(0)
        expect(reviewScore1.length).toBeGreaterThan(0)
        expect(price1.length).toBeGreaterThan(0)

        expect(name6.length).toBeGreaterThan(0)
        expect(location6.length).toBeGreaterThan(0)
        expect(text6.length).toBeGreaterThan(0)
        expect(reviewScore6.length).toBeGreaterThan(0)
        expect(price6.length).toBeGreaterThan(0)

        expect(name4.length).toBeGreaterThan(0)
        expect(location4.length).toBeGreaterThan(0)
        expect(text4.length).toBeGreaterThan(0)
        expect(reviewScore4.length).toBeGreaterThan(0)
        expect(price4.length).toBeGreaterThan(0)
    });

    it('should display PlaceHighLightsBlock correctly', async () => {

        const data = [
            {
                icon: 'fa-shower',
                name: 'Shower'
            },
            {
                icon: 'fa-tv',
                name: 'TV'
            },
            {
                icon: 'fa-phone',
                name: 'Phone'
            },
            {
                icon: 'fa-mug-hot',
                name: 'Hot Drinks'
            },
            {
                icon: 'fa-square-parking',
                name: 'Free Parking'
            },
            {
                icon: 'fa-elevator',
                name: 'Lift'
            },
            {
                icon: 'fa-bath',
                name: 'Bath'
            },
            {
                icon: 'fa-fan',
                name: 'Air Conditioning'
            },
            {
                icon: 'fa-fire',
                name: 'Heating'
            },
            {
                icon: 'fa-vault',
                name: 'Deposit Box'
            },
            {
                icon: 'fa-ban-smoking',
                name: 'Non Smoking'
            },
            {
                icon: 'fa-paw',
                name: 'Pets Allowed'
            },
            {
                icon: 'fa-person-swimming',
                name: 'Swimming Pool'
            }
        ]

        render(<MemoryRouter><PlaceHighlightsBlock data={data} /></MemoryRouter>)

        //screen.debug()

        const icons = screen.getAllByTitle(/Highlight Info/i)

        const shower = screen.queryByText(/Shower/i)
        const fan = screen.queryByText(/Air Conditioning/i)
        const fire = screen.queryByText(/Heating/i)
        const vault = screen.queryByText(/Deposit Box/i)
        const paw = screen.queryByText(/Pets Allowed/i)

        const pool = screen.queryByText(/Swimming Pool/i)

        expect(icons.length).toBe(12)

        expect(shower).toBeInTheDocument()
        expect(fan).toBeInTheDocument()
        expect(fire).toBeInTheDocument()
        expect(vault).toBeInTheDocument()
        expect(paw).toBeInTheDocument()

        expect(pool).not.toBeInTheDocument()
    });


})