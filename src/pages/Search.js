import React from 'react'
import ButtonTabs from '../components/ButtonTabs'
import styled from 'styled-components'
import People from '../icons/People.svg'
import Content from '../icons/Content.svg'
import Community from '../icons/Community.svg'
import Offer from '../icons/Offer.svg'
import Diary from '../icons/Diary.svg'
import Bar from '../components/Bar';
import Hero from '../icons/Profile.webp';
import ButtonCard from '../components/ButtonCard'
import VibeCard from '../components/VibeCard'
function Search() {
    return (
        <Container>

            <input className='search' placeholder='search'></input>

            <CardContainer>
                <ButtonTabs Icon={People} text='People' />
                <ButtonTabs Icon={Content} text='Content' color='blue' />
                <ButtonTabs Icon={Community} text='Community' />
                <ButtonTabs Icon={Offer} text='Offer' />
                <ButtonTabs Icon={Diary} text='Diary' />
            </CardContainer>
            <Bar color='blue' />
            <div className='tags'>
                <ButtonCard Icon={Hero} label='MOOD' />
                <ButtonCard Icon={Hero} label='IQ' />
                <ButtonCard Icon={Hero} label='APPEAL' />
                <ButtonCard Icon={Hero} label='SOCIAL' />
                <ButtonCard Icon={Hero} label='IQ' />
                <ButtonCard Icon={Hero} label='APPEAL' />
                <ButtonCard Icon={Hero} label='SOCIAL' />
                <ButtonCard Icon={Hero} label='IQ' />
                <ButtonCard Icon={Hero} label='APPEAL' />
                <ButtonCard Icon={Hero} label='SOCIAL' />

            </div>

            <div className='cardContainer'>
                <h2>Top Vibes: World</h2>
                <div className='cards'>
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='2' />
                    <VibeCard name='John' number='3' />
                    <VibeCard name='John' number='4' />
                    <VibeCard name='John' number='5' />
                    <VibeCard name='John' number='6' />
                    <VibeCard name='John' number='7' />
                    <VibeCard name='John' number='8' />
                    <VibeCard name='John' number='9' />
                </div>
            </div>
            <div className='cardContainer'>
                <h2>Top Vibes: IQ</h2>
                <div className='cards'>
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='1' />
                </div>
            </div>
            <div className='cardContainer'>
                <h2>Top Vibes: Social</h2>
                <div className='cards'>
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='1' />
                    <VibeCard name='John' number='1' />
                </div>
            </div>
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    margin-top: 2.5rem;
    flex-direction: column;
    align-items: center;
    .search{
        width: 33rem;
        background-color: #ebebeb;
        text-align: center;
        border-radius: 1.2rem;
        color: grey;
        font-size: .8rem;
        padding: .5rem 1rem;
        border: none;
        outline: none;

    }
    .tags{
        width: 70%;
        display:flex;
        justify-content: center;
        gap: 2rem;
    }     
    .cardContainer{
        display: flex;
        flex-direction: column;
        .cards{
            display: flex;
            gap: 2rem;
        }
        h2{
            margin: 1rem;
        }
    }
`
const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 2.5rem 0;
`

export default Search