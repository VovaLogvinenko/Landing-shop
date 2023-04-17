import CenterMode from 'components/modals/carousel/CenterMode'
import React from 'react'

function About() {

  const images = [
    {id: 2, name: 'mountains', position: 0},
    {id: 3, name: 'girl', position: 1},
    {id: 4, name: 'shoes', position: 2},
    {id: 0, name: 'desert', position: 2},
    {id: 1, name: 'blouse', position: 1},
]

  return (
    <div className='about container'>
        <h2 className='about__title lazy-anim'>CHOOSE LOOKS</h2>
        <div className='about__carousel lazy-anim'>
            <CenterMode items={images}/>
        </div>
        <h2 className='about__title about__more-title lazy-anim'>MORE ABOUT US</h2>
        <p className="about__description about__first-text lazy-anim">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim sed libero commodo efficitur. Suspendisse et lorem ac neque dictum pellentesque nec sit amet nisl. Fusce rutrum quis purus ut pretium. Vivamus ornare mauris non ligula egestas, accumsan faucibus quam sollicitudin. Duis efficitur lorem tellus. Aliquam non rhoncus felis, porttitor consequat quam. Morbi gravida semper mattis. Nunc ultrices justo in pulvinar convallis. Curabitur dapibus ut tellus eu condimentum. Morbi vitae convallis purus, ac finibus ipsum.
        </p> <br /><br />
        <p className='about__description about__second-text lazy-anim'>Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam pulvinar eget vitae nisl. In ligula neque, vestibulum vel arcu eu, eleifend vestibulum tortor. Duis facilisis, est et aliquam dapibus, urna mauris sagittis mi, et mattis metus magna vel tellus. Phasellus sit amet volutpat ante, ut condimentum lorem. Quisque auctor sollicitudin dui, vitae egestas nunc suscipit et. Nullam eu quam sem. Donec a nibh molestie, aliquam libero maximus, feugiat velit. Curabitur ac accumsan velit. In hac habitasse platea dictumst.</p>
    </div>
  )
}

export default About